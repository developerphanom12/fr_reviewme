import React from "react";
import "./editintro.scss";
import { useNavigate } from "react-router-dom";

export default function EditIntro() {
  const navigate = useNavigate();
  return (
    <div className="edit_emplyee">
      <h6>* Indicates Required</h6>

      <div className="input_div">
        <span>First Name*</span>
        <input type="name" />
      </div>
      <div className="input_div">
        <span>Last Name*</span>
        <input />
      </div>
      <div className="input_div">
        <span>Additional Name</span>
        <input />
      </div>
      <div className="input_div">
        <h6>Headline*</h6>
        <input />
      </div>
      <div className="input_div">
        <h5>Current Position</h5>
        <span>Position*</span>
        <select>
          <option>Select Position</option>
        </select>
        <button onClick={()=>{navigate("/expemployee")}}>
          <h4>+ Add New Position</h4>
        </button>
      </div>
      <div>Tickbox show current company in my bio</div>
      <div className="input_div">
        <h6>Industry*</h6>
        <input placeholder="marketing" />
        <button>
          <h5>Learn more about industry options</h5>
        </button>
      </div>
      <div className="input_div">
        <h4>Education</h4>
        <button>
          <h5>+Add More Education</h5>
        </button>
      </div>
      <div>
        <div className="input_div">
          <h4>Location</h4>
          <span>Country/Region*</span>
          <input placeholder="country" />
        </div>
        <div className="input_div">
          <span>City</span>
          <input placeholder="city" />
        </div>
      </div>
      <div className="input_div">
        <h4>Contact Info</h4>
        <h5>Add or edit your profile URL, email, and more</h5>
        <button>Edit Contact Info</button>
      </div>
      <div>
        <button>Save</button>
      </div>
    </div>
  );
}
