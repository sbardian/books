import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Button = styled.button`
  background: #4b4545b3;
  color: #c2c2c2;
  padding: 7px;
  text-align: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 1px 2px 0px rgba(26, 25, 26, 1);
  &:active {
    box-shadow: none;
  }
  &:hover {
    color: #ffffff;
  }
`

const ButtonText = styled.span`
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
`

const FilterButton = ({ onFilter, filter }) => (
  <Button type="button" onClick={() => onFilter(filter)}>
    <ButtonText>{filter.charAt(0).toUpperCase() + filter.slice(1)}</ButtonText>
  </Button>
)

FilterButton.propTypes = {
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
}

export default FilterButton
