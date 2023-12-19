import React, { useEffect, useState } from "react";
import "./employeeview.scss";
import axios from "axios";
import { EXCHANGE_URLS_EMPLOYEE } from "../../URLS";
import dummy from "../../images/resize-image.png"

export default function EmployeeView() {
  const [empView, setEmpView] = useState({});

  const EmployeeViewApi = async () => {
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
        setEmpView(res?.data?.data[0]);
        console.log("res", res);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    EmployeeViewApi();
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div className="emp_view_root">
      <div className="profile_div">
       <button onClick={handleGoBack}>Go Back</button>
        <img src={dummy} alt="img" />
        <div className="profile_child">
          <h3>
            {empView?.first_name}
            {empView?.last_name}
          </h3>
        </div>
        <div className="profile_child">
          <h5>Email</h5>
          <p>{empView?.email}</p>
        </div>
        <div className="profile_child">
          <h5>Gender</h5>
          <p>{empView?.gender}</p>
        </div>
      </div>

      <div className="company_div">
        <div className="company_child">
          {" "}
          <h5>Employment Type</h5>
          <p>{empView?.company?.employment_type}</p>
        </div>
        <div className="company_child">
          {" "}
          <h5>Experience</h5>
          <p>{empView?.company?.exprience}</p>
        </div>
        <div className="company_child">
          {" "}
          <h5>Location</h5>
          <p>{empView?.company?.location}</p>
        </div>
        <div className="company_child">
          {" "}
          <h5>Location Type</h5>
          <p>{empView?.company?.location_type}</p>
        </div>
        <div className="company_child">
          {" "}
          <h5>Start Date</h5>
          <p>{empView?.company?.start_date}</p>
        </div>
        <div className="company_child">
          {" "}
          <h5>End Date</h5>
          <p>{empView?.company?.end_date}</p>
        </div>
        <div className="company_child">
          {" "}
          <h5>Description</h5>
          <p>{empView?.company?.description}</p>
        </div>
      </div>

      <div className="education_div">
        <div className="education_child">
          {" "}
          <h5>School</h5>
          <p>{empView?.education?.school}</p>
        </div>
        <div className="education_child">
          {" "}
          <h5>Degree</h5>
          <p>{empView?.education?.degree}</p>
        </div>
        <div className="education_child">
          {" "}
          <h5>Grade</h5>
          <p>
            {empView?.education?.grade}
            {empView?.education?.typeof_grade}
          </p>
        </div>
        <div className="education_child">
          {" "}
          <h5>Start Date</h5>
          <p>{empView?.education?.start_date}</p>
        </div>
        <div className="education_child">
          {" "}
          <h5>End Date</h5>
          <p>{empView?.education?.end_date}</p>
        </div>
      </div>
    </div>
  );
}
