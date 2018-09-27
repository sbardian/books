import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import 'normalize.css';
import { container, header, content, footer } from './cssgrid.js';

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
        <div className={container}>
          <div className={header}>
            <h1>{data.site.siteMetadata.title}</h1>
            <span>another</span>
          </div>
          <div className={content}>
            <div />
            <div>
              <span>main content</span>
              {children}
            </div>
            <div />
          </div>
          <div className={footer}>
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
