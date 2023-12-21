import React from "react";
import styled from "styled-components";

export default function EditProfile() {
  return (
    <Root>
      <div className="parent1">
        <h3>Company Information</h3>

        <div>
          <div>
            <p>Company Name</p>
            <input />
          </div>
          <div>
            <p>Company website</p>
            <input />
          </div>
        </div>
        <div>
          <div>
            <p> Total Employees </p>
            <select>
              <option>11</option>
              <option>11</option>
              <option>11</option>
              <option>11</option>
              <option>11</option>
            </select>
          </div>
          <div>
            <p> Founding Year </p>
            <select>
              <option>11</option>
              <option>11</option>
              <option>11</option>
              <option>11</option>
              <option>11</option>
            </select>
          </div>
        </div>

        <div>
          <div>
            <p>Tagline</p>
            <input />
          </div>
          <div>
            <p>Description</p>
            <input />
          </div>
        </div>
      </div>
      <div className="parent2">
        <p>Company Logo</p>
        <div>
          <p>Admin Contact Phone</p>
          <input />
        </div>
        <div>
          <p>Sales Email</p>
          <input />
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 10px;
background-color: white;
margin: 10px;

  .parent1 {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .parent2{
    flex: 1;

  }
`;
