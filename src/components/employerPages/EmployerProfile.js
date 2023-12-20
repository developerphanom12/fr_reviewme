import React from "react";
import "./employerprofile.scss" ;
import background from "../../components/images/profileeee.avif";
import { IoCameraOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import backimg from "../../components/images/bannerbackground.jpg";
import { useNavigate } from "react-router-dom";

export default function EmployerProfile() {
  const navigate = useNavigate();

  return (
     <div className="root_div1">
      <div className="main11">
        <div className="profile1">
          <div className="bg_img1">
            <img src={backimg} alt="img" />

            <IoCameraOutline />
          </div>
          <div className="imgg1">
            <img src={background} alt="img" />{" "}
          </div>
          <div className="bio1">
            <div className="bio_btn_div1">
              <button
                className="bio_button1"
                onClick={() => {
                  navigate("/employerview");
                }}
              >
                View details
              </button>
              <button
                onClick={() => {
                  navigate("/ereditintro");
                }}
              >
                <CiEdit />
              </button>
            </div>
          </div>
        </div>
        <div className="bio_21">
          <div className="bio_name1"><h2>Swati Thakur</h2></div>
          <div className="connection1"> connection </div>
          <div className="items1"> my items </div>
        </div>
      </div>
      <div className="main21">suggestions</div>
    </div>
     
  );
}
 
