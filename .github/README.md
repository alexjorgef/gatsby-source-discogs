# @alexjorgef/gatsby-source-discogs

Source playlists from [Discogs](https://www.discogs.com/) into [Gatsby](https://www.gatsbyjs.com/).

## Install

```shell
npm install @alexjorgef/gatsby-source-discogs
```

## How to use

Add the plugin to your `gatsby-config` file:

```js:title=gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@alexjorgef/gatsby-source-discogs`,
      options: {}
    }
  ]
}
```

## Plugin Options

- [@alexjorgef/gatsby-source-discogs](#alexjorgefgatsby-source-discogs)
  - [Install](#install)
  - [How to use](#how-to-use)
  - [Plugin Options](#plugin-options)
    - [api_token (**required**)](#api_token-required)
    - [username (**required**)](#username-required)

### api_token (**required**)

Your Discogs API token. Create an account on Discogs, go to [Settings > Developers](https://www.discogs.com/settings/developers) to register an app and copy the API token.

**Field type**: `String`

```js
{
  resolve: `@alexjorgef/gatsby-source-discogs`,
  options: {
    api_token: `YOUR_API_TOKEN`,
  },
}
```

### username (**required**)

Your Discogs username.

**Field type**: `String`

```js
{
  resolve: `@alexjorgef/gatsby-source-discogs`,
  options: {
    username: `alexjorgef`,
  },
}
```
