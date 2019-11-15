import React from "react"
import { Link, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const latestPost = data.prismic.allPosts.edges[0]

  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="text-red-600">This text is styled with Tailwind!</h1>
      <h2 className="mb-6">
        I'm from Prismic -> {RichText.asText(latestPost.node.title)}
      </h2>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}
export const query = graphql`
  {
    prismic {
      allPosts(sortBy: date_DESC) {
        edges {
          node {
            _meta {
              id
              uid
              type
            }
            title
            date
          }
        }
      }
    }
  }
`

export default IndexPage
