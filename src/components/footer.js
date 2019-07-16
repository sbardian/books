/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import gatsby from "../images/gatsby-icon.png"

const Footer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  background: #1f1f20;
  padding: 20px;
`

export default () => (
  <Footer>
    <a href="https://gatsby.com">
      <img
        css={css`
          height: 3em;
        `}
        src={gatsby}
        alt="Gatsby"
        title="Built with Gatsby"
      />
    </a>
  </Footer>
)
