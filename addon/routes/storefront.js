import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class StorefrontRoute extends Route {
    @service storefront;

    model() {
        return this.storefront.about();
    }
}
