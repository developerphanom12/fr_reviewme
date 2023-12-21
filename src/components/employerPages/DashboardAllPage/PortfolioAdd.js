import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsPersonVcard } from "react-icons/bs";
import styled from "styled-components";

export default function PortfolioAdd() {
  return (
    <Root>
      <div>
        <h3>Add a New Portfolio items</h3>
        <h6>Share your latest exciting work.</h6>
      </div>
      <div>
        <p>
          <IoPersonCircleOutline />
          Client details
        </p>
        <div>
          <p>Client Company</p>
          <input placeholder="Company Name" />
          <p>Client Website</p>
          <input placeholder="Company Website" />
        </div>
      </div>
      <div>
        <p>
          <BsPersonVcard />
          Portfolio item Details
        </p>
        <div>
          <p>Title</p>
          <input placeholder="Enter Here" />
        </div>
        <div>
          <p>Service Lines</p>
          <span>Select upto 5 Service Lives</span>
          <select>
            <option>select</option>
            <option>select</option>
            <option>select</option>
            <option>select</option>
            <option>select</option>
          </select>
        </div>
        <div>
          <p>Estimated Project Size </p>
          <select>
            <option>select</option>
            <option>select</option>
            <option>select</option>
            <option>select</option>
            <option>select</option>
          </select>
        </div>
        <div>
          <div>
            <p>Start Date</p>
            <input placeholder="date" />
          </div>
          <div>
            <p>Last Date</p>
            <input placeholder="date" />
          </div>
        </div>

        <div>
          <p>Description</p>
          <input />
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section``;
