import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Box = styled.div`
  width: 900px;
  margin: 0 auto;
`;

export const Img = styled.img`
  width: 300px;
  height: 350px;
`;

export const Button = styled.button`
  background-color: #3498db;
  display: block;
  border: none;
  color: #fff;
  padding: 15px 32px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  margin: 10px auto;

  &:hover {
    cursor: pointer;
    background-color: #3498fc;
  }
`;
