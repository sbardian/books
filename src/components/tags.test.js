import React from "react"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Tags from "./tags"
import { navigate } from "./__mocks__/gatsby"

jest.mock("gatsby")

const tags = ["Fantasy", "Development", "Fiction", "History"]

describe("Tags Tests", () => {
  it("should render an array of tags", () => {
    const { getByText } = render(<Tags tags={tags} />)
    tags.forEach(tag => {
      expect(getByText(`#${tag}`)).toBeTruthy()
      expect(getByText(`#${tag}`)).toHaveAttribute("class")
    })
  })
  it("should click a tag", () => {
    const { container } = render(<Tags tags={tags} />)
    const buttons = container.querySelectorAll("button")
    buttons.forEach((button, index) => {
      fireEvent.click(button)
      expect(navigate).toHaveBeenCalledTimes(index + 1)
    })
  })
})
