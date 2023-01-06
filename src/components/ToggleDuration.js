import React from "react";
import { useLevel } from "../context/LevelContext";

export default function ToggleDuration() {
  const { setDuration, duration } = useLevel();
  return (
    <div
      className="toogle-plan"
      onChange={(e) => setDuration(e.target.checked)}
      defaultChecked={duration}
    >
      <h3 className={`${duration ? "active-duration" : ""}`}>Monthly</h3>
      <label className="switch">
        <input type="checkbox" checked={duration} />
        <span className="slider round"></span>
      </label>
      <h3 className={`${!duration ? "active-duration" : ""}`}>Yearly</h3>
    </div>
  );
}
