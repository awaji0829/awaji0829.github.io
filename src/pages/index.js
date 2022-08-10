import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li
              key={post.fields.slug}
              style={{
                padding: "40px",
                border: "3px solid var(--cardbg)",
                borderRadius: "10px",
                // transition: "color 0.2s ease-out, background 0.2s ease-out",
              }}
            >
              <article
                style={{
                  margin: 0,
                  // transition: "color 0.2s ease-out, background 0.2s ease-out",
                }}
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span
                        itemProp="headline"
                        style={{
                          color: "var(--textNormal)",
                          // transition: "color 0.2s ease-out, background 0.2s ease-out",
                        }}
                      >
                        {title}
                      </span>
                    </Link>
                  </h2>
                  <small
                    style={{
                      color: "var(--textNormal)",
                      // transition: "color 0.2s ease-out, background 0.2s ease-out",
                    }}
                  >
                    {post.frontmatter.date}
                  </small>
                </header>
                <section>
                  <p
                    style={{
                      color: "var(--textNormal)",
                      // transition: "color 0.2s ease-out, background 0.2s ease-out",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
