import React from "react";
import styled from "styled-components";

export default function EmployerSign() {
  return (
    <Root>
      <div className="header">
        <h3>Employer Sign-Up Portal</h3>
      </div>
      <div className="bodyy">
        <div className="child">
          <p>Name</p>
          <input />
        </div>
        <div className="child">
          <div className="chlid1">
            <h3>Company Details</h3>
            <p>Company Name</p>
            <input />
          </div>
          <div className="child2">
            <h3>Company Proof</h3>
            <p>Registration Proof</p>
            <input />
            <p>GST Detail</p>
            <input />
          </div>
          <div className="child3">
            <p>Address Proof</p>
            <input />
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`

`;
