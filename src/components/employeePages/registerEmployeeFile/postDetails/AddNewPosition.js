import React from "react";
import "./addnewposition.scss";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { EXCHANGE_URLS_EMPLOYEE } from "../../URLS";
import axios from "axios";
import cogoToast from "cogo-toast";
import { IoBackspace } from "react-icons/io5";

export default function AddNewPosition() {
  const schema = yup.object().shape({
    title: yup.string().required("Fill title"),
    employment_type: yup
      .string()
      .required(),
    company_name: yup.string().required("Enter company name"),
    location: yup.string().required("enter location"),
    location_type: yup
      .string()
      .required(),
    exprience: yup
      .string()
      .required(),
    start_date: yup.string().required("Start Date is required."),
    end_date: yup.string().required("End Date is required."),
    description: yup.string().optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const CompanyApi = async (data) => {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.post(
        `${EXCHANGE_URLS_EMPLOYEE}/addcompexpreince`,
        data,
        axiosConfig
      );
      console.log("resscommms", res?.data);
      cogoToast.success("Added successfully");
      navigate("/employeeprofile");
      reset();
    } catch (err) {
      console.log("err", err);
      cogoToast.error("An error occurred");
    }
  };

  const onSubmit = (data) => {
    CompanyApi(data);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="mainaddnewposition">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="addnewposotion">
        <button  onClick={handleGoBack}><IoBackspace /></button>
          <div className="headingg">
            <h5>* Indicates Required</h5>
          </div>
          <div className="title_div">
            <span>Title*</span>
            <input
              placeholder="Ex:Sales Manager"
              type="title"
              {...register("title")}
            />
            {errors.title && <p>{errors.title.message}</p>}
          </div>
          <div className="title_div">
            <span>Employment type</span>
            <select
              {...register("employment_type")}
              value={register("employment_type").value}
              onChange={(e) => register("employment_type").onChange(e)}
              placeholder="Please Select"
            >
              <option value="" disabled>
                Please Select
              </option>
              <option value="fulltime">Full time</option>
              <option value="part_time">Part time</option>
              <option value="self_employe">Self-Employee</option>
              <option value="freelance">Freelance</option>
              <option value="internship">Internship</option>
              <option value="traineee">Trainee</option>
            </select>
            {errors.employment_type && <p>{errors.employment_type.message}</p>}
          </div>
          <div className="title_div">
            <span>Company name*</span>
            <input
              placeholder="Microsoft"
              type="company_name"
              {...register("company_name")}
            />
            {errors.company_name && <p>{errors.company_name.message}</p>}
          </div>
          <div className="title_div">
            <span>Location</span>
            <input
              placeholder="Ex:London"
              type="location"
              {...register("location")}
            />
            {errors.location && <p>{errors.location.message}</p>}
          </div>
          <div className="title_div">
            <span>Location type</span>
            <select
              {...register("location_type")}
              value={register("location_type").value}
              onChange={(e) => register("location_type").onChange(e)}
            >
              <option value="">Type of Location</option>
              <option value="on_site">On-Site</option>
              <option value="hybrid">Hybrid</option>
              <option value="remote">Remote</option>
            </select>
            <p>Pick a location type (ex:remote) </p>
          </div>
          <div className="title_div">
            <h4>tickbox i am currently working in this role</h4>
          </div>
          <div className="title_div">
            <span>Start date*</span>
            <div className="select_start_date">
              <input
                type="date"
                pattern="\d{2}/\d{2}/\d{4}"
                {...register("start_date")}
              />
              {errors.start_date && <p>{errors.start_date.message}</p>}
            </div>
          </div>
          <div className="title_div">
            <span>End date</span>
            <div className="select_end_date">
              <input
                type="date"
                pattern="\d{4}/\d{2}/\d{2}"
                {...register("end_date")}
              />
              {errors.end_date && <p>{errors.end_date.message}</p>}
            </div>
          </div>
          <div className="title_div">
            tickbox<span>End current position as...</span>
          </div>
          <div className="title_div">
            <span>Experience*</span>
            <select
              {...register("exprience")}
              value={register("exprience").value}
              onChange={(e) => register("exprience").onChange(e)}
            >
              <option value="" disabled>Please Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              
            </select>
          </div>
          <div className="title_div">
            <span>Description</span>
            <input
              placeholder="(optional)"
              type="description"
              {...register("description")}
            />
            {errors.description && <p>{errors.description.message}</p>}
          </div>
          

          <div className="save_button">
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}
