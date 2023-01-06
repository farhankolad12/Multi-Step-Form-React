import React from "react";
import { useLevel } from "../context/LevelContext";

export default function Step({ num, text }) {
  const { currentLevel } = useLevel();
  return (
    <div className="steps">
      <div>
        <span
          className={`num-icon ${currentLevel === num ? "active-icon" : ""}`}
        >
          {num}
        </span>
      </div>
      <div className="step-info">
        <span className="step-num">STEP {num}</span>
        <span className="step-text">{text}</span>
      </div>
    </div>
  );
}
