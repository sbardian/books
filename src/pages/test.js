import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
// import { useBreadcrumb } from '../components/useBreadcrumb';
import { Breadcrumb, useBreadcrumb } from 'gatsby-plugin-breadcrumb';

export default ({ location }) => {
  const { crumb } = useBreadcrumb(location);
  console.log('crumb in test: ', crumb);

  return (
    <Layout>
      <Link to="/test2">test2</Link>
      <Breadcrumb breadcrumb={crumb} />
      <div>this is a test page</div>
    </Layout>
  );
};
