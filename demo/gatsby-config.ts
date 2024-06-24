import "dotenv/config"
import type { GatsbyConfig, PluginRef } from "gatsby"
import type { DiscogsPluginOptions } from "@alexjorgef/gatsby-source-discogs"

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `@alexjorgef/gatsby-source-discogs`,
    siteUrl: `https://github.com/alexjorgef/gatsby-source-discogs/`,
  },
  jsxRuntime: `automatic`,
  graphqlTypegen: {
    generateOnBuild: true,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@alexjorgef/gatsby-source-discogs`,
      options: {
        api_token: process.env.api_token,
        username: process.env.username,
      } as DiscogsPluginOptions,
    },
  ] as PluginRef[],
}

export default config
