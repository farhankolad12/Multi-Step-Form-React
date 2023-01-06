import React from "react";
import Step from "./Step";

export default function ProgressBar() {
  return (
    <>
      <div className="progress-bar-desktop">
        <Step num={1} text="your info" />
        <Step num={2} text="select plan" />
        <Step num={3} text="add-ons" />
        <Step num={4} text="summary" />
      </div>
      <div className="progress-bar-mobile">
        <Step num={1} text="your info" />
        <Step num={2} text="select plan" />
        <Step num={3} text="add-ons" />
        <Step num={4} text="summary" />
      </div>
    </>
  );
}
