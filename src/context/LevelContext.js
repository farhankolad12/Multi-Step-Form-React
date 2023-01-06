import React, { useContext, useState } from "react";

const LevelProvider = React.createContext();

export function useLevel() {
  return useContext(LevelProvider);
}

export default function LevelContext({ children }) {
  const [isComplete, setIsComplete] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState({ id: 1, plan: "Arcade", price: 9 });
  const [duration, setDuration] = useState(false);
  const [extra, setExtra] = useState([]);

  const data = {
    name,
    email,
    phone,
    plan,
    duration,
    extra,
  };

  const value = {
    currentLevel,
    setCurrentLevel,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    plan,
    setPlan,
    duration,
    setDuration,
    extra,
    setExtra,
    data,
    isComplete,
    setIsComplete,
  };

  return (
    <LevelProvider.Provider value={value}>{children}</LevelProvider.Provider>
  );
}
