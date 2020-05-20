import React from "react"
import styled from "@emotion/styled"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { yearFilters, filterState } from "./state"

const YearFilterButtonsWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(auto, 200px));
  justify-content: center;
`

const Button = styled.button`
  background: #c1a57b;
  color: #e2e2e2;
  padding: 7px;
  text-align: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 1px 2px 0px rgba(26, 25, 26, 1);
  max-height: 41px;
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

const YearFilterButtons = () => {
  const yearFiltersState = useRecoilValue(yearFilters)
  const setYearFilter = useSetRecoilState(filterState)
  const filters = Array.from(yearFiltersState)
  const yearButtons = filters.sort().slice(0, -1)
  const allButton = filters.slice(-1)
  const filterBy = [...allButton, ...yearButtons]
  return (
    <YearFilterButtonsWrapper>
      {filterBy.map((filter) => (
        <Button
          key={filter}
          type="button"
          onClick={() => setYearFilter(filter)}
        >
          <ButtonText>
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </ButtonText>
        </Button>
      ))}
    </YearFilterButtonsWrapper>
  )
}

export default YearFilterButtons
