import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function EmployeeSign() {
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("Text");
      return;
    }
    setPasswordType("password");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  const handleClick = () => {};
  return (
    <Root>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="header">
          <h3>Employee Sign-Up</h3>
        </div>
        <div className="bodyy">
          <div className="child">
            <p>
              <label htmlFor="email">Email or Phone Number</label>
            </p>
            <input
              type="email"
              placeholder="Enter Email or Phone No."
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid.",
                },
              })}
            />
            {errors.email && <p className="errorMsg">{errors.email.message}</p>}
          </div>
          <div className="child">
            <p>
              <label>Password(5+character)</label>
            </p>
            <input
              placeholder="Enter Password"
              onKeyDown={handleKeyDown}
              type={passwordType}
              name="password"
              {...register("password", {
                required: true,
                validate: {
                  checkLength: (value) => value.length >= 5,
                  matchPattern: (value) =>
                    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                      value
                    ),
                },
              })}
            />
            <button className="btn_outline_primary" onClick={togglePassword}>
              {passwordType === "password" ? (
                <i className="eye_slash">
                  <IoEyeOffSharp />
                </i>
              ) : (
                <i className="eye">
                  <IoEyeSharp />
                </i>
              )}
            </button>
            {errors.password?.type === "required" && (
              <p className="errorMsg">Password is required.</p>
            )}
            {errors.password?.type === "checkLength" && (
              <p className="errorMsg">
                Password should be at-least 5 characters.
              </p>
            )}
            {errors.password?.type === "matchPattern" && (
              <p className="errorMsg">
                Password should contain at least one uppercase letter, lowercase
                letter, digit, and special symbol.
              </p>
            )}
          </div>
        </div>
        <div className="child_box">
          <label></label>
          <button className="linked" type="submit">
            <p>Agree & Sign-up</p>
          </button>
        </div>
        <div className="child_box">
              <button className="join_now" 
              onClick={navigate('/employlogin')}
              >Already On  ReviewMe? Login now</button>
            </div>
            <div className="child_box">
              <button className="join_now" 
              onClick={navigate('/employerlogin')}
              >Looking to create a page for a business?Get Help</button>
            </div>
      </form>
    </Root>
  );
}
const Root = styled.section`
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;
