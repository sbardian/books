import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import 'normalize.css';
import { css } from 'react-emotion';

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
          className={css`
            display: grid;
            grid-gap: 20px;
            height: 100vh;
            grid-template-rows: auto 1fr auto;
            /* grid-template-columns: 100%; */
          `}
        >
          <div
            className={css`
              display: grid;
              grid-gap: 20px;
              grid-template-columns: 1fr 200px;
              background: rgb(221, 151, 85);
              color: white;
              justify-content: center;
              align-items: center;
              padding: 20px;
            `}
          >
            <h1>{data.site.siteMetadata.title}</h1>
            <span>another</span>
          </div>
          <div
            className={css`
              display: grid;
              grid-gap: 20px;
              grid-template-columns: 200px 1fr 200px;
              grid-template-rows: 1fr;
              margin-left: 20px;
              margin-right: 20px;
            `}
          >
            <div />
            <div>
              <span>main content</span>
              {children}
            </div>
            <div />
          </div>
          <div
            className={css`
              display: grid;
              grid-gap: 20px;
              grid-template-columns: 1fr;
              justify-items: center;
              align-items: center;
              background: rgb(161, 103, 103);
              padding: 20px;
            `}
          >
            <span>link 1</span>
            <span>link 2</span>
          </div>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
