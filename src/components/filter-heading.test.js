import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import FilterHeading from "./filter-heading"

jest.mock("gatsby")

describe("Filter heading tests", () => {
  it("should render filter heading link", () => {
    const { getByText } = render(
      <FilterHeading filterHeading="Test Heading" count={3} />
    )
    expect(getByText("Test Heading")).toBeTruthy()
    expect(getByText("(3)")).toBeTruthy()
  })
  it("should render empty filter heading link", () => {
    const { queryByText } = render(<FilterHeading />)
    expect(queryByText("Test Heading")).toBeNull()
    expect(queryByText("(3)")).toBeNull()
  })
})
