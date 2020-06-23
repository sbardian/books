import React from "react"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Book from "./books"
import { navigate } from "../../__mocks__/gatsby"
import { RecoilRootWrapper, BooksWrapper } from "../test-utils"

jest.mock("gatsby")

describe("Book tests", () => {
  it("should render a book", () => {
    const { queryByAltText } = render(
      <RecoilRootWrapper>
        <BooksWrapper>
          <Book />
        </BooksWrapper>
      </RecoilRootWrapper>
    )
    expect(
      queryByAltText(
        "Enlightenment Now: The Case for Reason, Science, Humanism, and Progress"
      )
    ).toBeTruthy()
  })
  it("should click image button", () => {
    const { container } = render(
      <RecoilRootWrapper>
        <BooksWrapper>
          <Book />
        </BooksWrapper>
      </RecoilRootWrapper>
    )
    const button = container.querySelector("button")
    expect(button).toBeTruthy()
    fireEvent.click(button)
    expect(navigate).toHaveBeenCalledTimes(1)
  })
})
