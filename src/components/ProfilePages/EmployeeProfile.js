import React from "react";
import styled from "styled-components";
import background from "../images/images.jpeg";

export default function EmployeeProfile() {
  return (
    <Root>
      <div className="main1">
        <div className="profile">
          <div className="bg_img">background image</div>
          <div className="imgg">
            <img src={background} alt="img" />{" "}
          </div>
          <div className="bio">name</div>
          <div className="connection"> connection </div>
          <div className="items"> my items </div>
        </div>
        <div>Discover more</div>
      </div>
    
    </Root>
  );
}
const Root = styled.section`
  text-align: center;
  display: flex;
  height: 100%;
  min-height: 100vh;
  padding: 20px;
  .main1 {
    display: flex;
    width: 65%;
    height: 80%;
    flex-direction: column;
    border-radius: 10px;
    .profile {
      border-radius: 10px;
      border: 1px solid lightgray;
      text-align: center;
      position: relative;

      .bg_img {
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        background-color: lightgrey;
      }
      .imgg {
        background-color: transparent;
        position: absolute;
        top: 15%;
        left: 10%;
        height: 80px;
        width: 80px;
        img {
          border-radius: 50px;
          width: 80px;
          height: 80px;
        }
      }
      .bio {
      }
    }
  }
`;
