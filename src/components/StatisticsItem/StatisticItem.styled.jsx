import styled from "styled-components";

// const randomColor = () =>
//     Math.floor(Math.random()* 1677215).toString(16);

export const Item = styled.li`
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-basis: calc(100% / 3);
  min-height: 100%;
  backgroundColor: rgb(7, 141, 7) ;
`