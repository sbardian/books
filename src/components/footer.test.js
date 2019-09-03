import React from "react"
import { render } from "@testing-library/react"
import Footer from "./footer"

test("footer success test", () => {
  const { getByTestId } = render(<Footer />)
  const link = getByTestId("footer-link-test")
  expect(link).toHaveAttribute("href", "https://gatsbyjs.org")
})
