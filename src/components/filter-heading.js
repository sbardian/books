import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const FilterHeadingWrapper = styled.div`
  display: grid;
  grid-template-columns: auto minmax(40px, 75px);
  justify-content: center;
`

const FilterHeading = styled.h1`
  justify-self: center;
`

const FilterCount = styled.span`
  align-self: center;
  justify-self: center;
  font-size: 1.4rem;
  color: #ececec;
`

const Filters = ({ filterHeading, count }) => {
  return (
    <FilterHeadingWrapper>
      <FilterHeading>
        <Link to="/tags">{filterHeading}</Link>
      </FilterHeading>
      <FilterCount>({count})</FilterCount>
    </FilterHeadingWrapper>
  )
}

Filters.defaultProps = {
  filterHeading: "",
  count: 0,
}

Filters.propTypes = {
  filterHeading: PropTypes.string,
  count: PropTypes.number,
}

export default Filters
