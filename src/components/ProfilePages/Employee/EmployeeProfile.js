import React from "react";
import background from "../../images/images.jpeg";
import "./EmployeeProfile.scss";
import { IoCameraOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function EmployeeProfile() {
  const navigate = useNavigate();
  return (
    <div className="root_div">
      <div className="main1">
        <div className="profile">
          <div className="bg_img">
            background image
            <IoCameraOutline />
          </div>
          <div className="imgg">
            <img src={background} alt="img" />{" "}
          </div>
          <div className="bio">
            Name
            <button onClick={()=>{navigate("/editintro")}}>
              <CiEdit />
            </button>
          </div>
          <div className="connection"> connection </div>
          <div className="items"> my items </div>
        </div>
        <div>Discover more</div>
      </div>
      <div className="main2">22</div>
    </div>
  );
}
