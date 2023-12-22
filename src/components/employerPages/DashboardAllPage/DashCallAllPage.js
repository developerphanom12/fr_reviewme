import React, { useState } from "react";
import styled from "styled-components";
import Dashboard from "./Dashboard";
import ServiceLines from "./ServiceLines";
import Specialization from "./Specialization";
import Portfolio from "./Portfolio";
import IndustryRecognitions from "./IndustryRecognitions";
import Edit from "./EditPages/Edit";

export default function DashCallAllPage() {
  const [active, setActive] = useState("Dashboard");

  return (
    <Root>
      <div className="nav_tab">
        <button
          className={active === "Dashboard" ? "btn_1 active" : "btn_1"}
          onClick={() => {
            setActive("Dashboard");
          }}
        >
          Dashboard
        </button>
        <button
          className={active === "ServiceLines" ? "btn_1 active" : "btn_1"}
          onClick={() => {
            setActive("ServiceLines");
          }}
        >
          Service Lines
        </button>
        <button
          className={active === "Specialization" ? "btn_1 active" : "btn_1"}
          onClick={() => {
            setActive("Specialization");
          }}
        >
          Specialization
        </button>
        <button
          className={active === "Portfolio" ? "btn_1 active" : "btn_1"}
          onClick={() => {
            setActive("Portfolio");
          }}
        >
          Portfolio
        </button>
        <button
          className={
            active === "IndustryRecognitions" ? "btn_1 active" : "btn_1"
          }
          onClick={() => {
            setActive("IndustryRecognitions");
          }}
        >
          Industry Recognitions
        </button>
        <button
          className={active === "Edit" ? "btn_1 active" : "btn_1"}
          onClick={() => {
            setActive("Edit");
          }}
        >
          Edit
        </button>
      </div>
      <div className="table">
        {active === "Dashboard" ? (
          <Dashboard />
        ) : active === "ServiceLines" ? (
          <ServiceLines />
        ) : active === "Specialization" ? (
          <Specialization />
        ) : active === "Portfolio" ? (
          <Portfolio />
        ) : active === "IndustryRecognitions" ? (
          <IndustryRecognitions />
        ) : active === "Edit" ? (
          <Edit />
        ) : (
          <Dashboard />
        )}
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #dcf1fbb8;
  justify-content: center;
  padding-bottom:20px ;
  .nav_tab {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 10px;
    @media (max-width: 786px) {
      flex-direction: column;
    }

    .btn_1 {
      background-color: transparent;
      border: none;
      width: fit-content;
      padding: 10px;
      color: dodgerblue;
      font-weight: 600;
      &:hover {
        cursor: pointer;
      }
      @media (max-width: 566px) {
        min-width: 80px;
        width: 100%;
        padding: 5px;
        font-size: small;
        &:hover {
          background-color: transparent;
          color: black;
        }
      }
    }
    .active {
      border-bottom: 3px solid #57be1f;
      color: #57be1f;
      @media (max-width: 400px) {
        .active {
          background-color: transparent;
          color: black;
        }
      }
    }
  }
  .table {
    display: flex;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
    width: 80%;
    @media (max-width: 600px) {
      padding: 0;
    width: 90%;

    }
  }
`;
