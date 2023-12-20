import React from "react";
import styled from "styled-components";
import ApexChart from "./Charts/ApexChart";
import { IoSearch } from "react-icons/io5";
import ApexChart2 from "./Charts/ApexChart2";
import { Box, Slider } from "@mui/material";

function valuetext(value) {
  return `${value}°C`;
}

export default function ServiceLines() {
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
              <input
                type="range"
                min="1"
                max="100"
                class="slider"
                id="myRange"
              />
            </div>
            <input className="slider" type="range" min="0" max="100" step="5" />
            <input className="slider" type="range" min="0" max="100" step="5" />
            <input className="slider" type="range" min="0" max="100" step="5" />
            {/* <Box sx={{ width: 300 }}>
              <Slider
                aria-label="Temperature"
                defaultValue={30}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={110}
              />
              <Slider
                defaultValue={30}
                step={10}
                marks
                min={10}
                max={110}
                disabled
              />
            </Box> */}
          </div>
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
      }
    }
  }
`;
