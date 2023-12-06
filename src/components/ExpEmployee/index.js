import React from "react";
import "./index.module.scss";

export default function index() {
  return (
    <div>
      <h6>*Indicates Required</h6>
      <div>
        <span>
          Title*
        </span>
        <input placeholder="Ex:Sales Manager"/>
      </div>
      <div>
        <span>
          Employement Type*
        </span>
        <select>
          <option>Please Select</option>
          <option>Full Time</option>
          <option>Part Time</option>

        </select>
      </div>
      <div>
        <span>
          Company Name*
        </span>
        <input placeholder="Ex:Microsoft"/>
      </div>
      <div>
        <span>
          Location*
        </span>
        <input placeholder="Ex:London"/>
      </div>
    </div>
  );
}
