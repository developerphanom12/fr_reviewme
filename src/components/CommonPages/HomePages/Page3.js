import React from "react";
import styled from "styled-components";

export default function Page3() {
  return (
    <Root>
      <div className="main">
        <div className="chlid1">
          <h3>
            Are you a Business ? <button>Get Started</button>
          </h3>
        </div>
        <div className="chlid2">
          <h2>Recent Reviews</h2>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  height: 100%;
  min-height: 400px;
  background-color:#FFFFF0;

  .main {
    .chlid1 {
      h3 {
        font-family: Arial, Helvetica, sans-serif;
        align-items: center;
        justify-content: center;
        padding: 20px;
        margin: 0;
        background-color: #dcdcdc59;
        display: flex;
        gap: 20px;
        button {
          background-color: dodgerblue;
          padding: 10px;
          color: #ffffff;
          border: none;
          height: 40px;
          width: 10%;
          font-weight: 700;
          border-radius: 30px;
          @media (max-width: 769px) {
            width: 30%;
          }
        }
      }
    }
    .chlid2 {
      padding: 20px;
      h2 {
        margin: 0;
        text-align: center;
        font-size: 1.5em;
        padding: 10px;
        font-family: Arial,sans-serif;
      }
    }
  }
  
`;
