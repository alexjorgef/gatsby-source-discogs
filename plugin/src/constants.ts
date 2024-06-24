export const DEFAULT_OPTIONS = {}

export const BASE_URL = `https://api.discogs.com/`

export const SIZES = {
  sq: `sq_75px`,
  q: `sq_150px`,
  t: `_100px`,
  s: `_240px`,
  n: `_320px`,
  m: `_500px`,
  z: `_640px`,
  c: `_800px`,
  l: `_1024px`,
  h: `_1600px`,
  k: `_2048px`,
  o: `original`,
}

export const NODE_TYPE_BASE = `Discogs`
export const NODE_SUBTYPE_USERLISTS = `UserLists`

export const ERROR_CODES = {
  userIdNotFound: `10000`,
  getData: `10001`,
  transformResponse: `10002`,
  createDiscogsUser: `10003`,
  getExtensionData: `10004`,
  sourceNodes: `10005`,
}
