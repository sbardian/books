import React from "react"
import Button from "./styled/button"
import { css } from "@emotion/core"

export default ({ onYearFilter, year }) => (
  <Button type="button" onClick={() => onYearFilter(year)}>
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
