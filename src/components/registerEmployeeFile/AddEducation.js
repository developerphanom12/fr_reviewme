import React from "react";
import "./addeducation.scss";
import { IoCloseSharp } from "react-icons/io5";
import { EXCHANGE_URLS_EMPLOYEE } from "../URLS";
import cogoToast from "cogo-toast";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function AddEducation() {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    school: yup.string().required("School is required."),
    degree: yup.string().required("Degree is required."),
    start_date: yup
    .string()
    .required("Start Date is required.")
    .matches(
      /^\d{4}\/\d{2}\/\d{2}$/,
      "Invalid date format. Please use yyyy/mm/dd."
    ),
    end_date: yup
    .string()
    .required("End Date is required.")
    .matches(
      /^\d{4}\/\d{2}\/\d{2}$/,
      "Invalid date format. Please use yyyy/mm/dd."
    ),
    grade: yup.string().required("Grade is Required"),
    typeof_grade: yup.string().required("Select Percentage or CGPA"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const EducationApi = async (data) => {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.post(
        `${EXCHANGE_URLS_EMPLOYEE}/addeducationdates`,
        data,
        axiosConfig
      );
      console.log("resss", res?.data);
      if (res?.status === 201) {
        cogoToast.success("Added successfully");
        navigate("/employeeprofile");
        reset();
      }
    } catch (err) {
      console.log("err", err);
      cogoToast.error("An error occurred");
    }
  };

  const onSubmit = (data) => {
    EducationApi(data);
  };
  return (
    <div className="main_edit_employee">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="edit_emplyee">
          <div className="fixed_header">
            <h3>
              Add Education <IoCloseSharp />
            </h3>
          </div>
          <h6>* Indicates Required</h6>

          <div className="input_div">
            <span>School*</span>
            <input placeholder="Ex:DAV" type="school" {...register("school")} />
            {errors.school && <p>{errors.school.message}</p>}
          </div>
          <div className="input_div">
            <span>Degree*</span>
            <input
              type="degree"
              {...register("degree")}
              placeholder="Ex:Degree"
            />
            {errors.degree && <p>{errors.degree.message}</p>}
          </div>
          {/* <div className="input_div">
            <span>Field of study*</span>
            <input type="name" placeholder="Ex:Business" />
          </div> */}
          <div className="input_div">
            <span>Start date*</span>
            <div className="select_start_date">
            <input
            type="text"
            pattern="\d{4}/\d{2}/\d{2}"
            {...register("start_date")}
          />
              {errors.start_date && <p>{errors.start_date.message}</p>}
            </div>
          </div>
          <div className="input_div">
            <span>End date</span>
            <div className="select_end_date">
            <input
            type="text"
            pattern="\d{4}/\d{2}/\d{2}"
            {...register("end_date")}
          />
              {errors.end_date && <p>{errors.end_date.message}</p>}
            </div>
          </div>
          <div className="input_div">
            <span>Grade*</span>
            <input
              type="grade"
              {...register("grade")}
              placeholder="Ex:'percentage', 'cgpa'"
            />
            {errors.grade && <p>{errors.grade.message}</p>}
          </div>
          <div className="input_div">
            <span>Grade</span>
            <select
              {...register("typeof_grade")}
              value={register("typeof_grade").value}
              onChange={(e) => register("typeof_grade").onChange(e)}
            >
              <option value="">Type of grade</option>
              <option value="percentage">Percentage</option>
              <option value="cgpa">CGPA</option>
            </select>
            {errors.typeof_grade && <p>{errors.typeof_grade.message}</p>}
          </div>
          <div className="input_div">
            <span>Description*</span>
            <input type="name" />
          </div>
          <div>
            <button type="submit">save</button>
          </div>
        </div>
      </form>
    </div>
  );
}
