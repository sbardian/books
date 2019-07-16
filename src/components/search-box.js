/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"

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
    <div
      css={css`
        display: grid;
        grid-gap: 20px;
        grid-template-columns: auto auto;
        align-items: center;
        justify-content: center;
        padding-bottom: 20px;
      `}
    >
      <SearchInput id="books-search-input" type="text" onChange={onSearch} />
      <img
        css={css`
          height: 40px;
          width: 40px;
        `}
        alt="Search"
        src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png"
      />
    </div>
  )
}

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

export default SearchBox
