import Service from '@ember/service';
import Storefront from '@fleetbase/storefront';
import { getOwner } from '@ember/application';

export default class StorefrontService extends Service {
    constructor() {
        super(...arguments);
        const config = this.getConfig();

        try {
            this.sdk = new Storefront(config?.key);
        } catch (error) {
            throw error;
        }
    }
    
    getConfig() {
        return getOwner(this).resolveRegistration('config:environment')['storefront'];
    }
}
