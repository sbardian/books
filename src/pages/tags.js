import React from "react"
import PropTypes from "prop-types"
import { useRecoilValue } from "recoil"
import Layout from "../components/layout"
import FullPageTags from "../components/full-page-tags"
import { fullpageTagsState } from "../state"
import usePopulateData from "../components/use-populate-data"

const TagsPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => {
  usePopulateData()
  const filteredTags = useRecoilValue(fullpageTagsState)

  return (
    <Layout
      crumbs={crumbs.map((crumb) => ({
        ...crumb,
        crumbLabel:
          crumb.crumbLabel[0].toUpperCase() + crumb.crumbLabel.slice(1),
      }))}
    >
      <FullPageTags tags={filteredTags} />
    </Layout>
  )
}

TagsPage.propTypes = {
  pageContext: PropTypes.shape({
    breadcrumb: PropTypes.shape({
      crumbs: PropTypes.arrayOf(
        PropTypes.shape({
          location: PropTypes.shape().isRequired,
          pathname: PropTypes.string.isRequired,
        })
      ).isRequired,
    }),
  }).isRequired,
}

export default TagsPage
