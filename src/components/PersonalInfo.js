import React, { useRef } from "react";
import { useLevel } from "../context/LevelContext";
import ButtonSection from "./ButtonSection";
import { validateEmail } from "../utils/validateEmail";

export default function PersonalInfo() {
  const { setCurrentLevel, name, setName, email, setEmail, phone, setPhone } =
    useLevel();

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  function handleClick() {
    if (name === "" && !validateEmail(email) && phone === "") {
      nameRef.current.parentElement.classList.add("error");
      emailRef.current.parentElement.classList.add("error");
      phoneRef.current.parentElement.classList.add("error");
      nameRef.current.parentElement.classList.remove("success");
      emailRef.current.parentElement.classList.remove("success");
      phoneRef.current.parentElement.classList.remove("success");
      return;
    } else if (name === "" && !validateEmail(email)) {
      nameRef.current.parentElement.classList.add("error");
      emailRef.current.parentElement.classList.add("error");
      nameRef.current.parentElement.classList.remove("success");
      emailRef.current.parentElement.classList.remove("success");
      return;
    } else if (name === "" && phone === "") {
      nameRef.current.parentElement.classList.add("error");
      phoneRef.current.parentElement.classList.add("error");
      nameRef.current.parentElement.classList.remove("success");
      phoneRef.current.parentElement.classList.remove("success");
      return;
    } else if (!validateEmail(email) && phone === "") {
      phoneRef.current.parentElement.classList.add("error");
      emailRef.current.parentElement.classList.add("error");
      phoneRef.current.parentElement.classList.remove("success");
      emailRef.current.parentElement.classList.remove("success");
      nameRef.current.parentElement.classList.add("success");
      nameRef.current.parentElement.classList.remove("error");
      return;
    } else if (name === "") {
      nameRef.current.parentElement.classList.add("error");
      nameRef.current.parentElement.classList.remove("success");
      phoneRef.current.parentElement.classList.add("success");
      emailRef.current.parentElement.classList.add("success");
      emailRef.current.parentElement.classList.remove("error");
      phoneRef.current.parentElement.classList.remove("error");
      return;
    } else if (!validateEmail(email)) {
      emailRef.current.parentElement.classList.add("error");
      emailRef.current.parentElement.classList.remove("success");
      return;
    } else if (phone === "") {
      phoneRef.current.parentElement.classList.add("error");
      phoneRef.current.parentElement.classList.remove("success");
      nameRef.current.parentElement.classList.add("success");
      emailRef.current.parentElement.classList.add("success");
      emailRef.current.parentElement.classList.remove("error");
      nameRef.current.parentElement.classList.remove("error");
      return;
    } else {
      nameRef.current.parentElement.classList.add("success");
      emailRef.current.parentElement.classList.add("success");
      phoneRef.current.parentElement.classList.add("success");
      nameRef.current.parentElement.classList.remove("error");
      emailRef.current.parentElement.classList.remove("error");
      phoneRef.current.parentElement.classList.remove("error");
    }

    setCurrentLevel((prev) => prev + 1);
  }

  return (
    <>
      <div className="form-con">
        <h1>Personal Info</h1>
        <p>Please provide your name, email, address, and phone number</p>
        <div className="personal-info">
          <div>
            <label htmlFor="full_name">Name</label>
            <input
              placeholder="e.g. Stephen King"
              type="text"
              id="full_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              ref={nameRef}
            />
            <small>This field is required</small>
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              placeholder="e.g. stephenking@lorem.com"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={emailRef}
            />
            <small>Invalid Email</small>
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              placeholder="e.g. +1 234 567 890"
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              ref={phoneRef}
            />
            <small>This field is required</small>
          </div>
        </div>
      </div>
      <ButtonSection handleClick={handleClick} />
    </>
  );
}
