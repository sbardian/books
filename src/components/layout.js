/** @jsx jsx */
// eslint-disable-next-line
import React from 'react';
import { jsx, css, Global } from '@emotion/core';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import 'normalize.css';
import mq from './mediaQueries';
import { Footer } from './styled/footer';
// import Breadcrumb from '../../plugins/gatsby-plugin-breadcrumb/src/components/Breadcrumb';
// import Breadcrumb from '../../plugins/gatsby-plugin-breadcrumb/components/Breadcrumb';

const Layout = ({ children, location, crumbLabel }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

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
        title={site.siteMetadata.title}
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
              {site.siteMetadata.title}
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
              grid-template-rows: 1fr repeat(auto-fit);
              margin: 0 200px 0 200px;
              ${mq.xl(
                css`
                  margin: 0 20px 0 20px;
                `
              )}
            `}
          >
            {/* <Breadcrumb
              useSitemap={false}
              location={location}
              crumbLabel={crumbLabel}
            /> */}
            {children}
          </div>
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
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
