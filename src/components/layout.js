import React from 'react'
import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import '../../node_modules/tachyons/css/tachyons.min.css'

// import Header from './header'
import './layout.css'
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div> */}
        <div className="container">
          <div className="header">
            <h1>{data.site.siteMetadata.title}</h1>
            <span>another</span>
          </div>
          <div className="content">
            <div className="left-side">
              <span>left side</span>
            </div>
            <div className="main-content">
              <span>main content</span>
            </div>
            <div className="right-side">
              <span>right side</span>
            </div>
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
