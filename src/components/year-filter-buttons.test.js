import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import YearFilterButtons from "./year-filter-buttons"
import { RecoilRootWrapper, YearFilterButtonsWrapper } from "../test-utils"

jest.mock("gatsby")

const filters = ["All"]

describe("Year filter buttons tests", () => {
  it("should render year filter button for each item in filters array", () => {
    const { queryByText } = render(
      <RecoilRootWrapper>
        <YearFilterButtonsWrapper>
          <YearFilterButtons />
        </YearFilterButtonsWrapper>
      </RecoilRootWrapper>
    )
    filters.forEach((filter) => {
      expect(queryByText(filter)).toBeTruthy()
    })
    expect(queryByText("blah")).toBeNull()
  })
})
