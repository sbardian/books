/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import { jsx } from "@emotion/react"
import styled from "@emotion/styled"

const SearchWrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: center;
  padding: 20px 0 20px 0;
`

const SearchInput = styled.input`
  font-size: 18pt;
  height: 40px;
  border: none;
  background: transparent;
  border-bottom: 2px solid gray;
  color: #c1a57b;
  min-width: 100px;
`

const InputLabel = styled.label`
  font-size: 18pt;
  align-self: end;
  color: #c1a57b;
`

const SearchBox = ({ onSearch }) => (
  <SearchWrapper>
    <SearchInput
      id="books-search-input"
      data-testid="books-search-input-testid"
      type="text"
      onChange={onSearch}
    />
    <InputLabel htmlFor="books-search-input">Search</InputLabel>
  </SearchWrapper>
)

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

export default SearchBox
