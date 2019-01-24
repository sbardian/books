import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import 'normalize.css';
import { injectGlobal, css } from 'react-emotion';

injectGlobal`
body {
  color: #d3dbe8;
}
a {
  color: #DCE0E6;
}
`;

class Layout extends Component {
  render() {
    const { children } = this.props;

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
                background: #606d80;
              `}
            >
              <div
                className={css`
                  display: grid;
                  grid-gap: 20px;
                  grid-template-columns: 1fr;
                  background: #1f1f20;
                  align-items: center;
                  padding: 20px;
                `}
              >
                <h1
                  className={css`
                    margin: 0.67em 200px;
                  `}
                >
                  {data.site.siteMetadata.title}
                </h1>
              </div>
              <div
                className={css`
                  display: grid;
                  grid-gap: 20px;
                `}
              >
                <div>{children}</div>
              </div>
              <div
                className={css`
                  display: grid;
                  grid-gap: 20px;
                  grid-template-columns: 1fr;
                  justify-items: center;
                  align-items: center;
                  background: #1f1f20;
                  padding: 20px;
                `}
              />
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
