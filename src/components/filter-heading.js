import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { useRecoilValue } from "recoil"
import { filterState, filteredBooksState } from "../state"

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

const Filters = () => {
  const filterHeading = useRecoilValue(filterState)
  const { count } = useRecoilValue(filteredBooksState)
  return (
    <FilterHeadingWrapper>
      <FilterHeading>
        <Link to="/tags">{filterHeading}</Link>
      </FilterHeading>
      <FilterCount>({count})</FilterCount>
    </FilterHeadingWrapper>
  )
}

export default Filters
