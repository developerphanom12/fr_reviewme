import React from "react";
import styled from "styled-components";
import Footer from "../CommonPages/Footer";

export default function EmployerProfile() {
  return (
    <Root>
      <div className="main1">
        <div className="child1">
          <div className="background_image">background image</div>
          <div className="Profile_image">profile image</div>
          <div className="descriptions">description name of company</div>
          <div className="connection">connection</div>
        </div>
        <div className="discover_more">Discover more</div>
      </div>
      <div className="main2">
        <div>are you hiring
          <div>logo</div>
          <div>description</div>
          <div>2buttons</div>

        </div>
        <div>share post</div>
        <div>suggestions</div>
      </div>
      <div className="main3">
        <div>ReviewMe News</div>
        <div>Ad option</div>
        <div>
          <Footer />
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-wrap: wrap;
  background-color: #d3d3d35c;
  .main1 {
    flex-direction: column;
    .child1 {
      border: 1px solid lightgrey;
      border-radius: 10px;
      background-color: #ffffff;
    }
    .discover_more {
      border: 1px solid lightgrey;
      border-radius: 10px;
      background-color: #ffffff;

    }
  }
`;
