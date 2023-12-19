import React from "react";
import backimg from "../../components/images/bannerbackground.jpg";
import "./EmployeeProfile.scss";
import background from "../../components/images/profileeee.avif";
import { IoCameraOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function EmployeeProfile() {
  const navigate = useNavigate();
  return (
    <div className="root_div">
      <div className="first_main_div">
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
            <div className="bio_name">
              <h2>Srishti</h2>
            </div>
            <div className="connection">
              {" "}
              Founder & CEO at Phanom Professionals{" "}
            </div>
            <div className="items">
              {" "}
              <button>Follow</button> <button>Message</button>{" "}
              <button>More</button>
            </div>
          </div>
        </div>
        <div className="about">
          <h1>About</h1>
          <p>
          Marketing & Branding Professional with 7 years of expertise establishing brands, driving growth, and generating income. Offer exceptional value by combining senior-level experience with extensive knowledge of technology product development, designing and digital marketing, as well as a master's degree in Marketing Research management from Panjab University in 2013.
          </p>
        </div>
      </div>

      <div className="main2">
        <div className="main2_child">
          <h6>Ad...</h6>
          <p>company image</p>
          <button>Follow</button>
        </div>
        <div className="main2_child">
          <div className="main2_child2">
            <h6> People also viewed</h6>
            <p>Profile image | person name</p>
            <button>+ Follow</button>
          </div>
          <div className="main2_child2">
            <h6> People also viewed</h6>
            <p>Profile image | person name</p>
            <button>+ Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
}
