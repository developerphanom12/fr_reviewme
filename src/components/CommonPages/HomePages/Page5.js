import React from "react";
import styled from "styled-components";
import { IoStar } from "react-icons/io5";

export default function Page5() {
  return (
    <Root>
      <div className="main1">
        <h2>
          Be Heard
          <IoStar />
        </h2>
        <p>
          ReviewMe is a review platform that’s open to everyone. Share your
          experiences to help others make better choices and encourage companies
          and employees to up their game.
        </p>
      </div>
      <div className="main2">
        <div className="child1">
          <h1>
            Our 2023 Transparency Report has landed
            <IoStar />
          </h1>
          <p>
            We’re looking back on a year unlike any other. Read about how we
            ensure our platform’s integrity.
          </p>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  background-color: rgba(2, 83, 185, 1);
  color: white;
  display: flex;
  padding: 10px;
  justify-content: space-evenly;
  align-items: center;

  .main1 {
    width: 38%;
    padding: 10px;
    h2 {
      font-size: 2.5em;
      margin: 0;
      padding: 20px 20px 0px 20px;
      svg {
        padding: 5px;
      }
      @media (max-width: 689px) {
        font-size: 1.3em;
        padding: 20px 0px;
      }
    }
    p {
      font-weight: 700;
      margin: 0;
      padding: 20px;
      @media (max-width: 689px) {
        padding: 0px;
      }
    }
  }
  .main2 {
    width: 30%;
    padding: 40px;
    background: rgba(4, 189, 228, 1);
    border-radius: 30px;
    color: black;
    position: relative;
    top: -70px;
    @media (max-width: 789px) {
      width: 40%;
    }
    .child1 {
      padding: 20px;
      @media (max-width: 789px) {
        padding: 0px;
      }
      h1 {
        font-size: 2.5em;
        margin: 10px;
        svg {
          padding: 5px;
        }
        @media (max-width: 789px) {
          font-size: 1.3em;
        }
      }
      p {
        font-weight: 700;
        padding: 10px;
      }
    }
  }
`;
