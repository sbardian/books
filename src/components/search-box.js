/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { FaSearch } from "react-icons/fa"

const SearchWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`

const SearchInput = styled.input`
  font-size: 18pt;
  height: 40px;
  border: none;
  background: transparent;
  border-bottom: 2px solid gray;
  color: #dce0e6;
  min-width: 100px;
`

const SearchBox = ({ onSearch }) => {
  return (
    <SearchWrapper>
      <SearchInput id="books-search-input" type="text" onChange={onSearch} />
      <FaSearch size="1.5em" />
    </SearchWrapper>
  )
}

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

export default SearchBox
