import React from "react";
import styled from "styled-components";
import profilePic from "../../../images/editprofilepic.jpeg";

export default function EditProfile() {
  return (
    <Root>
      <div className="parent1">
        <h3>Company Information</h3>
        <div className="profile_child1">
          <div className="profile_child1_minii">
            <p>Company Name</p>
            <input />
          </div>
          <div className="profile_child1_minii">
            <p>Company website</p>
            <input />
          </div>
        </div>
        <div className="profile_child2">
          <div className="profile_child2_minii">
            <p> Total Employees </p>
            <select>
              <option>11</option>
              <option>11</option>
              <option>11</option>
              <option>11</option>
              <option>11</option>
            </select>
          </div>
          <div className="profile_child2_minii">
            <p> Founding Year </p>
            <select>
              <option>11</option>
              <option>11</option>
              <option>11</option>
              <option>11</option>
              <option>11</option>
            </select>
          </div>
        </div>

        <div className="profile_child1">
          <div className="profile_child1_minii">
            <p>Tagline</p>
            <input />
          </div>
          <div className="profile_child1_minii">
            <p>Description</p>
            <input />
          </div>
        </div>
      </div>
      <div className="parent2">
        <p>Company Logo</p>
        <img src={profilePic} alt="img" />
        <div className="parent2_child1">
          <p>Admin Contact Phone</p>
          <input />
        </div>
        <div className="parent2_child1">
          <p>Sales Email</p>
          <input />
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 10px;
  background-color: white;
  margin: 10px;
  flex-wrap: wrap;
  .parent1 {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 50%;
    h3 {
      color: #077beb;
      margin: 5px 0px;
    }
    .profile_child1 {
      display: flex;
      flex-direction: column;
      .profile_child1_minii {
        padding: 5px;
        p {
          padding: 5px;
          color: black;
        }
        input {
          padding: 5px;
          width: 100%;
        }
      }
    }
    .profile_child2 {
      display: flex;
      flex-direction: column;
      .profile_child2_minii {
        padding: 5px;
        p {
          padding: 5px;
          color: black;
        }
        select {
          padding: 5px;
          width: 60%;
          color: dodgerblue;
        }
      }
    }
  }
  .parent2 {
    width: 50%;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 10px;
    p {
      padding: 5px;
      color: #3b3939;
      font-weight: 600;
    }
    img {
      width: 150px;
      height: 150px;
      padding: 10px;
    }
    .parent2_child1 {
      padding: 5px;
      p {
        padding: 5px;
        color: black;
        font-weight: 400;
      }
      input {
        padding: 5px;
        width: 100%;
      }
    }
  }
`;
