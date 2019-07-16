/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css, Global } from "@emotion/core"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Footer from './footer'
import mq from "./media-queries"
import "normalize.css"

const Layout = ({ children, pageLocation, crumbLabel }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global
        styles={css`
          body {
            color: #d3dbe8;
          }
          a {
            color: #dce0e6;
          }
        `}
      />
      <Helmet
        title={title}
        meta={[
          { name: "Books", content: "Books I have read" },
          { name: "good books", content: "good books" },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <div
        css={css`
          display: grid;
          grid-gap: 20px;
          min-height: 100vh;
          grid-template-rows: auto 1fr auto;
          background: #636080;
        `}
      >
        <div
          css={css`
            display: grid;
            grid-gap: 20px;
            grid-template-columns: 1fr;
            background: #1f1f20;
            align-items: center;
            padding: 20px 0 20px 0;
          `}
        >
          <h1
            css={css`
              margin: 0.67em 200px;
              ${mq.sm(css`
                margin: 0 20px 0 20px;
              `)};
            `}
          >
            <a
              css={css`
                text-decoration: none;
              `}
              href="/"
            >
              {title}
            </a>
          </h1>
        </div>
        <div
          css={css`
            display: grid;
            grid-gap: 20px;
          `}
        >
          <div
            css={css`
              display: grid;
              grid-gap: 20px;
              grid-template-columns: 1fr;
              align-content: start;
              margin: 0 200px 0 200px;
              ${mq.xl(
                css`
                  margin: 0 20px 0 20px;
                `
              )}
            `}
          >
            <Breadcrumb location={pageLocation} crumbLabel={crumbLabel} />
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

Layout.defaultProps = {
  crumbLabel: undefined,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageLocation: PropTypes.shape().isRequired,
  crumbLabel: PropTypes.string,
}

export default Layout
