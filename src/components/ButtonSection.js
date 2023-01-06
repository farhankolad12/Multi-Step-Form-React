import React from "react";
import { useLevel } from "../context/LevelContext";

export default function ButtonSection({ handleClick }) {
  const { currentLevel, setCurrentLevel } = useLevel();

  return (
    <div className="btn-section">
      {currentLevel > 1 ? (
        <button
          type="button"
          className="prev"
          onClick={() => setCurrentLevel((prev) => prev - 1)}
        >
          Go Back
        </button>
      ) : (
        <div> </div>
      )}
      <button
        type="button"
        onClick={
          handleClick ? handleClick : () => setCurrentLevel((prev) => prev + 1)
        }
        className={currentLevel === 4 ? "next confirm" : "next"}
      >
        {currentLevel === 4 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
}
