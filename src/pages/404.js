/** @jsx jsx */
// eslint-disable-next-line
import React from 'react';
import { jsx, css } from '@emotion/core';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <div
      css={css`
        text-align: 'center';
      `}
    >
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
