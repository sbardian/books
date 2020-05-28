// // Adapted from https://emotion.sh/docs/media-queries
// /** @jsx jsx */
// import { css } from "@emotion/core"

// const breakpoints = {
//   // mobile-first, so there is no 'xs' for portrait phones
//   sm: 576, // landscape phones
//   md: 768, // tablets
//   lg: 992, // landscape tablets and desktops
//   xl: 1275, // extra large desktops
// }

// const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
//   const prefix = typeof breakpoints[label] === "string" ? "" : "max-width:"
//   const suffix = typeof breakpoints[label] === "string" ? "" : "px"
//   accumulator[label] = cls =>
//     css`
//       @media (${prefix + breakpoints[label] + suffix}) {
//         ${cls};
//       }
//     `
//   return accumulator
// }, {})

// export default mq

// Source: https://github.com/wKovacs64/pwl/blob/bd79791b2fa54c14de186b64203f9350a9bea986/src/utils/mq.ts

const breakpointMap = {
  // mobile-first, so there is no 'xs' for portrait phones
  sm: 576, // landscape phones
  md: 768, // tablets
  lg: 992, // landscape tablets and desktops
  xl: 1200, // extra large desktops
}

const mq = Object.entries(breakpointMap).reduce((accumulator, [label, bp]) => {
  accumulator[label] = `@media (min-width: ${bp}px)`
  return accumulator
}, {})

export default mq
