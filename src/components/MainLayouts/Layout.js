import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import PostNav from "./PostNav";
import Footer from "../CommonPages/Footer";
import { useSelector } from "react-redux";

export default function Layout({ children }) {
  const userCheck = useSelector((state) => state?.users?.userCheck);
  const token = localStorage.getItem("token");
  return (
    <Root>
      <div className="main_bar">
        { userCheck && token ? (
          <div className="nav_bar">
            <PostNav />
          </div>
        ) : (
          <div className="top_bar">
            <NavBar />
          </div>
        )}
      </div>
      <div className="main_body">{children}</div>
      {!userCheck && !token ? (
        <div>
          <Footer />
        </div>
      ) : (
        ""
      )}
    </Root>
  );
}
const Root = styled.section`
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 0;
  flex: 1;

  .main_bar {
    display: flex;
    flex-direction: column;
    /* flex: 1; */
    width: 100%;
    overflow: hidden;
    .top_bar {
      height: 70px;
    }
    .nav_bar {
      background: #ffffff;
      display: flex;
      height: 80px;
      width: 100%;
    }
    .main_body {
      height: 100%;
    }
  }
`;
