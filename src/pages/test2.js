import React from 'react';
import Layout from '../components/layout';
import { useBreadcrumb } from '../components/useBreadcrumb';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';

export default ({ location }) => {
  const { crumb } = useBreadcrumb(location);
  console.log('crumb in test: ', crumb);

  return (
    <Layout>
      <Breadcrumb breadcrumb={crumb} />
      <div>this is a test page</div>
    </Layout>
  );
};
