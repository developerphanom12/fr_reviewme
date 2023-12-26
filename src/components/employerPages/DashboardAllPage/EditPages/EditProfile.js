import React from "react";
import styled from "styled-components";
import profilePic from "../../../images/editprofilepic.jpeg";
import * as yup from "yup";
import cogoToast from "cogo-toast";
import axios from "axios";
import { EXCHANGE_URLS_EMPLOYER } from "../../../URLS";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  company_name: yup.string().required(),
  company_website: yup.string().required(),
  tagline: yup.string(),
  description: yup.string().required(),
  sales_email: yup.string().email().required(),
  contact_phone: yup.number().required(),
  total_employe: yup.number().required(),
  founded_year: yup.string().required(),
});
export default function EditProfile() {
  const onSubmit = async (data) => {
    const axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const res = await axios.post(
        `${EXCHANGE_URLS_EMPLOYER}/addprofile`,
        data,
        axiosConfig
      );
      console.log("resres", res?.data?.data);
      if (res?.status === 201) {
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
        <div className="parent1">
          <h3>Company Information</h3>
          <div className="profile_child1">
            <div className="profile_child1_minii">
              <p>Company Name</p>
              <input type="text" {...register("company_name")} />
              {errors.company_name && <p>{errors.company_name.message}</p>}
            </div>
            <div className="profile_child1_minii">
              <p>Company website</p>
              <input type="text" {...register("company_website")} />
              {errors.company_website && (
                <p>{errors.company_website.message}</p>
              )}
            </div>
          </div>
          <div className="profile_child2">
            <div className="profile_child2_minii">
              <p> Total Employees </p>
              <input type="number" {...register("total_employe")} />
              {errors.total_employe && <p>{errors.total_employe.message}</p>}
            </div>
            <div className="profile_child2_minii">
              <p> Founding Year </p>
              <input
                type="date"
                {...register("founded_year")}
                pattern="\d{4}/\d{2}/\d{2}"
              />
              {errors.founded_year && <p>{errors.founded_year.message}</p>}
            </div>
          </div>
          <div className="profile_child1">
            <div className="profile_child1_minii">
              <p>Tagline</p>
              <input type="text" {...register("tagline")} />
              {errors.tagline && <p>{errors.tagline.message}</p>}
            </div>
            <div className="profile_child1_minii">
              <p>Description</p>
              <input type="text" {...register("description")} />
              {errors.description && <p>{errors.description.message}</p>}
            </div>
          </div>
        </div>
        <div className="parent2">
          <p>Company Logo</p>
          <img src={profilePic} alt="img" />
          <div className="parent2_child1">
            <p>Admin Contact Phone</p>
            <input type="number" {...register("contact_phone")} />
            {errors.contact_phone && <p>{errors.contact_phone.message}</p>}
          </div>
          <div className="parent2_child1">
            <p>Sales Email</p>
            <input type="text" {...register("sales_email")} />
            {errors.sales_email && <p>{errors.sales_email.message}</p>}
            <button type="submit">done</button>
          </div>
        </div>
      </form>
    </Root>
  );
}
const Root = styled.section`
  form {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 10px;
    background-color: white;
    margin: 10px;
    flex-wrap: wrap;
  }
  .parent1 {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 50%;
    h3 {
      color: #077beb;
      margin: 5px 0px;
    }
    .profile_child1 {
      display: flex;
      flex-direction: column;
      .profile_child1_minii {
        padding: 5px;
        p {
          padding: 5px;
          color: black;
        }
        input {
          padding: 5px;
          width: 100%;
        }
      }
    }
    .profile_child2 {
      display: flex;
      flex-direction: column;
      .profile_child2_minii {
        padding: 5px;
        p {
          padding: 5px;
          color: black;
        }

        input {
          padding: 5px;
          width: 100%;
        }
      }
    }
  }
  .parent2 {
    width: 50%;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 10px;
    p {
      padding: 5px;
      color: #3b3939;
      font-weight: 600;
    }
    img {
      width: 150px;
      height: 150px;
      padding: 10px;
    }
    .parent2_child1 {
      padding: 5px;
      p {
        padding: 5px;
        color: black;
        font-weight: 400;
      }
      input {
        padding: 5px;
        width: 100%;
      }
    }
  }
`;
