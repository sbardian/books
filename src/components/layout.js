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
  constructor(props) {
    super(props);
  }

  render() {
    const { children, onSearch } = this.props;
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
                  grid-template-columns: 1fr 400px;
                  background: #1f1f20;
                  align-items: center;
                  padding: 20px;
                `}
              >
                <h1>{data.site.siteMetadata.title}</h1>
                <div
                  className={css`
                    display: grid;
                    grid-gap: 20px;
                    grid-template-columns: 1fr 400px;
                    background: #1f1f20;
                    align-items: center;
                    padding: 20px;
                  `}
                >
                  <input
                    type="text"
                    onChange={onSearch}
                    className={css`
                      font-size: 18pt;
                      height: 40px;
                      border: none;
                      background: transparent;
                      border-bottom: 2px solid white;
                      color: #dce0e6;
                    `}
                  />
                  <img
                    className={css`
                      height: 40px;
                      width: 40px;
                    `}
                    src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png"
                  />
                </div>
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
