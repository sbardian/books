import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import FilterHeading from "./filter-heading"
import {
  RecoilRootWrapper,
  FilterHeadingWrapper,
} from "./test-component-wrappers"

jest.mock("gatsby")

describe("Filter heading tests", () => {
  it("should render filter heading link", () => {
    const { queryByText } = render(
      <RecoilRootWrapper>
        <FilterHeadingWrapper>
          <FilterHeading />
        </FilterHeadingWrapper>
      </RecoilRootWrapper>
    )
    expect(queryByText("Test Heading")).toBeNull()
    expect(queryByText("All")).toBeTruthy()
  })
})
