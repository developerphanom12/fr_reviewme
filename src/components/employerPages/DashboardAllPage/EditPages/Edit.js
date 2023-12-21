import React from "react";
import styled from "styled-components";
import EditProfile from "./EditProfile";
import EditLocation from "./EditLocation";
import EditPoject from "./EditPoject";

export default function Edit() {
  return (
    <Root>
      <div>
        <EditProfile />
      </div>
      <div>
        <EditLocation />
      </div>
      <div>
        <EditPoject />
      </div>
    </Root>
  );
}
const Root = styled.section`
width:100%;
background-color: #dcf1fbb8 ;
`;



