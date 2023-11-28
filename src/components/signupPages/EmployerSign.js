import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_EMPLOYER } from "../URLS";
import cogoToast from "cogo-toast";
import { useNavigate } from "react-router-dom";

export default function EmployerSign() {
  const [regis, setRegis] = useState({
    email: "",
    phone_number: "",
    password: "",
  });
  const navigate = useNavigate();
  const registerApi = async () => {
    try {
      const res = await axios.post(
        `${EXCHANGE_URLS_EMPLOYER}/registerss`,
        regis
      );
      console.log("resss", res?.data);
      if (res?.status === 201) {
        cogoToast.success("sign-up successfully");
        navigate("/employerlogin");
      }
    } catch (err) {
      console.log("err", err);
      cogoToast.error("An error occured");
    }
  };

  const handleSubmit = () => {
    registerApi();
  };
  return (
    <Root>
      <div className="header">
        <h3>Employer Sign-Up Portal</h3>
      </div>
      <div className="mainbodyy">
        <div className="child">
          <p>Email</p>
          <input
            type="email"
            value={regis.email}
            onChange={(e) => {
              setRegis({ ...regis, email: e.target.value });
            }}
          />
        </div>
        <div className="child">
          <p>Phone Number</p>
          <input
            type="number"
            value={regis.phone_number}
            onChange={(e) => {
              setRegis({ ...regis, phone_number: e.target.value });
            }}
          />
        </div>
        <div className="child">
          <p>Password</p>
          <input
            type="password"
            value={regis.password}
            onChange={(e) => {
              setRegis({ ...regis, password: e.target.value });
            }}
          />
        </div>
        <div className="child">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f8ff;
  padding: 20px;
  .mainbodyy {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .child {
      padding: 5px;
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      input {
        border-radius: 5px;
        padding: 10px;
        width: 80%;
      }

      button {
        padding: 10px;
        border-radius: 5px;
        width: 83%;
      }
    }
  }
`;
