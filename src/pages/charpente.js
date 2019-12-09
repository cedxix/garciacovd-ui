import React from "react"
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image/withIEPolyfill'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HTMLRender from "../components/HtmlRenderer"

const Charpente = ({data}) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ marginBottom: `1.45rem` }}>
        <ul>
          {data.allStrapiPages.edges.map(({node}) => {
            return(
              <div key={node.id}>
                <h1>{node.title}</h1>
                <div>{node.sections.map((section) => (
                  <div>
                    <Img fluid={section.headerPicture.childImageSharp.fluid}/>
                    <HTMLRender markdown={section.content} />
                  </div>
                ))}</div>
              </div>
            )
          })}
        </ul>
      </div>

    </Layout>
  )}

export default Charpente
export const pageQuery = graphql`
    query CharpenteQuery {
        allStrapiPages {
            edges {
                node {
                    id
                    title
                    sections {
                        isDark
                        isLeft
                        headerPicture {
                            childImageSharp {
                                fluid(maxWidth: 1200, maxHeight: 350, , quality: 80) {
                                    ...GatsbyImageSharpFluid
                                    presentationWidth
                                }
                            }
                        }
                        content
                    }
                }
            }
        }
    }
`;