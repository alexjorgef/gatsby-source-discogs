import type { GatsbyNode } from "gatsby"
import { Client as Discogs } from "disconnect"
import { promisify } from "util"
import { ERROR_CODES, NODE_TYPE_BASE, NODE_SUBTYPE_USERLISTS } from "./constants"
import type { DiscogsNodePluginOptions } from "./types/plugin-options"

export const sourceNodes: GatsbyNode["sourceNodes"] = async (gatsbyApi, pluginOptions: DiscogsNodePluginOptions) => {
  const { api_token, username } = pluginOptions
  let auth = {}
  if (api_token !== undefined) {
    auth = { userToken: api_token }
  }
  const user = new Discogs(auth).user()
  const userLists = promisify(user.getLists)

  let userListsRes

  try {
    userListsRes = await userLists(username)
  } catch (error) {
    gatsbyApi.reporter.panicOnBuild({
      id: ERROR_CODES.createDiscogsUser,
      context: {
        sourceMessage: username,
      },
    })
  }
  await Promise.all(
    userListsRes.lists.map(async (userList) => {
      const list = promisify(user.list().getItems)
      const listRes = await list(userList.id)
      await gatsbyApi.actions.createNode({
        ...listRes,
        id: gatsbyApi.createNodeId(`${NODE_TYPE_BASE}${NODE_SUBTYPE_USERLISTS}-${listRes.id.toString()}`),
        parent: null,
        children: [],
        internal: {
          type: `${NODE_TYPE_BASE}${NODE_SUBTYPE_USERLISTS}`,
          content: JSON.stringify(listRes),
          contentDigest: gatsbyApi.createContentDigest(listRes),
        },
      })
    })
  )
}
