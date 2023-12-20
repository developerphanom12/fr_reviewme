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
            <IoInformationCircleOutline />
          </h3>
          <p>
            7 <span>/10</span>
          </p>
        </div>
        <div className="Parent2_child2">
          <div className="card">
            <h6>Reviews</h6>
            <span>5/20</span>
            <button>
              Add Review <IoIosArrowForward />
            </button>
          </div>
          <div className="card">
            <h6>Clients & Experience</h6>
            <span>2/20</span>
            <button>
              Add Clients & Experience <IoIosArrowForward />
            </button>
          </div>
          <div className="card">
            <h6>Market Presence</h6>
            <span>0/10</span>
            <button>
              Add Market Presence <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="Parent2_child3">
          <div className="Parent2_miniii">
            <h3>
              Reviews
              <IoInformationCircleOutline />
            </h3>
            <p>1 reviews </p> <p> 0 in progress </p>{" "}
            <p>
              {" "}
              5.0
              <IoStarOutline />
            </p>
          </div>
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
        <div className="parent3_child">
          <h3>Market your brand using exclusive ReviewMe badges</h3>
          <p>Download, share or embed your available badges</p>
          <span>
            <SiOpenbadges /> <SiOpenbadges /> 
          </span>
          <button>
            View Badges <IoIosArrowForward />
          </button>
        </div>
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
      @media (max-width: 897px) {
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
          text-align: center;
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
          text-align: center;
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
    .child3 {
      padding: 4px;
      h5 {
        color: black;
        padding: 5px;
        display: flex;
        align-items: center;
        svg {
          min-width: 20px;
          min-height: 20px;
        }
      }
      p {
        font-size: 14px;
        display: flex;
        align-items: center;
        padding: 5px;
        svg {
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
    width: 52%;
    border-left: 0.1px solid lightgray;
    border-right: 0.1px solid lightgray;
    padding: 10px;
    display: flex;
    flex-direction: column;
    .Parent2_child1 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h3 {
        display: flex;
        align-items: center;
        svg {
          color: dodgerblue;
          padding: 3px;
          min-width: 20px;
          min-height: 20px;
        }
      }
      p {
        color: #0057ffe0;
        text-align: center;
        font-size: 22px;
        font-weight: 600;
        span {
          color: gray;
          font-size: 14px;
        }
      }
    }
    .Parent2_child2 {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
      .card {
        flex: 1;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        border-radius: 5px;
        gap: 10px;
        padding: 10px 20px;
        text-align: center;
        border: double thick dodgerblue;
        border-width: 6px 1px 1px 1px;
        span {
          margin: 5px;
        }
        button {
          border: 1px solid dodgerblue;
          border-radius: 5px;
          background: transparent;
          font-size: 10px;
          padding: 4px;
          align-items: center;
          display: flex;
          justify-content: space-between;
          svg {
            color: dodgerblue;
            min-width: 15px;
            min-height: 15px;
          }
        }
      }
    }
    .Parent2_child3 {
      display: flex;
      flex-direction: column;
      .Parent2_miniii {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h3 {
          display: flex;
          svg {
            color: dodgerblue;
            padding: 3px;
            min-width: 20px;
            min-height: 20px;
          }
        }
        p {
          display: flex;
          gap: 10px;
          color: black;
          font: 14px;
          svg {
            color: red;
          }
        }
      }
      .Parent2_mini {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        background: #d3d3d39e;
        padding: 10px;
        border-radius: 4px;
        justify-content: space-around;
        select {
          width: 50%;
          padding: 7px;
          border-radius: 4px;
          margin: 5px;
          color: dodgerblue;
          border-color: dodgerblue;
          cursor: pointer;
        }
        select:focus {
          color: red;
          border-color: red;
        }
      }
    }
  }
  .parent3 {
    width: 25%;
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .parent3_child {
      display: flex;
      flex-direction: column;
      margin: 10px;
      padding: 10px;
      border: 2px solid #1e90ff91;
      border-radius: 10px;
      box-shadow: 1px 1px 2px 2px lightblue;
      h3 {
        font-weight: 300;
      }
      p {
        font-size: 12px;
        padding: 10px;
      }
      span {
        align-items: center;
        display: flex;
        justify-content: center;
        padding: 10px;
        svg {
          width: 50px;
          height: 50px;
          color: #086abf;
        }
      }
      button {
        border: 1px solid dodgerblue;
        border-radius: 5px;
        background: transparent;
        font-size: 10px;
        padding: 4px;
        align-items: center;
        display: flex;
        justify-content: space-between;
        svg {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
`;
