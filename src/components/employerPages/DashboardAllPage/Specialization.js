import React from "react";
import styled from "styled-components";
import ApexChart from "./Charts/ApexChart";
import { IoSearch } from "react-icons/io5";
import ApexChart2 from "./Charts/ApexChart2";
import { FcApproval } from "react-icons/fc";
import { Box, Slider } from "@mui/material";

export default function Specialization() {
  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <Root>
      <div className="parent1">
        <p>industries</p>
        <div className="parent1_child1">
          <h3>Update Industries</h3>
          <p>select the relevant industries for your company's services</p>
        </div>
        <div className="parent1_child2">
          <p>
            <IoSearch />
            Search for a service line
          </p>
          <div className="parent1_child2_mini">
            <button>button1</button>
            <button>button22</button>
            <button>button333</button>
            <button>button4444</button>
            <button>button1</button>
            <button>button1</button>
            <button>button145345</button>
            <button>button1</button>
            <button>button1</button>
          </div>
        </div>
      </div>
      <div className="parent2">
        <h3>Selected Industries</h3>
        <div className="chart">
          <ApexChart />
        </div>
      </div>
      <div className="parent3">
        <h3>Update Client Sizes</h3>
        <div className="parent3_child">
          <div className="parent3_child_mini">
            <ApexChart2 />
          </div>
          <div className="parent3_child_mini">
            <div className="slidecontainer">
              <Box sx={{ width: 300 }}>
                <Slider
                  aria-label="Percentage"
                  defaultValue={30}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={0}
                  max={100}
                />
              </Box>
              <Box sx={{ width: 300 }}>
                <Slider
                  aria-label="Percentage"
                  defaultValue={30}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={0}
                  max={100}
                />
              </Box>
              <Box sx={{ width: 300 }}>
                <Slider
                  aria-label="Percentage"
                  defaultValue={30}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={0}
                  max={100}
                />
              </Box>
              <Box sx={{ width: 300 }}>
                <Slider
                  aria-label="Percentage"
                  defaultValue={30}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={0}
                  max={100}
                />
              </Box>
              <Box sx={{ width: 300 }}>
                <Slider
                  aria-label="Percentage"
                  defaultValue={30}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={0}
                  max={100}
                />
              </Box>
            </div>

            <div className="mini_total">
              <FcApproval />
              100%
            </div>
          </div>
        </div>
        <div className="save_btn">
          <button>Save Changes</button>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  .parent1 {
    width: 50%;
    padding: 10px;
    p {
      font-weight: 600;
      color: dodgerblue;
    }
    .parent1_child1 {
      h3 {
        font-weight: 500;
      }
      p {
        color: gray;
      }
    }
    .parent1_child2 {
      padding: 10px 0px;
      p {
        font-size: 12px;
        display: flex;
        gap: 5px;
        color: #555353;
        align-items: center;
        svg {
          color: dodgerblue;
          width: 16px;
          height: 16px;
        }
      }
      .parent1_child2_mini {
        padding: 10px 0px;
        flex-wrap: wrap;
        display: flex;
        gap: 10px;
        button {
          background: transparent;
          border-radius: 2px;
          color: dodgerblue;
          padding: 2px 5px;
          border: 0.5px solid dodgerblue;
        }
      }
    }
  }
  .parent2 {
    width: 50%;
    h3 {
      font-weight: 500;
    }
    .chart {
      width: 50%;
      height: 50%;
    }
  }
  .parent3 {
    width: 100%;
    padding: 10px;
    .parent3_child {
      display: flex;
      justify-content: space-around;
      gap: 10px;
      .parent3_child_mini {
        padding: 10px;
        display: flex;
        flex-direction: column;
        input {
          padding: 10px;
        }
        .mini_total {
          text-align: right;
          padding: 10px;
          border-top: 0.1px solid lightgray;
        }
      }
    }
    .save_btn{
      text-align: right;
      button{
        border: none;
        background-color: red;
        color: white;
        border-radius: 4px;
        padding: 5px;
      }
    }
  }
`;
