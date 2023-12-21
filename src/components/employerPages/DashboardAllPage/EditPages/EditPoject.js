import React from "react";
import styled from "styled-components";

export default function EditPoject() {
  return (
    <Root>
      <h3>Project Information</h3>
      <p>Minimum Project Size</p>
      <select>
        <option>2000$</option>
        <option>2000$</option>
        <option>2000$</option>
        <option>2000$</option>
        <option>2000$</option>
      </select>
      <p>Average Hourly Rate</p>
      <select>
        <option>50$</option>
        <option>50$</option>
        <option>50$</option>
        <option>50$</option>
        <option>50$</option>
      </select>
      <div className="save_btn">
        <button>
            Save Changes
        </button>
      </div>
    </Root>
  );
}
const Root = styled.section`
background-color: white;
margin: 10px;
padding: 10px;
width: 100%;

`;
