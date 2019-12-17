import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Carousel from "react-bootstrap/Carousel"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image/withIEPolyfill"
import HTMLRender from "../components/HtmlRenderer"


const IndexPage = (props) => {
  const { strapiPages, allStrapiGalleries } = props.data

  return (
    <Layout isHome>
      <SEO title="Artisan couvreur à toulouse | Garcia Couvreur"/>
      <div className="row">
        <div className="col-auto mx-auto">
          <div className="row d-flex">
            <div
              className="text-center text-light mb-5"
              style={ { textShadow: "rgba(0, 0, 0, 0.6) 0px 0px 8px" } }
            >
              <h2>Votre artisan couvreur sur toulouse et dans les environs</h2>
              <h4 className="text-uppercase font-weight-bold">Couverture | Renovation | Charpente</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Carousel style={ {
            border: "0.25em solid #fc4a1a",
          } }>
            { allStrapiGalleries.edges.map(({ node }) => {
              console.log(node.title)
              const fluidImg = node.image && node.image.childImageSharp && node.image.childImageSharp.fluid;
              return fluidImg ? (
                <Carousel.Item>
                  <Img fluid={ fluidImg } style={{height:'350px'}}/>
                  { node.title && (
                    <Carousel.Caption>
                      <h3>{ node.title }</h3>
                      <p>{ node.description }</p>
                    </Carousel.Caption>
                  ) }
                </Carousel.Item>
              ) : null;
            }) }
          </Carousel>
        </div>
      </div>
      <div className="row">
        <div className="col-12 w-100 my-4">
          { strapiPages.sections.map((section) => {
            return (
              <div key={ section.id } className="my-5">
                <HTMLRender markdown={ section.content }/>
              </div>
            )
          }) }
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
export const HomePageQuery = graphql`
    query HomePageQuery {
        allStrapiGalleries {
            edges {
                node {
                    id
                    image {
                        childImageSharp {
                            fluid {
                                src
                                srcSet
                            }
                        }
                    }
                    title
                    description
                }
            }
        }
        strapiPages(id: {eq: "Pages_2"}, isPublished: {eq: true}) {
            id
            sections {
                content
                gallery {
                    url
                    name
                }
                isLeft
                isDark
            }
            title
            strapiId
        }
    }
`