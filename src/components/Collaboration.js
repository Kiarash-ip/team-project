import React, { useEffect, useState } from "react";
import { validate, notify } from "../helper/functions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiUser } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import { BsCalendar2Date } from "react-icons/bs";
import { BsGenderAmbiguous } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Collaboration() {
  const [data, setData] = useState({
    fullName: "",
    phoneNumber: "",
    age: "",
    sex: "male",
    status: "married",
    location: "isfahan",
    description: "",
  });
  const [errors, setErrors] = useState({
    fullName: false,
    phoneNumber: false,
    age: false,
    description: false,
  });

  useEffect(() => {
    setErrors(validate(data));
    console.log(data);
  }, [data]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length) {
      notify("Fill out the form", "failed");
    } else {
      setData({
        fullName: "",
        phoneNumber: "",
        age: "",
        sex: "male",
        status: "married",
        location: "isfahan",
        description: "",
      });
      notify("Sent!", "success");
    }
  };

  return (
    <>
      <div className="collab">
        <div className="collab__header-container">
          <h2>همکاری با بوکینگو</h2>
        </div>
        <div className="collab__form-and-buttons-container">
          <form className="collab__form" onSubmit={submitHandler}>
            <div className="collab__items">
              <input
                dir="rtl"
                placeholder="تلفن همراه"
                className={
                  errors.phoneNumber ? "input__uncompleted" : "input__completed"
                }
                value={data.phoneNumber}
                type="tel"
                name="phoneNumber"
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
              <BsPhone />
            </div>
            <div className="collab__items">
              <input
                placeholder="نام و نام خانوادگی"
                className={
                  errors.fullName ? "input__uncompleted" : "input__completed"
                }
                value={data.fullName}
                dir="rtl"
                type="text"
                name="fullName"
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
              <BiUser />
            </div>
            <div className="collab__items">
              <select
                value={data.sex}
                name="sex"
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    [e.target.name]: e.target.value,
                  }))
                }
              >
                <option value="male">مرد</option>
                <option value="female">زن</option>
              </select>
              <BsGenderAmbiguous />
            </div>
            <div className="collab__items">
              <input
                placeholder="سن"
                className={
                  errors.age ? "input__uncompleted" : "input__completed"
                }
                value={data.age}
                dir="rtl"
                type="number"
                name="age"
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
              <BsCalendar2Date />
            </div>
            <div className="collab__items">
              <select
                value={data.status}
                name="status"
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    [e.target.name]: e.target.value,
                  }))
                }
              >
                <option value="single">مجرد</option>
                <option value="married">متاهل</option>
              </select>
            </div>
            <div className="collab__items">
              <select
                value={data.location}
                name="location"
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    [e.target.name]: e.target.value,
                  }))
                }
              >
                <option value="isfahan">اصفهان</option>
                <option value="tehran">تهران</option>
                <option value="mashhad">مشهد</option>
              </select>
              <HiOutlineLocationMarker />
            </div>
            <div className="collab__textArea">
              <textarea
                className={
                  errors.description
                    ? "textArea__uncompleted"
                    : "textArea__completed"
                }
                value={data.description}
                dir="rtl"
                name="description"
                placeholder="توضیحات و سابقه کار"
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </div>
          </form>
          <div className="collab__buttons">
            <button className="back">بازگشت به صفحه اصلی</button>
            <button className="send" type="submit" onClick={submitHandler}>
              ارسال
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
