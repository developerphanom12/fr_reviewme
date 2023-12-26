import React, { useEffect, useState } from "react";
import backimg from "../../components/images/bannerbackground.jpg";
import "./EmployeeProfile.scss";
import background from "../../components/images/profileeee.avif";
import { IoCameraOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { FiSend } from "react-icons/fi";
import Experience from "./getDetails/Experience";
import axios from "axios";
import { EXCHANGE_URLS_EMPLOYEE } from "../URLS";
import Education from "./getDetails/Education";

export default function EmployeeProfile() {
  const navigate = useNavigate();
  const [exp, setExp] = useState({});

  const ExperienceApi = async () => {
    const axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.get(
        `${EXCHANGE_URLS_EMPLOYEE}/getdetailprofile/`,
        axiosConfig
      );
      if (res?.status === 201) {
        setExp(res?.data?.data[0]);
        console.log("res", res);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    ExperienceApi();
  }, []);
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
             <div className="title">
             <h2>
                {exp?.first_name} {exp?.last_name} 
              </h2><p>({exp?.gender})</p>
             </div>
                <p>{exp.email}</p> <p>{exp.phone_number}</p>
            </div>
            <div className="connection">
              <h4>{exp?.company?.description}</h4>
            </div>
            <div className="items">
              {" "}
              <button> + Follow</button>{" "}
              <button className="msg">
                <FiSend /> Message
              </button>{" "}
              <button>More</button>
            </div>
          </div>
        </div>
        <div className="about">
          <h1>About</h1>
          <p>
            Marketing & Branding Professional with 7 years of expertise
            establishing brands, driving growth, and generating income. Offer
            exceptional value by combining senior-level experience with
            extensive knowledge of technology product development, designing and
            digital marketing, as well as a master's degree in Marketing
            Research management from Panjab University in 2013.
          </p>
        </div>
        <div className="about">
          <Experience
           detail={exp} 
          /> 
        </div>
        <div className="about">
          <Education  detail={exp} />
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
