import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { EXCHANGE_URLS_EMPLOYER } from "../../../URLS";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import cogoToast from "cogo-toast";
import EditPoject from "./EditPoject";

const schema = yup.object().shape({
  time_zone: yup.string().required(),
  phone_number: yup.number().required(),
  address: yup.string().required(),
  total_employee: yup.number().required(),
  minimum_pojectsize: yup.number().required(),
  average_hourly: yup.number().required(),
});

export default function EditLocation() {
  const [apiResponse, setApiResponse] = useState(null);
  const onSubmit = async (data) => {
    const axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.post(
        `${EXCHANGE_URLS_EMPLOYER}/addAddress`,
        data,
        axiosConfig
      );
      console.log("resres", res?.data?.data);
      if (res?.status === 201) {
        setApiResponse(res.data.data);
        cogoToast.success("Enter Successfully");
      }
    } catch (err) {
      console.log("err", err);
      cogoToast.error("An error occurred during login");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <Root>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="location1">
          <h5>Locations</h5>
          <div className="location1_child1">
            <p>Time Zone Availability</p>
            <select
              {...register("time_zone")}
              value={register("time_zone").value}
              onChange={(e) => register("time_zone").onChange(e)}
              placeholder="Please Select"
            >
              <option>India</option>
              <option>India</option>
              <option>India</option>
              <option>India</option>
              <option>India</option>
              <option>India</option>
            </select>
          </div>
          <div className="location1_child2">
            <h4>Headquaters</h4>
            <p>Address</p>
            <input type="text" {...register("address")} />
            {errors.address && <p>{errors.address.message}</p>}
          </div>
          <div className="location1_child2">
            <p>Phone Number</p>
            <input type="text" {...register("phone_number")} />
            {errors.phone_number && <p>{errors.phone_number.message}</p>}
          </div>
          <div className="location1_child2">
            <p>Total Employees At This Location </p>
            <input type="number" {...register("total_employee")} />
            {errors.total_employee && <p>{errors.total_employee.message}</p>}
          </div>
        </div>
        <div className="location2">
          <h5>Additional location</h5>
          <div className="location2_child">
            <p>Address</p>
            <input />
          </div>{" "}
          <div className="location2_child">
            <p>Phone Number</p>
            <input />
          </div>
          <div className="location2_child">
            <p>Total Employees At This Location </p>
            <input />
          </div>
          <button type="submit">Next</button>
        </div>
        <div>
        <EditPoject detail={apiResponse} />
        </div>
      </form>
    </Root>
  );
}
const Root = styled.section`
  form {
    display: flex;
    background-color: white;
    margin: 10px;
    padding: 10px;
    width: 100%;
    flex-wrap: wrap;
  }
  .location1 {
    display: flex;
    flex: 1;
    width: 50%;
    flex-direction: column;
    h5 {
      color: #077beb;
      margin: 5px 0px;
    }
    .location1_child1 {
      padding: 5px;
      p {
        padding: 5px;
        color: black;
      }
      select {
        padding: 5px;
        width: 100%;
        color: dodgerblue;
      }
    }
    .location1_child2 {
      padding: 10px;
      h4 {
        margin: 4px 0px;
        color: #077beb;
        font-weight: 400;
      }
      p {
        padding: 5px;
        color: black;
      }
      input {
        padding: 5px;
        width: 100%;
        color: dodgerblue;
      }
    }
  }
  .location2 {
    display: flex;
    width: 50%;
    flex: 1;
    padding: 10px;
    flex-direction: column;
    h5 {
      color: #077beb;
      margin: 5px 10px;
    }
    .location2_child {
      padding: 10px;

      p {
        padding: 5px;
        color: black;
      }
      input {
        padding: 5px;
        width: 100%;
        color: dodgerblue;
      }
    }
  }
`;
