import React from "react"
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image/withIEPolyfill'


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  console.log(data)
  return (
  <Layout>
    <SEO title="Home" />
    <div style={{ marginBottom: `1.45rem` }}>
    </div>
    <Link to="/charpente/">Charpente</Link>
    <Link to="/couverture/">Couverture</Link>
    <Link to="/renovation/">Renovation</Link>
  </Layout>
)}

export default IndexPage