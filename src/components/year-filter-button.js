import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Button = styled.button`
  height: 30px;
  background: #4b4545b3;
  color: #c2c2c2;
  text-align: center;
  align-items: center;
  border: none;
  cursor: pointer;
`

const ButtonText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`

const YearFilterButton = ({ onFilterByYear, year }) => (
  <Button type="button" onClick={() => onFilterByYear(year)}>
    <ButtonText>{year}</ButtonText>
  </Button>
)

YearFilterButton.propTypes = {
  onFilterByYear: PropTypes.func.isRequired,
  year: PropTypes.string.isRequired,
}

export default YearFilterButton
