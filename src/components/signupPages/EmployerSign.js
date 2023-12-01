import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { EXCHANGE_URLS_EMPLOYER } from "../URLS";
import cogoToast from "cogo-toast";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

export default function EmployerSign() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required.")
      .email("Email is not valid."),
    phone_number: yup.string().required("Phone number is required."),
    password: yup.string().required("Password is required."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const registerApi = async (data) => {
    try {
      const res = await axios.post(
        `${EXCHANGE_URLS_EMPLOYER}/registerss`,
        data
      );
      console.log("resss", res?.data);
      if (res?.status === 201) {
        cogoToast.success("sign-up successfully");
        reset(); // Reset form after successful submission
        navigate("/employerlogin");
      }
    } catch (err) {
      console.log("err", err);
      cogoToast.error("An error occurred");
    }
  };

  const onSubmit = (data) => {
    registerApi(data);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  const handleClick = () => {};
  return (
    <Root>
      <div className="header">
        <h2>Employer Sign-Up Portal</h2>
      </div>
      <div className="mainbodyy">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="child">
            <p>Email</p>
            <input
              onKeyDown={handleKeyDown}
              type="email"
              {...register("email")}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="child">
            <p>Phone Number</p>
            <input type="number" {...register("phone_number")} />
            {errors.phone_number && <p>{errors.phone_number.message}</p>}
          </div>
          <div className="childdbox">
            <p>Password</p>
            <div className="child1">
              <input
                onKeyDown={handleKeyDown}
                type={showPassword ? "text" : "password"}
                {...register("password")}
              />
              <button className="btn" onClick={togglePasswordVisibility}>
                {showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
              </button>
            </div>

            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className="child">
            <button type="submit">Submit & Join</button>
          </div>
        </form>
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
  .header {
    h2 {
      margin: 5px;
      font-weight: 500;
      color: #000000e6;
    }
  }
  .mainbodyy {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .child {
      padding: 5px;
      width: 100%;
      display: flex;
      flex-direction: column;
      p {
        font-size: 12px;
        padding: 5px 0px;
      }
      /* align-items: center; */
      input {
        border-radius: 5px;
        padding: 10px;
        width: 100%;
        border: 1px solid black;
      }

      button {
        background-color: #0a66c2;
        /* padding: 12px 24px; */
        border: none;
        color: #ffffff;
        height: 45px;
        margin: 0px 10px;
        font-size: 16px;
        width: 100%;
        border-radius: 30px;
        font-weight: 600;
        &:hover {
          cursor: pointer;
          box-shadow: 0px 0px 1px;
          background-color: #043669;
        }
      }
    }
    .childdbox {
      padding: 5px;
      width: 100%;
      display: flex;
      flex-direction: column;
      /* align-items: center; */
      p {
        font-size: 12px;
        padding: 5px 0px;
      }
      .child1 {
        padding: 0px 10px;
        display: flex;
        border: 1px solid black;
        border-radius: 5px;
        background-color: #ffffff;
        width: 100%;
        input {
          padding: 10px;
          width: 100%;
          border: none;
        }

        .btn {
          padding: 3px;
          border: none;
          justify-content: flex-end;
          align-items: center;
          display: flex;
          background-color: white;
          svg {
            color: dodgerblue;
            width: 17px;
            height: 17px;
            padding-left: 20px;
          }
        }
      }
    }
  }
`;
