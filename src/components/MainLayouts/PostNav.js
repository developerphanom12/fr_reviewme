import React, { useState } from "react";
import { IoMdStarOutline } from "react-icons/io";
import { IoApps, IoHome, IoNotifications } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { FcBusiness } from "react-icons/fc";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
import { BiSolidMessageRoundedDots } from "react-icons/bi";

export default function PostNav() {
  const [active, setActive] = useState("courses");
  return (
    <Root>
      <div className="logo">
        <IoMdStarOutline />
        ReviewMe
      </div>
      <div className="search_bar">
        <FaSearch />
        <input type="text" placeholder="Search" />
      </div>
      <div className="main_nav">
        <button
          className={active === "courses" ? "btn_1 active" : "btn_1"}
          onClick={() => {
            setActive("courses");
          }}
        >
          <IoHome />
          Home
        </button>

        <button
          className={active === "courses" ? "btn_1 active" : "btn_1"}
          onClick={() => {
            setActive("courses");
          }}
        >
          <FaUserGroup />
          My Network
        </button>

        <button
          className={active === "courses" ? "btn_1 active" : "btn_1"}
          onClick={() => {
            setActive("courses");
          }}
        >
          <FcBusiness />
          Jobs
        </button>

        <button
          className={active === "courses" ? " active" : "btn_1"}
          onClick={() => {
            setActive("courses");
          }}
        >
          <BiSolidMessageRoundedDots />
          Message
        </button>

        <button
          className={active === "courses" ? " active" : "btn_1"}
          onClick={() => {
            setActive("courses");
          }}
        >
          <IoNotifications />
          Notification
        </button>

        <div className="profile">
          <button
            className={active === "courses" ? " active" : "btn_1"}
            onClick={() => {
              setActive("courses");
            }}
          >
            <FaUserCircle />
            Profile
          </button>
        </div>
      </div>
      <div className="business">
        <button
          className={active === "courses" ? " active" : "btn_1"}
          onClick={() => {
            setActive("courses");
          }}
        >
          <IoApps />
          For Bussiness
        </button>
      </div>
    </Root>
  );
}
const Root = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 30px;
  border-bottom: 1px solid lightgray;
  justify-content: space-around;
  .logo {
    background-color: dodgerblue;
    border-radius: 4px;
    padding: 5px;
    font-weight: 500;
    cursor: pointer;
    color: #ffffff;
    font-size: 22px;
    svg {
      color: #ffffff;
      font-weight: 600;
      width: 25px;
      height: 25px;
    }
  }
  .search_bar {
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 8px;
    width: 27%;
    gap: 5px;
    background-color: rgb(120 144 156 / 26%);
    input {
      border: none;
      padding: 5px;
      background-color: rgb(120 144 156 / 0%);
    }
    input:focus {
      border: none;
    }
  }
  .main_nav {
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 10px;
    font-size: 13px;
    &:hover {
      color: black;
      transition: all 0.1s ease-in-out 0s;
    }
  
    .btn_1 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: transparent;
      color: #fff;
      background-size: 300% 100%;
      transition: all 0.3s ease-in-out 0s;
      &:hover {
        color: black;
        transition: all 0.1s ease-in-out 0s;
      }
    }
    button {
      background-color: #ffffff;
      color: grey;
      border: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &:hover {
        color: black;
        transition: all 0.1s ease-in-out 0s;
      }
      svg {
      width: 25px;
      height: 25px;
      color: rgb(120, 144, 156);
    }
    }
    .active {
      border-bottom: 2px solid black;
      color: rgb(120, 144, 156);
    }

    .profile {
      padding: 10px;
      font-size: 13px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      svg {
        width: 25px;
        height: 25px;
        color: rgb(120, 144, 156);
      }
      button {
        background-color: #ffffff;
        color: grey;
        border: none;
      }
      .active {
        border-bottom: 2px solid black;
        color: rgb(120, 144, 156);
      }
    }
  }
  .business {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 10px;

    svg {
      width: 25px;
      height: 25px;
      color: rgb(120, 144, 156);
    }
    button {
      display: flex;
      flex-direction: column;
      background-color: #ffffff;
      color: grey;
      border: none;
    }
    .active {
      border-bottom: 2px solid black;
      color: rgb(120, 144, 156);
    }
  }
`;
