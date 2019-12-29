import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const YearFilterButtonsWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(auto, 200px));
  justify-content: center;
`

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

const YearFilterButtons = ({ yearFilters, onYearFilter }) => (
  <YearFilterButtonsWrapper>
    {yearFilters.map(filter => (
      <Button key={filter} type="button" onClick={() => onYearFilter(filter)}>
        <ButtonText>
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </ButtonText>
      </Button>
    ))}
  </YearFilterButtonsWrapper>
)

YearFilterButtons.defaultProps = {
  yearFilters: [],
  onYearFilter: () => {},
}

YearFilterButtons.propTypes = {
  yearFilters: PropTypes.arrayOf(PropTypes.string),
  onYearFilter: PropTypes.func,
}

export default YearFilterButtons
