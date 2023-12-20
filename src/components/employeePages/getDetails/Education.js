import React from "react";
import styled from "styled-components";

export default function Education({ detail }) {
  return (
    <Root>
      <h2>Education</h2>
      <ul>
        <li>
          <div className="exp">
            <h4>Degrese</h4>
            <p>{detail?.education?.degree}</p>
          </div>
        </li>
        <li>
          <div className="exp">
            <h4>Grade</h4>
            <p>
              {detail?.education?.grade} {detail?.education?.typeof_grade}
            </p>
          </div>
        </li>
        <li>
          <div className="exp">
            <h4>Started from</h4>
            <p>{detail?.education?.start_date} - {detail?.education?.end_date}</p>
          </div>
        </li>
        
      </ul>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-direction: column;
  .exp {
    padding: 5px;
    h2 {
      padding: 2px;
    }
    p {
      color: gray;
      font-size: 14px;
      padding: 2px;
    }
  }
`;
