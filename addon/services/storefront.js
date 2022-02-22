import Service from '@ember/service';
import Storefront from '@fleetbase/storefront';
import { storageFor } from 'ember-local-storage';
import { get, set } from '@ember/object';
import config from 'ember-get-config';

export default class StorefrontService extends Service {
  constructor() {
    super(...arguments);

    let sdk;

    try {
      sdk = new Storefront(this.config?.key, {
        host: this.host,
      });
    } catch (error) {
      throw error;
    }

    for (let key in sdk) {
      if (Object.prototype.hasOwnProperty.call(sdk, key)) {
        set(this, key, sdk[key]);
      }
    }

    this.about = () => {
      return new Promise((resolve, reject) => {
        if (this.storage.get('about')) {
          return resolve(this.storage.get('about'));
        }

        return sdk
          .about()
          .then((response) => {
            this.storage.set('about', response);

            return response;
          })
          .then(resolve)
          .catch(reject);
      });
    };

    this.search = sdk.search;
  }

  @storageFor('application') storage;

  get config() {
    return config.storefront;
  }

  get host() {
    return get(config, 'fleetbase.host');
  }
}
