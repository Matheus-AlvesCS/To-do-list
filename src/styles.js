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

  .addTask {
    display: flex;
    justify-content: space-between;
  }

  ul {
    list-style: none;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Input = styled.input`
  border: 2px solid #d1d3d466;
  border-radius: 5px;
  padding: 10px 20px;
  color: #000;
  font-size: 15px;
  width: 70%;
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

export const ListItem = styled.div`
  background-color: ${(props) => (props.done ? "#E8FF8B" : "#E4E4E4")};
  box-shadow: 1px 4px 10px 0px #00000033;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  width: 500px;

  li {
    color: #000;
    font-size: 15px;
  }
`;
