import React, { useState } from "react";
import styled from "styled-components";
import { FaGripLines } from "react-icons/fa6";
import screen from "../../images/computer-screen-mountain-removebg-preview.png";
import screen2 from "../../images/istockphoto-1025661604-612x612-removebg-preview (1).png";
import target from "../../images/target-.jpg";
import PortfolioAdd from "./PortfolioAdd";

export default function Portfolio() {
  const [showAddPortfolio, setShowAddPortfolio] = useState(false);

  const handleAddPortfolioClick = () => {
    setShowAddPortfolio(true);
  };
  return (
    <Root>
      <div className="parent_port_1">
        <h4>My Portfolio</h4>
        <p>
          The portfolio items listed will be displayed on your profile page in
          the order below
        </p>
        <p>
          You can change the order by changing the portfolio items by the{" "}
          <FaGripLines /> up and down the list
        </p>
        <div>
          <h5>Add a new Portfolio items +</h5>
        </div>
        <div>
          <h5>Key Clients</h5>
          <button>
            one <FaGripLines />
          </button>
          <button>
            two <FaGripLines />
          </button>
        </div>
      </div>
      <div className="parent_port_2">
        {showAddPortfolio && (
          <PortfolioAdd onCancel={() => setShowAddPortfolio(false)} />
        )}
        <div className="parent_port_2_child1">
          <h4>Add Portfolio items</h4>
          <h6>Share your latest exciting work.</h6>
          <p>
            This is replacing current Portfolio and will help you to share This
            is replacing current Portfolio and will help you to share This is
            replacing current Portfolio and will help you to share
          </p>
        </div>
        <div className="parent_port_2_child2">
          <div className="parent_port_2_child2_mini1">
            <div className="minii">
              {" "}
              <h6>1. Add a new Portfolio item</h6>
              <img src={screen} alt="img" />
            </div>
            <div className="minii">
              {" "}
              <h6>3. Add a new Portfolio item Details</h6>
              <img src={target} alt="img" />
            </div>
          </div>
          <div className="parent_port_2_child2_mini2">
            <h3>
              Add Portfolio items today!
              <p>
                This is replacing current Portfolio and will help you to share
                This is replacing current Portfolio and will help you to share
                This is replacing current Portfolio and will help you to share
              </p>
            </h3>
            <button onClick={handleAddPortfolioClick}>
              Add a New Portfolio item
            </button>
            <div className="minii">
              {" "}
              <h6>2. Fill out the client information</h6>
              <img src={screen2} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  gap: 10px;
  background: #dcf1fbb8;
  width: 100%;

  .parent_port_1 {
    padding: 15px;
    gap: 10px;
    background: #ffffff;
    width: 20%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;

    > div {
      border-top: 1px solid lightgray;
      h5 {
        padding: 10px 0px;
        color: #005db7;
      }
    }
    svg {
      color: red;
    }
    h4 {
      margin: 5px;
    }
    button {
      background-color: transparent;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      border: none;
      color: #005db7;
      font-weight: 600;
    }
  }
  .parent_port_2 {
    background: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 80%;
    .parent_port_2_child1 {
      h4 {
        margin: 5px;
      }
      h6 {
        margin: 5px;
        font-weight: 500;
      }
      p {
        padding: 5px;
      }
    }
    .parent_port_2_child2 {
      display: flex;
      justify-content: space-between;
      margin: 20px;
      @media (max-width: 899px) {
        flex-wrap: wrap;
      }

      .parent_port_2_child2_mini1 {
        display: flex;
        flex-direction: column;
        padding: 10px;
        justify-content: space-around;
        flex: 1;
        .minii {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 250px;
          padding: 10px;
          margin: 10px;
          box-shadow: 0 4px 8px 0 aliceblue, 0 6px 20px 0 rgba(0, 0, 0, 0.19);

          h6 {
            margin: 5px;
          }
          img {
            width: 180px;
            margin: 10px;
          }
        }
      }
      .parent_port_2_child2_mini2 {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 10px;
        gap: 20px;
        h3 {
          margin: 5px;
        }
        button {
          background: red;
          color: #ffffff;
          font-weight: 600;
          margin: 10px;
          border-radius: 4px;
          border: none;
          padding: 10px;
          cursor: pointer;
          width: 200px;
        }

        .minii {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 250px;
          justify-content: center;
          padding: 10px;
          margin: 10px;
          /* box-shadow: 10px  15px 15px aliceblue; */
          box-shadow: 0 4px 8px 0 aliceblue, 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          h6 {
            margin: 5px;
          }
          img {
            width: 150px;
          }
        }
      }
    }
  }
`;
