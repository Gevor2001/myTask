import styled from "styled-components";

export const Div = styled.div`
  padding: 30px;
  position: fixed;
  left: 0;
  top: 0;
`;

export const List = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 26px;
  padding: 10px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
