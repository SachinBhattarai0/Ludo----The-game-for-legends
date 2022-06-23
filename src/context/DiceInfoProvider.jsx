import React, { useContext, createContext, useState } from "react";

const DiceInfo = createContext();

const DiceInfoProvider = ({ children }) => {
  const [disableDice, setdisableDice] = useState(true);
  const [animate, setAnimate] = useState(false);

  const animateDice = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
  };

  const EnableOrDisableDice = (value = true) => setdisableDice(value);

  return (
    <DiceInfo.Provider
      value={{
        EnableOrDisableDice,
        disableDice,
        setdisableDice,
        animateDice,
        animate,
      }}
    >
      {children}
    </DiceInfo.Provider>
  );
};

export const useDiceInfo = () => useContext(DiceInfo);
export default DiceInfoProvider;
