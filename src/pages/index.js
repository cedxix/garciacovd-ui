import React from "react"
import { graphql, Link, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => {


  console.log(data.allStrapiPages)

  return (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
     <ul>
       {data.allStrapiPages.edges.map(({node}) => {
         return(
           <div>{node.title}</div>
         )
       })}
     </ul>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)}

export default IndexPage
export const pageQuery = graphql`
    query IndexQuery {
      allStrapiPages {
        edges {
          node {
            title
          }
        }
      }
    }
  `;