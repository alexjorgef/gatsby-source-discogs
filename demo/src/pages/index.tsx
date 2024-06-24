/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import { graphql } from "gatsby"
import * as React from "react"

const DiscordUserListsItems = ({ userPlaylists }) => (
  <React.Fragment>
    {userPlaylists.map((p) => {
      if (!p.id) return null

      return (
        <React.Fragment key={p.display_title}>
          <h4>
            {p.display_title} (ID: {p.id})
          </h4>
          <p>Comment: {p.comment !== `` ? p.comment : `-`}</p>
          <p>Image URL: {p.image_url}</p>
          <div className="img-grid">
            <figure key={p.description}>
              <img loading="lazy" alt={p.description} src={p.image_url} />
            </figure>
          </div>
        </React.Fragment>
      )
    })}
  </React.Fragment>
)

const DiscordUserLists = ({ userPlaylists }) => (
  <React.Fragment>
    {userPlaylists.map((p) => {
      if (!p.name) return null

      return (
        <React.Fragment key={p.name}>
          <h2>{p.name}</h2>
          <div className="img-grid">
            <figure key={p.description}>
              <img loading="lazy" alt={p.description} src={p.image_url} />
            </figure>
          </div>
          <p>ID: {p.id}</p>
          <p>Name: {p.name}</p>
          <p>Description: {p.description}</p>
          <p>Image URL: {p.image_url}</p>
          <p>URI: {p.uri}</p>
          <p>Date added: {p.date_added}</p>
          <p>Date changed: {p.date_changed}</p>
          <p>Resource URL: {p.resource_url}</p>
          <p>Is public: {p.public === true ? `Yes` : `No`}</p>
          <h3>Items</h3>
          {p.items.length > 0 ? <DiscordUserListsItems userPlaylists={p.items} /> : <p>No items found</p>}
        </React.Fragment>
      )
    })}
  </React.Fragment>
)

const IndexPage = ({ data: { allDiscogsUserLists } }: { data: Queries.IndexPageQuery }) => (
  <div className="wrapper">
    <main>
      <h1>@alexjorgef/gatsby-source-discogs</h1>
      <p>
        The user has <b>{allDiscogsUserLists.totalCount}</b> playlists on Discogs
      </p>
      {allDiscogsUserLists.nodes &&
        (allDiscogsUserLists.nodes.length > 0 ? (
          <DiscordUserLists userPlaylists={allDiscogsUserLists.nodes} />
        ) : (
          <p>No playlists found</p>
        ))}
    </main>
    <footer>
      Demo of @alexjorgef/gatsby-source-discogs –{` `}
      <a href="https://www.github.com/alexjorgef/gatsby-source-discogs">GitHub</a>
      {` `}– <a href="https://www.alexjorgef.com">Website</a>
    </footer>
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexPage {
    allDiscogsUserLists {
      totalCount
      nodes {
        id
        name
        image_url
        uri
        description
        public
        date_added
        date_changed
        resource_url
        items {
          id
          image_url
          display_title
          uri
          image_url
          resource_url
          comment
          type
          stats {
            community {
              in_wantlist
              in_collection
            }
            user {
              in_collection
              in_wantlist
            }
          }
        }
      }
    }
  }
`

export const Head = () => (
  <>
    <title>@alexjorgef/gatsby-source-discogs</title>
    <link
      rel="icon"
      href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🎨</text></svg>"
    />
  </>
)
