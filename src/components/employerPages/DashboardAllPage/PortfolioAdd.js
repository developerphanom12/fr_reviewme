import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsPersonVcard } from "react-icons/bs";
import styled from "styled-components";

export default function PortfolioAdd() {
  return (
    <Root>
      <div className="heading_portfolio">
        <h3>Add a New Portfolio items</h3>
        <h5>Share your latest exciting work.</h5>
      </div>
      <div className="title_portfolio">
        <p>
          <IoPersonCircleOutline />
          Client details
        </p>
        <div className="title_child">
          <p>Client Company</p>
          <input placeholder="Company Name" />
        </div>
        <div className="title_child">
          <p>Client Website</p>
          <input placeholder="Company Website" />
        </div>
      </div>
      <div className="body_portfolio">
        <p>
          <BsPersonVcard />
          Portfolio item Details
        </p>
        <div className="body_portfolio_child">
          <p>Title</p>
          <input placeholder="Enter Here" />
        </div>
        <div className="body_portfolio_child">
          <h5>Service Lines</h5>
          <p>Select upto 5 Service Lives</p>
          <select>
            <option>select</option>
            <option>select</option>
            <option>select</option>
            <option>select</option>
            <option>select</option>
          </select>
        </div>
        <div className="body_portfolio_child">
          <p>Estimated Project Size </p>
          <select>
            <option>select</option>
            <option>select</option>
            <option>select</option>
            <option>select</option>
            <option>select</option>
          </select>
        </div>
        <div className="body_portfolio_child">
          <p>Start Date</p>
          <input placeholder="date" />
        </div>
        <div className="body_portfolio_child">
          <p>Last Date</p>
          <input placeholder="date" />
        </div>
        <div className="body_portfolio_child">
          <p>Description</p>
          <input />
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  .heading_portfolio {
    h3 {
      margin: 5px;
      color: #077beb;
    }
    h5 {
      margin: 5px;
      color: black;
    }
  }
  .title_portfolio {
    padding: 10px;
    p {
      display: flex;
      align-items: center;
      color: #000;
      gap: 5px;
      padding: 3px;
      font-size: 15px;
      border-bottom: 1px solid dodgerblue;
      svg {
        width: 15px;
        height: 15px;
      }
    }
    .title_child {
      padding: 5px 0px;

      p {
        border: none;
        font-size: 13px;
        color: #4b4545;
      }
      input {
        padding: 5px;
        width: 50%;
        border: 1px solid dodgerblue;
      }
    }
  }
  .body_portfolio {
    padding: 10px;

    p {
      display: flex;
      align-items: center;
      color: #000;
      gap: 5px;
      padding: 3px;
      font-size: 15px;
      border-bottom: 1px solid dodgerblue;
      svg {
        width: 15px;
        height: 15px;
      }
    }
    .body_portfolio_child {
      padding: 5px 0px;
      p {
        border: none;
        font-size: 13px;
        color: #4b4545;
      }
      input {
        padding: 5px;
        width: 50%;
        border: 1px solid dodgerblue;

      }
      select{
        padding: 5px;
        width: 50%;
        border: 1px solid dodgerblue;

      }
      h5 {
        margin-top: 7px;
        color: #077beb;
      }
    }
  }
`;
