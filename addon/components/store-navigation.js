import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class StoreNavigationComponent extends Component {
  @service storefront;

  @tracked categories = [];

  @action async setupStoreNavigation() {
    this.fetchCategories();
  }

  @action fetchCategories() {
    this.storefront.categories
      .query({ with_subcategories: true })
      .then((categories) => {
        this.categories = categories;
      });
  }
}
