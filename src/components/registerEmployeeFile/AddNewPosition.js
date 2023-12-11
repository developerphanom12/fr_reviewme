import React from "react";
import "./addnewposition.scss";

export default function AddNewPosition() {
  return (
    <div className="mainaddnewposition">
    <div className="addnewposotion">
      <div className="headingg">
        <h5>* Indicates Required</h5>
      </div>
      <div className="title_div">
        <span>Title*</span>
        <input placeholder="Ex:Sales Manager" />
      </div>
      <div className="title_div">
        <span>Employment type</span>
        <select>
          <option>Please Select</option>
          <option>Full time</option>
          <option>Part time</option>
        </select>
      </div>
      <div className="title_div">
        <span>Company name*</span>
        <input placeholder="Ex:Microsoft" />
      </div>
      <div className="title_div">
        <span>Location</span>
        <input placeholder="Ex:London" />
      </div>
      <div className="title_div">
        <span>Location type</span>
        <select>
          <option>Please select</option>
          <option>On-site</option>
          <option>Hybride</option>
          <option>Remote</option>
        </select>
        <p>Pick a location type (ex:remote) </p>
      </div>
      <div className="title_div">
        <h4>tickbox i am currently working in this role</h4>
      </div>
      <div className="title_div">
        <span>Start date*</span>
        <div className="select_start_date">
          <select>
            <option>months</option>
          </select>
          <select>
            <option>year</option>
          </select>
        </div>
      </div>
      <div className="title_div">
        <span>End date*</span>
        <div className="select_end_date">
          <select>
            <option>months</option>
          </select>
          <select>
            <option>year</option>
          </select>
        </div>
      </div>
      <div className="title_div">
        tickbox<span>End current position as...</span>
      </div>
      <div className="title_div">
        <span>Industry*</span>
        <input placeholder="Ex:marketing" />
        <p>
          ReviewMe uses industry information to provide more relevant
          recommendations
        </p>
      </div>
      <div className="title_div">
        <span>Description</span>
        <input />
      </div>
      <div className="title_div">
        <span>Profile headline</span>
        <input />
        <p>Appears below your name at the top of the profile</p>
      </div>
      <div className="skills_section">
        <h4>Skills</h4>
        <p>
          We recommend adding your top 5 used in this role.they'll also appear
          in your Skills section
        </p>
        <button><h3>+ Add skill</h3></button>
        <p>****input opens here</p>
      </div>
      <div className="save_button">
        <button>Save</button>
      </div>
    </div>
    </div>
  );
}
