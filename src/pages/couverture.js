import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HTMLRender from "../components/HtmlRenderer"

const Couverture = (props) => {
  const { strapiPages } = props.data

  console.log("props", strapiPages)

  return (
    <Layout>
      <SEO title="Home"/>
      <div key={ strapiPages.id }>
        <h1>{ strapiPages.title }</h1>
        <div>
          { strapiPages.sections.map((section) => {
            const sectionImg = section.headerPicture && section.headerPicture.childImageSharp && section.headerPicture.childImageSharp.fluid
            return (
              <div>
                { sectionImg && (<Img fluid={ sectionImg }/>) }
                <HTMLRender markdown={ section.content }/>
              </div>
            )
          }) }
        </div>
      </div>
    </Layout>
  )
}

export default Couverture
export const CouverturePageQuery = graphql`
    query CouverturePageQuery {
        strapiPages(id: {eq: "Pages_1"}, isPublished: {eq: true}) {
            id
            title
            strapiId
            backgroundPicture {
                publicURL
            }
            sections {
                content
                gallery {
                    url
                    name
                }
                isLeft
                isDark
                headerPicture {
                    childImageSharp {
                        fluid(maxHeight: 300, fit: COVER) {
                            aspectRatio
                            src
                            srcSet
                        }
                    }
                }
            }
            menu_name
        }
    }
`