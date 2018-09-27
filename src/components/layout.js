import React from 'react'
import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import '../../node_modules/tachyons/css/tachyons.min.css'

import './cssgrid.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/* <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
         */}
        <div className="container">
          <div className="header">
            <h1>{data.site.siteMetadata.title}</h1>
            <span>another</span>
          </div>
          <div className="content">
            <div className="left-side" />
            <div className="main-content">
              <span>main content</span>
              {children}
            </div>
            <div className="right-side" />
          </div>
          <div className="footer">
            <span>link 1</span>
            <span>link 2</span>
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
