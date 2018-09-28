import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import 'normalize.css';
import { injectGlobal, css } from 'react-emotion';

injectGlobal`
body {
  color: #d3dbe8;
}
`;

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
            min-height: 100vh;
            grid-template-rows: auto 1fr auto;
            background: #567ebb;
          `}
        >
          <div
            className={css`
              display: grid;
              grid-gap: 20px;
              grid-template-columns: 1fr;
              background: #2b4c7e;
              justify-content: center;
              padding: 20px;
            `}
          >
            <h1>{data.site.siteMetadata.title}</h1>
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
            <div>{children}</div>
            <div />
          </div>
          <div
            className={css`
              display: grid;
              grid-gap: 20px;
              grid-template-columns: 1fr;
              justify-items: center;
              align-items: center;
              background: #606d80;
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
