import React from "react";
import styled from "styled-components";

export default function Page6() {
  return (
    <Root>
      <h3>Your Stories</h3>
      <h1>Each Review Has A Personal Story</h1>
      <div>personal review content</div>
    </Root>
  );
}
const Root = styled.section`
  background-color: #f1f1e8;
  padding: 20px;
  h3 {
    text-align: center;
    font-size: 1.5em;
    color: #696a6a;
  }
  h1 {
    font-family: Arial, sans-serif;
    margin-top: 0;
    font-weight: 600;
    text-align: center;
    font-size: 40px;
    @media (max-width:566px){
      font-size: 20px;
    }
  }
  >div {
    text-align: center;
    padding: 30px;
    background-color: white;
    color: black;
    margin: 40px;
    border-radius: 30px;
  }
`;
