import React from "react"
import { render } from "@testing-library/react"
import Footer from "./footer"

describe("Footer test", () => {
  it("should return footer link", () => {
    const { getByTestId } = render(<Footer />)
    const link = getByTestId("footer-link-test")
    expect(link).toHaveAttribute("href", "https://gatsbyjs.org")
  })
})
