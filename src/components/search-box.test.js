import React from "react"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import SearchBox from "./search-box"

const onSearch = jest.fn()

describe("Tags Tests", () => {
  it("should render search label and input", () => {
    const { getByLabelText, getByTestId } = render(
      <SearchBox onSearch={onSearch} />
    )
    const searchButton = getByLabelText("Search")
    const searchInput = getByTestId("books-search-input-testid")
    expect(searchButton).toBeTruthy()
    expect(searchInput).toBeTruthy()
    fireEvent.change(searchInput, { target: { value: "a" } })
    expect(onSearch).toHaveBeenCalledTimes(1)
  })
})
