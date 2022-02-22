import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function () {
  this.route('storefront', { path: '/' }, () => {
    this.route('product');
    this.route('category');
  });
});
