/** @jsx jsx */
// eslint-disable-next-line
import React from 'react';
import { jsx, css, Global } from '@emotion/core';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import 'normalize.css';
import mq from './mediaQueries';
import { Footer } from './styled/footer';

const Layout = ({ children }) => {
  return (
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
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'Books', content: 'Books I have read' },
              { name: 'good books', content: 'good books' },
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
              background: #606d80;
            `}
          >
            <div
              css={css`
                display: grid;
                grid-gap: 20px;
                grid-template-columns: 1fr;
                background: #1f1f20;
                align-items: center;
                padding: 20px;
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
                  {data.site.siteMetadata.title}
                </a>
              </h1>
            </div>
            <div
              css={css`
                display: grid;
                grid-gap: 20px;
              `}
            >
              <div>{children}</div>
            </div>
            <Footer>
              <div
                css={css`
                  height: 150px;
                `}
              />
            </Footer>
          </div>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
