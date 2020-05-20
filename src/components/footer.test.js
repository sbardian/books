import React from "react"
import { render } from "@testing-library/react"
import Footer from "./footer"

describe("Footer test", () => {
  it("should return footer link", () => {
    const { queryByTestId } = render(<Footer />)
    const link = queryByTestId("footer-link-test")
    expect(link).toHaveAttribute("href", "https://gatsbyjs.org")
  })
})
