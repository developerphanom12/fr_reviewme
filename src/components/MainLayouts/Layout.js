import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Footer from "../CommonPages/Footer";

export default function Layout({ children }) {
  return (
    <Root>
      <div className="top_bar">
        <NavBar />
      </div>
      <div className="main_body">{children}</div>
      <div>

        <Footer />
      </div>
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
  .top_bar {
    height: 70px;
  }
  .main_body {
    height:100%;
  }
`;
