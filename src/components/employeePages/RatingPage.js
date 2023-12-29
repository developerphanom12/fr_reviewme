import React, { useState } from "react";
import styled from "styled-components";
import Rate from "./Rate";

export default function RatingPage() {
    const [file,setFile] = useState()
  return (
    <Root>
      <div className="main_div">
        <div className="title">
          <h4>Rate your recent Experience</h4>
          <Rate />
        </div>
        <div className="body_div">
          <h4>Tell us more about your Experience</h4>
          <input placeholder="What made your Experience great? what is this employee doing well? Remember to be honest, helpful and constructive!" />
        </div>
        <div>
            Attach file
            <input
              type="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
        </div>
        <button>Submit</button>
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #8080802e;
  .main_div {
    padding: 20px;
    margin: 20px;
    box-shadow: 1px 1px 5px 1px #80808078;
    background: #fff;
    border-radius: 20px;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      padding: 10px;
    }
    .body_div {
      padding: 10px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      input {
        width: 100%;
        margin: 20px;
        height: 150px;
        border: 1px solid gray;
        border-radius: 5px;
      }
      ::-webkit-input-placeholder {
        white-space: pre-line;
        position: relative;
        padding: 5px;
        top: -45px;
      }
    }
  }
`;
