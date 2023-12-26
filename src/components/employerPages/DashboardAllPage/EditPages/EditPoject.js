import React from "react";
import styled from "styled-components";

export default function EditPoject({detail}) {
  return (
    <Root>
      <div className="project_div">
        <h3>Project Information</h3>
        <div className="project_child_div">
          <p>Minimum Project Size</p>
          <select  value={detail?.minimum_pojectsize}>
            <option>2000$</option>
            <option>2000$</option>
            <option>2000$</option>
            <option>2000$</option>
            <option>2000$</option>
          </select>
        </div>
        <div className="project_child_div">
          <p>Average Hourly Rate</p>
          <select value={detail?.average_hourly}>
            <option>50$</option>
            <option>50$</option>
            <option>50$</option>
            <option>50$</option>
            <option>50$</option>
          </select>
        </div>
      </div>
      <div className="save_btn">
        <button type="submit">Save Changes</button>
      </div>
    </Root>
  );
}
const Root = styled.section`
  background-color: white;
  margin: 10px;
  padding: 10px;
  width: 100%;
  .project_div{
    margin-bottom: 10px;
    h3 {
      color: #077beb;
      margin: 5px 0px;
    }
    .project_child_div{
      p {
          padding: 5px;
          color: black;
        }
        select {
          padding: 5px;
          width: 30%;
          color: dodgerblue;
        }
    }
  }
  .save_btn{
    border-top: 1px solid gray;
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    button{
      width: 150px;
      border: none;
      background-color: red;
      color: white;
      font-weight: 600;
      border-radius: 4px;
      padding: 10px;
    }
  }
`;
