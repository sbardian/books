/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx } from "@emotion/react"
import styled from "@emotion/styled"
import gatsby from "../images/gatsby-icon.png"

const Footer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  background: #1f1f20;
  padding: 20px;
`

const GatsbyImage = styled.img`
  height: 3em;
`

export default () => (
  <Footer>
    <a data-testid="footer-link-test" href="https://gatsbyjs.org">
      <GatsbyImage src={gatsby} alt="Gatsby" title="Built with Gatsby" />
    </a>
  </Footer>
)
