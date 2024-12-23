import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  min-height: 100dvh;
  width: 100dvw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.main`
  background-color: #fff;
  padding: 30px 20px;
  border-radius: 5px;

  div {
    display: flex;
    gap: 20px;
  }
`;

export const Input = styled.input`
  border: 2px solid #d1d3d466;
  border-radius: 5px;
  padding: 10px 20px;
  color: #000;
  font-size: 15px;
`;

export const Button = styled.button`
  background-color: #8052ec;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: 700;
  font-size: 17px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;
