import type { GatsbyNode } from "gatsby"
import type { ObjectSchema } from "gatsby-plugin-utils"

const wrapOptions = (innerOptions) => `{
  resolve: \`@alexjorgef/gatsby-source-discogs\`,
  options: {
    ${innerOptions.trim()}
  },
}
`

export const pluginOptionsSchema: GatsbyNode["pluginOptionsSchema"] = ({ Joi }): ObjectSchema =>
  Joi.object({
    api_token: Joi.string()
      .required()
      .description(`Your Discogs API token.`)
      .meta({ example: wrapOptions(`api_token: \`YOUR_API_TOKEN\`,`) }),
    username: Joi.string()
      .required()
      .description(`Your Discogs username.`)
      .meta({ example: wrapOptions(`username: \`alexjorgef\`,`) }),
  })
