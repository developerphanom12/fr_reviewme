import React from "react";
import styled from "styled-components";

export default function Experience({ detail }) {
  return (
    <Root>
      <h2> Experience</h2>
      <ul>
        <li>
          <div className="exp">
            <h4>Location </h4>
            <p>
              {" "}
              {detail?.company?.location} ({detail?.company?.location_type})
            </p>
          </div>
        </li>
        <li>
          <div className="exp">
            <h4>Experience </h4>
            <p>{detail?.company?.exprience}</p>
          </div>
        </li>
        <li>
          <div className="exp">
            <h4>Started From </h4>
            <p>
              {" "}
              {detail?.company?.start_date} - {detail?.end_date}
            </p>
          </div>
        </li>
        <li>
          <div className="exp">
            <h4>Working </h4>
            <p> {detail?.company?.employment_type}</p>
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
      border-bottom: 0.1px solid lightgray;
    }
    p {
      color: gray;
      font-size: 14px;
      padding: 2px;
    }
  }
`;
