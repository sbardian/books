/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import { jsx, css } from "@emotion/react"
import Layout from "../components/layout"

const NotFoundPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => (
  <Layout crumbs={crumbs}>
    <div
      css={css`
        text-align: "center";
      `}
    >
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

NotFoundPage.propTypes = {
  pageContext: PropTypes.shape({
    breadcrumb: PropTypes.shape({
      crumbs: PropTypes.arrayOf(
        PropTypes.shape({
          location: PropTypes.shape(),
          pathname: PropTypes.string,
        })
      ).isRequired,
    }),
  }).isRequired,
}

export default NotFoundPage
