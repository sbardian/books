import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
// import Breadcrumb from '../../plugins/gatsby-plugin-breadcrumb/components/Breadcrumb';
// import useBreadcrumb from '../../plugins/gatsby-plugin-breadcrumb/components/useBreadcrumb';

export default ({ pageContext, location }) => {
  return (
    <Layout location={location} crumbLabel="Contact">
      <Helmet title="Contact" />
      <div style={{ fontSize: '24pt' }}>test</div>
      {/* <Breadcrumb location={location} crumbLabel="Contact" /> */}
      <Link to="/test">test</Link>
      <Link to="/test2">test2</Link>
      <div>this is a test page</div>
    </Layout>
  );
};
