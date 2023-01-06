import React from "react";
import { useLevel } from "../context/LevelContext";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import Summary from "./Summary";
import Thankyou from "./Thankyou";

export default function FormBar() {
  const { currentLevel, isComplete } = useLevel();
  return isComplete ? (
    <form>
      <Thankyou />
    </form>
  ) : (
    <form>
      {currentLevel === 1 ? (
        <PersonalInfo />
      ) : currentLevel === 2 ? (
        <SelectPlan />
      ) : currentLevel === 3 ? (
        <AddOns />
      ) : (
        <Summary />
      )}
    </form>
  );
}
