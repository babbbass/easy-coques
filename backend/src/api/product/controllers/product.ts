/**
 * product controller
 */

import { factories } from "@strapi/strapi"

export default factories.createCoreController(
  "api::product.product",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params
      //const sanitizedQueryParams = this.sanitizeQuery(ctx);
      const entity = await strapi.db.query("api::product.product").findOne({
        where: { slug },
        populate: {
          image: {
            fields: ["url", "width", "height", "alternativeText"],
          },
          categories: {
            fields: ["name"],
          },
        },
      })
      console.log("entity", entity)
      const sanitizedResults = await this.sanitizeOutput(entity, ctx)

      return this.transformResponse(sanitizedResults)
    },
  })
)

// export default factories.createCoreController("api::product.product")
