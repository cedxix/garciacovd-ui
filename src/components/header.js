import PropTypes from "prop-types"
import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import colors from '../styles/colors'

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
      query MyQuery {
          file(relativePath: {eq: "logo-2.png"}) {
              childImageSharp {
                  fluid {
                      src
                      srcSet
                      base64
                      aspectRatio
                      sizes
                  }
              }
          }
      }

  `)

  return (
    <header
      style={ { marginBottom: `1.45rem`, borderBottom: `2px solid ${colors.primary}` } }
      className="container-fluid"
    >
      <div className="container">
        <div className="row d-flex h-100 p-3 mx-auto flex-row justify-content-between align-items-center">
          <div className="col-md-3">
            <Link to="/">
              <Img fluid={ data.file.childImageSharp.fluid } alt="A corgi smiling happily"/>
            </Link>
          </div>
          <div className="col-auto">
            <nav className="nav nav-masthead justify-content-center">
              <Link className="nav-link" activeClassName="active" to="/">Accueil</Link>
              <Link className="nav-link" activeClassName="active" to="couverture">Couverture</Link>
              <Link className="nav-link" activeClassName="active" to="charpente">Charpente</Link>
              <Link className="nav-link" activeClassName="active" to="renovation">Renovation</Link>
              <Link className="nav-link" activeClassName="active" to="contacts">Contactez-nous</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
