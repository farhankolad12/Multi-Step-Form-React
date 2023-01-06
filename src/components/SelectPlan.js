import React from "react";
import arcade from "../assets/icon-arcade.svg";
import advance from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";
import { useLevel } from "../context/LevelContext";
import ButtonSection from "./ButtonSection";
import ToggleDuration from "./ToggleDuration";

export default function SelectPlan() {
  const { plan, setPlan, duration } = useLevel();

  return (
    <>
      <div className="form-con">
        <h1>Select your plan</h1>
        <p>You have the option of monthly and yearly billing</p>

        <div
          className="select-plan"
          defaultValue={plan.plan}
          onChange={(e) => setPlan(JSON.parse(e.target.value))}
        >
          <input
            checked={plan.plan === "Arcade"}
            type="radio"
            value={'{"id": 1, "plan": "Arcade", "price": 9}'}
            name="plan"
            id="arcade-plan"
          />
          <label htmlFor="arcade-plan">
            <img src={arcade} alt="ICON" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem",
              }}
            >
              <h3>Arcade</h3>
              <small>{duration ? "$90/yr" : "$9/mo"}</small>
              {duration && <span>2 months free</span>}
            </div>
          </label>

          <input
            checked={plan.plan === "Advance"}
            type="radio"
            value={'{"id": 2, "plan": "Advance", "price":12}'}
            name="plan"
            id="advanced-plan"
          />
          <label htmlFor="advanced-plan">
            <img src={advance} alt="ICON" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem",
              }}
            >
              <h3>Advanced</h3>
              <small>{duration ? "$120/yr" : "$9/mo"}</small>
              {duration && <span>2 months free</span>}
            </div>
          </label>

          <input
            checked={plan.plan === "Pro"}
            type="radio"
            value={'{"id": 3, "plan": "Pro", "price": 15}'}
            name="plan"
            id="pro-plan"
          />
          <label htmlFor="pro-plan">
            <img src={pro} alt="ICON" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem",
              }}
            >
              <h3>Pro</h3>
              <small>{duration ? "$150/yr" : "$15/mo"}</small>
              {duration && <span>2 months free</span>}
            </div>
          </label>
        </div>

        <ToggleDuration />
      </div>
      <ButtonSection />
    </>
  );
}
