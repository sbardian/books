import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const Button = styled.button`
  height: 30px;
  background: #4b4545b3;
  color: #c2c2c2;
  text-align: center;
  align-items: center;
  border: none;
`

const YearFilterButton = ({ onFilterByYear, year }) => (
  <Button
    css={css`
      cursor: pointer;
    `}
    type="button"
    onClick={() => onFilterByYear(year)}
  >
    <span
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      {year}
    </span>
  </Button>
)

YearFilterButton.propTypes = {
  onFilterByYear: PropTypes.func.isRequired,
  year: PropTypes.string.isRequired,
}

export default YearFilterButton
