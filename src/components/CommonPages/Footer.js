import React from "react";
import styled from "styled-components";
import { IoMdStarOutline } from "react-icons/io";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

export default function Footer() {
  return (
    <Root>
      <div className="header">
        <h2>
          {" "}
          <IoMdStarOutline />
          ReviewMe.
        </h2>
      </div>
      <div className="bodyy">
        <div className="child">
          <h1>About</h1>
          <p>About us</p>
          <p>Jobs</p>
          <p>Blogs</p>
          <p>Contact</p>
          <p>How ReviewMe Works</p>
          <p>Transparency Report</p>
          <p>Press</p>
          <p>Investor Relations</p>
        </div>
        <div className="child">
          <h1>Community</h1>
          <p>Trust in reviews</p>
          <p>Help center</p>
          <p>Log in</p>
          <p>Sign up</p>
          <p>chrome App</p>
        </div>
        <div className="child">
          <h1>Businesses</h1>
          <p>Business</p>
          <p>Products</p>
          <p>Plans & Pricing</p>
          <p>Business login</p>
          <p>Blog for Business</p>
        </div>
        <div className="child">
          <h1>Follow us on</h1>
          <p>
            <IoLogoFacebook />
          </p>
          <p>
            <IoLogoTwitter />
          </p>
          <p>
            <IoLogoInstagram />
          </p>
          <p>
            <IoLogoLinkedin />
          </p>
          <p>
            <IoLogoYoutube />
          </p>
        </div>
        <div className="child">
          <h1> Choose Country</h1>
          <select>
            <option>India</option>
            <option>UK</option>
            <option>Russia</option>
            <option>China</option>
          </select>
        </div>
      </div>
      <div className="footerr">
        <p>Leagal</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>Guidlines for Reviewers</p>
        <p>System status</p>
        <p>Cookie preferences</p>
        <p>Modern Slavery Statement</p>


      </div>
    </Root>
  );
}
const Root = styled.section`
  padding: 20px;
  .header {
    h2 {
      color: dodgerblue;
      margin: 10px;
      cursor: pointer;
      font-size: x-large;
      svg {
        width: 35px;
        height: 35px;
      }
    }
  }
  .bodyy {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    .child {
      flex-direction: column;
      P {
        font-size: 13px;
        padding: 10px;
        svg {
          width: 20px;
          height: 20px;
        }
      }
      select {
        width: 200px;
        border-radius: 10px;
        padding: 10px;
        background: transparent;
        -webkit-appearance: none;
        background-image: linear-gradient(45deg, transparent 50%, gray 50%),
          linear-gradient(135deg, gray 50%, transparent 50%),
          linear-gradient(to right, #ccc, #ccc);
        background-position: calc(100% - 20px) calc(1em + 2px),
          calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
        background-size: 5px 5px, 5px 5px, 1px 1.5em;
        background-repeat: no-repeat;
      }
    }
  }
  .footerr{
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    p{
        font-size: 14px;
    }
  }
`;
