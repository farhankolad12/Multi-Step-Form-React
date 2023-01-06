import React from "react";
import { useLevel } from "../context/LevelContext";
import ButtonSection from "./ButtonSection";

export default function Summary() {
  const YEARLY = 10;

  const { data, setCurrentLevel, setIsComplete } = useLevel();

  const { extra, duration, plan } = data;

  const total = data.extra.reduce((prev, ex) => prev + ex.price, 0);
  const totalYr = total * YEARLY;

  return (
    <>
      <div className="form-con">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming</p>
        <div className="summary-con">
          <div className="summary-info">
            <div className="part-one">
              <div className="plan-price">
                <h3>
                  {plan.plan} ({duration ? "Yearly" : "Monthly"})
                </h3>
                <button onClick={() => setCurrentLevel(2)}>Change</button>
              </div>
              <strong>
                ${duration ? plan.price * YEARLY : plan.price}/
                {duration ? "yr" : "mo"}
              </strong>
            </div>
            <div className="part-two">
              {extra.map((ex) => {
                return (
                  <div className="extras" key={ex.id}>
                    <span className="name">{ex.name}</span>
                    <span>
                      +${duration ? ex.price * YEARLY : ex.price}/
                      {duration ? "yr" : "mo"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="total">
            <span className="name">
              Total (per {duration ? "year" : "month"})
            </span>
            <span className="total-price">
              ${duration ? plan.price * YEARLY + totalYr : plan.price + total}/
              {duration ? "yr" : "mo"}
            </span>
          </div>
        </div>
      </div>
      <ButtonSection handleClick={() => setIsComplete(true)} />
    </>
  );
}
