import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import YearFilterButtons from "./year-filter-buttons"

jest.mock("gatsby")

const handleYearFilter = jest.fn()
const filters = ["All", "2018", "2019"]

describe("Year filter buttons tests", () => {
  it("should render year filter button for each item in filters array", () => {
    const { getByText, queryByText } = render(
      <YearFilterButtons
        yearFilters={filters}
        onYearFilter={handleYearFilter}
      />
    )
    filters.forEach(filter => {
      expect(getByText(filter)).toBeTruthy()
    })
    expect(queryByText("blah")).toBeNull()
  })
})
