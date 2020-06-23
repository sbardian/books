/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { jsx } from "@emotion/core"
import { useRecoilState } from "recoil"
import Layout from "../components/layout"
import Books from "../components/books"
import SearchBox from "../components/search-box"
import YearFilterButtons from "../components/year-filter-buttons"
import Filters from "../components/filter-heading"
import usePopulateData from "../components/use-populate-data"
import { filterState } from "../state"

const ALL = "All"

const IndexPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
  location,
}) => {
  const [filter, setFilter] = useRecoilState(filterState)

  const handleSearch = ({ target: search }) => {
    // if search input is cleared reset filters
    if (!search.value || search.value === "") {
      setFilter(ALL)
    } else {
      setFilter(search.value)
    }
  }

  React.useEffect(() => {
    // set filter if returning from previously filtered results
    if (location && location.state && location.state.filterState) {
      setFilter(location.state.filterState)
    }
  }, [location])

  usePopulateData()

  return (
    <Layout crumbs={crumbs}>
      <YearFilterButtons />
      <SearchBox onSearch={handleSearch} />
      {filter && <Filters />}
      <Books />
    </Layout>
  )
}

IndexPage.defaultProps = {
  location: null,
}

IndexPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      filterState: PropTypes.string,
    }),
  }),
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

export default IndexPage
