import React from "react";
import styled from "styled-components";
import ApexChart from "./Charts/ApexChart";
import { IoSearch } from "react-icons/io5";

// function valuetext(value) {
//   return `${value}°C`;
// }

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
            <button>button145345</button>
            <button>button145345</button>
            <button>button145345</button>
            <button>button1</button>
            <button>button1</button>
          </div>
        </div>
        <div className="parent1_child3">
          <h3>
            All Available ServiceLines
            <p>
              Below is a full lists of all the Service Lines available on
              ReviewMe
            </p>
          </h3>

          <div className="parent1_child3_mini">
            <select placeholder="select">
              <option>23</option>
              <option>34</option>
              <option>342</option>
            </select>
            <select>
              <option>324</option>
              <option>342</option>
              <option>143</option>
            </select>
            <select>
              <option>1234</option>
              <option>2134</option>
              <option>4355</option>
            </select>
            <select>
              <option>4352</option>
              <option>23523</option>
              <option>2345</option>
            </select>
            <select>
              <option>234523</option>
              <option>235</option>
              <option>23452</option>
            </select>
          </div>
        </div>
      </div>
      <div className="parent2">
        <h3>Selected Industries</h3>

        <div className="chart">
          <ApexChart />
          <input className="slider" type="range" min="0" max="100" step="5" />
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
    .parent1_child3 {
      border-top: 0.1px solid lightgray;
      h3 {
        font-weight: 500;
        p {
          color: gray;
        }
      }
      .parent1_child3_mini {
        display: flex;
        flex-direction: column;
        gap: 10px;
        select {
          padding: 4px;
          border: 0.1px solid lightblue;
          background: transparent;
          color: dodgerblue;
        }
        select:focus {
          color: blue;
           
          
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
    text-align: right;

      input{
        padding: 10px;
      }
    }
  }
`;
