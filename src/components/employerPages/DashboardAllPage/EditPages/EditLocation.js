import React from "react";
import styled from "styled-components";

export default function EditLocation() {
  return (
    <Root>
      <div className="location1">
        <h5>Locations</h5>
        <div>
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
        <div>
          <p>Phone Number</p>
          <input />
        </div>
        <div>
          <h3>Headquaters</h3>
          <p>Address</p>
          <input />
        </div>
        <div>
          <p>Total Employees At This Location </p>
          <input />
        </div>
      </div>
      <div className="location2">
        <h3>Additional location</h3>
        <div>
          <p>Phone Number</p>
          <input />
        </div>
        <div>
          <h3>Headquaters</h3>
          <p>Address</p>
          <input />
        </div>
        <div>
          <p>Total Employees At This Location </p>
          <input />
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
display:flex;
background-color: white;
margin: 10px;
padding: 10px;
width: 100%;
.location1{
    display: flex;
    flex: 1;
    flex-direction: column;
}
.location2{
    display: flex;
    flex: 1;
    flex-direction: column; 
}
`;
