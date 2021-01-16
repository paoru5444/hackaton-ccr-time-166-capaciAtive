import styled from "styled-components";

export const Spacer = styled.div`
  width: ${({ size }) => size || 16}px;
  height: ${({ size }) => size || 16}px;
`;
