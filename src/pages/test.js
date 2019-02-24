import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { useBreadcrumb } from '../components/useBreadcrumb';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';

export default ({ location }) => {
  const { crumb } = useBreadcrumb(location);
  console.log('crumb in test: ', crumb);

  return (
    <Layout>
      <Breadcrumb breadcrumb={crumb} />
      <Link to="/test2">test2</Link>
      <div>this is a test page</div>
    </Layout>
  );
};
