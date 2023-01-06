import React from "react";
import { useLevel } from "../context/LevelContext";
import ButtonSection from "./ButtonSection";

export default function AddOns() {
  const { extra, setExtra } = useLevel();

  function handleChange(e) {
    const obj = JSON.parse(e.target.value);
    const alreadyInObj = extra.some((ex) => ex.id === obj.id);
    if (alreadyInObj)
      return setExtra((prev) =>
        prev.filter((ex) => {
          return ex.id !== obj.id;
        })
      );
    setExtra((prev) => [...prev, JSON.parse(e.target.value)]);
  }

  return (
    <>
      <div className="form-con">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>
        <div
          className="select-add-ons"
          onChange={handleChange}
          style={{ position: "relative" }}
        >
          <input
            name="add-ons"
            style={{
              position: "absolute",
              top: "2.3rem",
              marginLeft: "1rem",
            }}
            id="online-services"
            value={'{"id": 1, "name": "Online Service", "price": 1 }'}
            type="checkbox"
            checked={extra.some((ex) => ex.id === 1)}
          />
          <label htmlFor="online-services">
            <div className="inner">
              <div>
                <strong>Online Services</strong>
                <br />
                <span>Access to multiplayer games</span>
              </div>
            </div>
            <span>+$1/mo</span>
          </label>
          <input
            name="add-ons"
            style={{
              position: "absolute",
              top: "8.8rem",
              marginLeft: "1rem",
            }}
            id="extra-storage"
            value={'{"id": 2, "name": "Larger Storage", "price": 2 }'}
            checked={extra.some((ex) => ex.id === 2)}
            type="checkbox"
          />
          <label htmlFor="extra-storage">
            <div className="inner">
              <div>
                <strong>Extra Storage</strong>
                <br />
                <span>Extra 1TB of cloud save</span>
              </div>
            </div>
            <span>+$2/mo</span>
          </label>
          <input
            name="add-ons"
            style={{
              position: "absolute",
              top: "15.3rem",
              marginLeft: "1rem",
            }}
            id="customizable-profile"
            value={'{"id": 3, "name": "Customizable Profile", "price": 2 }'}
            checked={extra.some((ex) => ex.id === 3)}
            type="checkbox"
          />
          <label htmlFor="customizable-profile">
            <div className="inner">
              <div>
                <strong>Customizable Profile</strong>
                <br />
                <span>Custom theme on your profile</span>
              </div>
            </div>
            <span>+$2/mo</span>
          </label>
        </div>
      </div>
      <ButtonSection />
    </>
  );
}
