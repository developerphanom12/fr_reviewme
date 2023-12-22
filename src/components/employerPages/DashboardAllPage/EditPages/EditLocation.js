import React from "react";
import styled from "styled-components";

export default function EditLocation() {
  return (
    <Root>
      <div className="location1">
        <h5>Locations</h5>
        <div className="location1_child1">
          <p>Time Zone Availability</p>
          <select>
            <option>India</option>
            <option>India</option>
            <option>India</option>
            <option>India</option>
            <option>India</option>
            <option>India</option>
          </select>
        </div>
        <div className="location1_child1">
          <p>Phone Number</p>
          <input />
        </div>
        <div className="location1_child2">
          <h4>Headquaters</h4>
          <p>Address</p>
          <input />
        </div>
        <div className="location1_child2">
          <p>Phone Number</p>
          <input />
        </div>
        <div className="location1_child2">
          <p>Total Employees At This Location </p>
          <input />
        </div>
      </div>
      <div className="location2">
        <h5>Additional location</h5>
        <div className="location2_child">
          <p>Address</p>
          <input />
        </div>{" "}
        <div className="location2_child">
          <p>Phone Number</p>
          <input />
        </div>
        <div className="location2_child">
          <p>Total Employees At This Location </p>
          <input />
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  background-color: white;
  margin: 10px;
  padding: 10px;
  width: 100%;
  flex-wrap: wrap;
  .location1 {
    display: flex;
    flex: 1;
    width: 50%;
    flex-direction: column;
    h5 {
      color: #077beb;
      margin: 5px 0px;
    }
    .location1_child1 {
      padding: 5px;
      p {
        padding: 5px;
        color: black;
      }
      select {
        padding: 5px;
        width: 100%;
        color: dodgerblue;
      }
      input {
        padding: 5px;
        width: 100%;
        color: dodgerblue;
      }
    }
    .location1_child2 {
      padding: 10px;
      h4 {
        margin: 4px 0px;
        color: #077beb;
        font-weight: 400;
      }
      p {
        padding: 5px;
        color: black;
      }
      input {
        padding: 5px;
        width: 100%;
        color: dodgerblue;
      }
    }
  }
  .location2 {
    display: flex;
    width: 50%;
    flex: 1;
    padding: 10px;
    flex-direction: column;
    h5 {
      color: #077beb;
      margin: 5px 10px;
    }
    .location2_child {
      padding: 10px;

      p {
        padding: 5px;
        color: black;
      }
      input {
        padding: 5px;
        width: 100%;
        color: dodgerblue;
      }
    }
  }
`;
