import { css } from 'react-emotion';

export const container = css`
  display: grid;
  grid-gap: 20px;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
  /* grid-template-columns: 100%; */
`;

export const header = css`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 200px;
  background: rgb(221, 151, 85);
  color: white;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const content = css`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 1fr;
  margin-left: 20px;
  margin-right: 20px;
`;

export const footer = css`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  background: rgb(161, 103, 103);
  padding: 20px;
`;
