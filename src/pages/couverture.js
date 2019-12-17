import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HTMLRender from '../components/HtmlRenderer'

const Couverture = (props) => {
  const {strapiPages} = props.data

  console.log('props', strapiPages)

  return (
    <Layout>
      <SEO title="Home"/>
      <div className="row">
        <div className="col-12 page-header my-5 text-capitalize text-center">
          <div className="w-100">
            { strapiPages.title }
            <hr/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          { strapiPages.sections.map((section) => {
            const sectionImg = section.headerPicture && section.headerPicture.childImageSharp && section.headerPicture.childImageSharp.fluid
            return (
              <div>
                <div className="row">
                  <div className="col-12">
                    { sectionImg && (<Img fluid={ sectionImg } className="section-image"/>) }
                  </div>
                </div>
                <div className="row">
                  <div className={ section.gallery ? 'col-8' : 'col-12' }>
                    <HTMLRender markdown={ section.content }/>
                  </div>
                  { section.gallery ? (
                    <div className="col-4">
                      <div className="row">
                        { section.gallery.map((gallery) => (
                          <div className="col-sm-6 col-md-6 col-lg-4">
                            <img src={gallery.url} alt=""/>
                          </div>
                        )) }
                      </div>
                    </div>
                  ) : null }
                </div>
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