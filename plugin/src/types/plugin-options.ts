import type { IPluginRefOptions, PluginOptions as GatsbyPluginOptions } from "gatsby"

export interface DiscogsPluginOptions extends IPluginRefOptions {
  api_token: string
  username: string
}

export interface DiscogsNodePluginOptions extends GatsbyPluginOptions {
  api_token: string
  username: string
}
