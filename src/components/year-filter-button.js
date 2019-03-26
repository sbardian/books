import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import Button from "./styled/button"

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
