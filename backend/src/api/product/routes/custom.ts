export default {
  routes: [
    {
      method: "GET",
      path: "/products/:slug",
      handler: "api::product.product.findOne",
    },
  ],
}
