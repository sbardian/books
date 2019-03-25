import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import Button from "./styled/button"

const YearFilterButton = ({ onYearFilter, year }) => (
  <Button
    css={css`
      cursor: pointer;
    `}
    type="button"
    onClick={() => onYearFilter(year)}
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
  onYearFilter: PropTypes.func.isRequired,
  year: PropTypes.number.isRequired,
}

export default YearFilterButton
