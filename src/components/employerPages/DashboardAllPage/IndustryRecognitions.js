import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function IndustryRecognitions() {
  const navigate = useNavigate();
  return (
    <Root>
      <div className="parent_port_1">
        <h4>Industry Recognition</h4>

        <div>
          <h5>Add a new Portfolio items </h5>
        </div>
      </div>
      <div className="parent_port_2">
        <div className="parent_port_2_child1">
          <h4>Add Industry Recognitions</h4>
          <h6>Share your latest exciting work.</h6>
          <p>
            This is replacing current Portfolio and will help you to share This
            is replacing current Portfolio and will help you to share This is
            replacing current Portfolio and will help you to share
          </p>
        </div>
        <div className="parent_port_2_child2">
          <h3>
            Add Portfolio items today!
            <p>
              This is replacing current Portfolio and will help you to share
              This is replacing current Portfolio and will help you to share
              This is replacing current Portfolio and will help you to share
            </p>
          </h3>
          <button
            onClick={() => {
              navigate("/portfolioadd");
            }}
          >
            Add a New Portfolio item
          </button>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  gap: 10px;
  background: #dcf1fbb8;
  width: 100%;

  .parent_port_1 {
    padding: 15px;
    gap: 10px;
    background: #ffffff;
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;

    > div {
      border-top: 1px solid lightgray;
      h5 {
        padding: 10px 0px;
        color: #005db7;
      }
    }
     
  }
  .parent_port_2 {
    background: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 70%;
    .parent_port_2_child1 {
      h4 {
        margin: 5px;
      }
      h6 {
        margin: 5px;
        font-weight: 500;
      }
      p {
        padding: 5px;
      }
    }
    .parent_port_2_child2 {
      display: flex;
      justify-content: space-between;
      @media (max-width: 899px) {
        flex-wrap: wrap;
      }
        flex-direction: column;
        flex: 1;
        padding: 10px 0px;
        gap: 20px;
        h3 {
          margin: 5px;
        }
        button {
          background: red;
          color: #ffffff;
          font-weight: 600;
          margin: 10px;
          border-radius: 4px;
          border: none;
          padding: 10px;
          width: 200px;
          cursor: pointer;
        }

         
      
    }
  }
`;
