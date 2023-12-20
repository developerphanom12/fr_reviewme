import React from "react";
import { CiCalendarDate, CiEdit } from "react-icons/ci";
import { FcApproval } from "react-icons/fc";
import { SiOpenbadges } from "react-icons/si";
import map from "../../images/maps.jpeg";
import {
  IoGlobeOutline,
  IoInformationCircleOutline,
  IoLocationOutline,
  IoMailOpenOutline,
  IoMailUnreadOutline,
  IoStarOutline,
} from "react-icons/io5";
import styled from "styled-components";
import { GrServices } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import Logo from "../../images/phanom.jpg";

export default function Dashboard() {
  return (
    <Root>
      <div className="parent1">
        <div className="child1">
          <h3>
            <img src={Logo} alt="img" />
          </h3>

          <div className="mini_child1">
            <button className="bttn">Basic Profile</button>{" "}
            <button>
              {" "}
              <CiEdit />
              Edit Profile
            </button>
          </div>
        </div>
        <div className="child2">
          <p>
            <img src={map} alt="img" />
          </p>
        </div>
        <div className="child3">
          <h5>
            <FcApproval />
            Profile Published
          </h5>
          <p>
            <CiCalendarDate />
            Date
          </p>
          <p>
            <IoGlobeOutline />
            Link
          </p>
          <p>
            <IoMailUnreadOutline />
            Email
          </p>
          <p>
            <IoLocationOutline />
            Locations
          </p>
          <p>
            <GrServices />
            Service Line
          </p>
          <p>
            <IoMailOpenOutline />
            Portfolio items{" "}
          </p>
        </div>
      </div>
      <div className="parent2">
        <div className="Parent2_child1">
          <h3>
            Ability to Deliver Score
            <IoInformationCircleOutline /> <p>7/10</p>
          </h3>
        </div>
        <div className="Parent2_child2">
          <div className="card">
            <h6>Reviews</h6>
            <span>5/20</span>
          </div>
          <div className="card">
            <h6>Clients & Experience</h6>
            <span>2/20</span>
          </div>
          <div className="card">
            <h6>Market Presence</h6>
            <span>0/10</span>
          </div>
        </div>
        <div className="Parent2_child3">
          <h2>
            Reviews
            <IoInformationCircleOutline />
          </h2>
          <p>
            1 reviews .... 0 in progress ... 5.0
            <IoStarOutline />
          </p>
          <div className="Parent2_mini">
            <select placeholder="AI">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <p>Share your unique review link</p>
          </div>
        </div>
      </div>
      <div className="parent3">
        <h1>Market your brand using exclusive ReviewMe badges</h1>
        <p>Download, share or embed your available badges</p>
        <span>
          <SiOpenbadges />
        </span>
        <button>
          View Badges <IoIosArrowForward />
        </button>
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  .parent1 {
    width: 23%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    .child1 {
      text-align: center;
      padding: 10px;
      @media (max-width: 877px) {
        padding: 5px;
      }
      img {
        width: 170px;
        @media (max-width: 877px) {
        min-width: 80px;
        width: 100%;
      }
      }
      .mini_child1 {
        display: flex;
        gap: 18px;
        @media (max-width: 877px) {
          gap: 5px;
          flex-direction: column;
        }
        .bttn {
          border: 1px solid dodgerblue;
          color: dodgerblue;
          background: transparent;
          font-weight: 600;
          font-size: 12px;
          padding: 4px;
          border-radius: 5px;
          @media (max-width: 877px) {
          font-size: 10px;
          font-weight: 400;
        }
        }
        button {
          border: none;
          padding: 4px;
          font-size: 12px;
          border-radius: 5px;
          font-weight: 600;
          background-color: dodgerblue;
          color: white;
          display: flex;
          align-items: center;
          svg {
            width: 20px;
            height: 20px;
          }
          @media (max-width: 877px) {
          font-size: 10px;
          font-weight: 400;
        }
        }
      }
    }
    .child2 {
      text-align: center;
      padding: 10px;
      img {
        width: 180px;
        @media (max-width: 897px) {
          min-width: 80px;
          width: 100%;
        }
      }
    }
    .child3{
      padding: 4px;
      h5{
        color: black;
        padding: 5px;
        display: flex;
        align-items: center;
        svg{
          min-width: 20px;
          min-height: 20px;

        }
      }
      p{
        font-size: 14px;
        display: flex;
        align-items: center;
        padding: 5px;
        svg{
          min-width: 20px;
          min-height: 20px;
          padding: 2px;
          color: dodgerblue;
        }
        @media (max-width: 897px) {
         font-size: 10px;
        }
      }
    }
  }
  .parent2 {
    width: 50%;
    border-left: 0.1px solid lightgray;
    border-right: 0.1px solid lightgray;
    padding: 10px;
    display: flex;
    flex-direction: column;
    .Parent2_child1{
      h3{
        display: flex;
        align-items: center;
        justify-content: space-between;
        svg{
          color: dodgerblue;
        }
        p{
          color: #0057ffe0;
        }
      }
    }
  }
  .parent3 {
    width: 23%;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
`;
