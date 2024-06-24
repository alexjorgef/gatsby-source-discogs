import type { GatsbyNode } from "gatsby"
import { ERROR_CODES } from "./constants"

export const onPluginInit: GatsbyNode["onPluginInit"] = ({ reporter }) => {
  reporter.setErrorMap({
    [ERROR_CODES.userIdNotFound]: {
      text: (context) =>
        `Couldn't find a user_id for the username "${context.username}". Did you enter the correct username?

Original error: ${context.sourceMessage}`,
      level: `ERROR`,
      category: `USER`,
    },
    [ERROR_CODES.createDiscogsUser]: {
      text: (context) =>
        `There was an error creating the "DiscogsUser" node.

Original error (username: ${context.username}): ${context.sourceMessage}`,
      level: `ERROR`,
      category: `USER`,
    },
  })
}
