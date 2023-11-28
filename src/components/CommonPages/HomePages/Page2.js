import React from "react";
import styled from "styled-components";
import bank from "../../images/banks.svg";
import jwelry from "../../images/jewelry_store.svg";
import airplane from "../../images/travel_insurance.svg";
import car from "../../images/car_dealer.svg";
import furniture from "../../images/furniture_store.svg";
import pet from "../../images/pet_store.svg";
import clothing from "../../images/clothing_store.svg";
import energy from "../../images/energy_supplier.svg";
import insurance from "../../images/insurance_agency.svg";
import fitness from "../../images/fitness_nutrition_center.svg";
import electronic from "../../images/electronics_technology.svg";
import real from "../../images/real_estate_agents.svg";

export default function Page2() {
  return (
    <Root>
      <div className="main1">
        <h1>Explore Categories</h1>
        <div className="child1">
          <div className="child2">
            <p>
              <img src={bank} alt="img" />
              Bank
            </p>
          </div>
          <div className="child2">
            <p>
              <img src={jwelry} alt="img" />
              Jewelry store
            </p>
          </div>
          <div className="child2">
            <p>
              <img src={airplane} alt="img" />
              Travel insurance company
            </p>
          </div>
          <div className="child2">
            <p>
              <img src={car} alt="img" />
              Car Dealer
            </p>
          </div>
        </div>
        <div className="child1">
          <div className="child2">
            <p>
              <img src={furniture} alt="img" />
              Furniture store
            </p>
          </div>
          <div className="child2">
            <p>
              <img src={pet} alt="img" />
              Pet store{" "}
            </p>
          </div>
          <div className="child2">
            <p>
              <img src={clothing} alt="img" />
              Clothing store
            </p>
          </div>
          <div className="child2">
            <p>
              <img src={insurance} alt="img" />
              Insurance agency
            </p>
          </div>
        </div>
        <div className="child1">
          <div className="child2">
            <p>
              <img src={energy} alt="img" />
              Energy supplier
            </p>
          </div>
          <div className="child2">
            <p>
              <img src={electronic} alt="img" />
              Electronic and technology
            </p>
          </div>
          <div className="child2">
            <p>
              <img src={fitness} alt="img" />
              Fitness and nutrition service
            </p>
          </div>
          <div className="child2">
            <p>
              <img src={real} alt="img" />
              Real estate agent
            </p>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  background-color:#FFFFF0;
  padding: 20px;
  min-height: 430px;
  height: 100%;
  .main1 {
    h1 {
      font-size: 1.7em;
      margin: 20px;
      padding-left: 40px;
    }
    .child1 {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      padding: 10px;
      width: 100%;
      gap: 20px;
      flex-wrap:wrap;
      @media (max-width:989px){
        padding: 5px;
      }
      .child2 {
        width: 20%;
        height: 55px;
        padding: 10px;
        background: whitesmoke;
        border-radius: 8px;
        border: 1px solid #dcdcdc;
        align-items: center;
        display: flex;
        transition: all 0.2s;
        transition-timing-function: cubic-bezier( 3, 0, 1);
        @media (max-width:989px){
          width: 70%;
          height: 80%;

      }
        &:hover {
          transform:scale(1,1);
          /* transform: skewX(-10deg); */
          box-shadow: 1px 4px 4px gray;
        }
        p {
          display: flex;
          align-items: center;
          margin: 0;
          gap: 20px;
          padding: 15px;
          svg {
            width: 24px;
            height: 24px;
          }
          @media (max-width:677px){
            padding: 0px;
          }
        }
        .air {
          svg {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
`;
