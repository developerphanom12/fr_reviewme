import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { EXCHANGE_URLS_EMPLOYEE } from "../URLS";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import cogoToast from "cogo-toast";
import { userCheckAction, userDataAction } from "../../redux/users/action";

export default function EmployeeSign() {
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
      const res = await axios.post(`${EXCHANGE_URLS_EMPLOYEE}/register`, data);
      console.log("resss", res?.data);
      if (res?.status === 201) {
        cogoToast.success("sign-up successfully");
        reset();
        localStorage.setItem("token", res?.data?.data?.user?.token);
        dispatch(userDataAction(res?.data?.data?.user));
        dispatch(userCheckAction(true));
        navigate("/employlogin");
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
        <h2>Make the most of your professional life</h2>
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
          <div className="policy_box">
            By clicking Continue, you agree to ReviewMe’s
            <h6> User Agreement, Privacy Policy</h6>, and
            <h6>Cookie Policy</h6>.
          </div>
          <div className="child">
            <button type="submit">Submit & Join</button>
          </div>
          <div className="child_box">
            <button
              className="join_now"
              onClick={() => {
                navigate("/employlogin");
              }}
            >
              Already On ReviewMe? <h6> Login </h6>
            </button>
          </div>
        </form>
      </div>
      <div className="footer_end">
        <button
          onClick={() => {
            navigate("/employersign");
          }}
        >
          <p>Looking to create a page for Bussiness? </p>
          <h5>Get Help</h5>
        </button>
      </div>
    </Root>
  );
}
const Root = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f8ff;
  padding: 20px;
  .header {
    h2 {
      margin: 5px;
      padding: 5px;
      font-weight: 500;
      color: #000000e6;
    }
  }
  .mainbodyy {
    background-color: #ffffff;
    border-radius: 10px;
    form {
      display: flex;
      padding: 20px 0px;
      flex-direction: column;
      align-items: center;
      .child {
        padding: 5px;
        display: flex;
        width: 63%;
        flex-direction: column;
        p {
          font-family: "Google Sans", arial, sans-serif;
          letter-spacing: 0.25px;
          color: #3c4043;
          font-size: 14px;
          font-weight: 600;
          font: 16px;
          padding: 5px 0px;
        }
        /* align-items: center; */
        input {
          border-radius: 3px;
          padding: 10px;
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
        display: flex;
        width: 63%;
        flex-direction: column;
        p {
          font-family: "Google Sans", arial, sans-serif;
          letter-spacing: 0.25px;
          color: #3c4043;
          font-size: 14px;
          font-weight: 600;
          font: 16px;
          padding: 5px 0px;
        }
        .child1 {
          padding: 0px 10px;
          display: flex;
          border: 1px solid black;
          border-radius: 3px;
          justify-content: space-between;
          gap: 5px;
          background-color: #ffffff;
          input {
            padding: 10px;
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
      .policy_box {
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
        font-size: 12px;
        width: 60%;
        margin: 0;
        color: #00000099;
        h6 {
          font-size: 12px;
          margin: 0;
          color: #0a66c2;
        }
        @media (max-width: 789px) {
          width: 98%;
        }
      }
      .child_box {
        .join_now {
          gap: 5px;
          display: flex;
          box-shadow: 0 0 0 1px var(--color-button-container-secondary-border);
          background-color: var(--color-button-container-secondary);
          color: #000000bf;
          border: none;
          padding: 10px;
          height: 48px;
          text-align: center;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.25;

          @media (max-width: 789px) {
            width: 98%;
          }
        }
        h6 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.25;
          color: #0a66c2;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
  .footer_end {
    display: flex;
    padding: 10px;
    button {
      border: none;
      display: flex;
      font-size: 15px;
      gap: 5px;
      font-weight: 600;
      color: #000000bf;
      background: transparent;
      h5 {
        font-size: 15px;
        font-weight: 600;
        margin: 0;
        color: navy;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
