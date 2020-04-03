import * as React from "react";
import styled from "styled-components";

export const Typo = styled.h1`
  color: white;
  font-weight: 600;
  font-size: 72px;
  letter-spacing: -4px;
  line-height: 1;
`;

export function Title({ children }) {
  return <Typo>{children}</Typo>;
}
