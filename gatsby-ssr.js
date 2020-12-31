/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from "react"
import { RecoilRoot } from "recoil"
import "gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css"

export const wrapRootElement = ({ element }) => (
  <RecoilRoot>{element}</RecoilRoot>
)
