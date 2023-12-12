import React from "react";
import "./editintro.scss";
import { useNavigate } from "react-router-dom";
import { IoBackspace } from "react-icons/io5";

export default function EditIntro() {

  const navigate = useNavigate();

  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div className="main_edit_employee">
      <div className="edit_emplyee">
        <button  onClick={handleGoBack}><IoBackspace /></button>
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
          <button
            onClick={() => {
              navigate("/addnewpositon")
            }}
          >
            <h3>+ Add New Position </h3>
          
          </button>
        </div>
        <div>Tickbox show current company in my bio</div>
        <div className="input_div">
          <h6>Industry*</h6>
          <input placeholder="marketing" />
          <button>
            <h3>Learn more about industry options</h3>
          </button>
        </div>
        <div className="input_div">
          <h4>Education</h4>
          <button
           onClick={() => {
            navigate("/addeducation")
          }}
          >
            <h3>+Add More Education</h3>
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
          <button>
            <h3>Edit Contact Info</h3>
          </button>
        </div>
        <div className="save_button">
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}
