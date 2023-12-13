import React from "react";
import background from "../../images/profileeee.avif";
import backimg from "../../images/bannerbackground.jpg";
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
            <img src={backimg} alt="img" />

            <IoCameraOutline />
          </div>
          <div className="imgg">
            <img src={background} alt="img" />{" "}
          </div>
          <div className="bio">
            <div className="bio_btn_div">
              <button
                className="bio_button"
                onClick={() => {
                  navigate("/employeeview");
                }}
              >
                View details
              </button>
              <button
                onClick={() => {
                  navigate("/editintro");
                }}
              >
                <CiEdit />
              </button>
            </div>
          </div>
        </div>
        <div className="bio_2">
          <div className="bio_name"><h2>Srishti</h2></div>
          <div className="connection"> connection </div>
          <div className="items"> my items </div>
        </div>
      </div>
      <div className="main2">suggestions</div>
    </div>
  );
}
