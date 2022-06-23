import React, { useContext, createContext, useState } from "react";

const DiceActive = createContext();

const DiceActiveProvider = ({ children }) => {
  const [disableDice, setdisableDice] = useState(false);
  const EnableOrDisableDice = () => setdisableDice(!disableDice);
  // const EnableOrDisableDice = () => console.log("eod");

  return (
    <DiceActive.Provider
      value={{ EnableOrDisableDice, disableDice, setdisableDice }}
    >
      {children}
    </DiceActive.Provider>
  );
};

export const useDiceActive = () => useContext(DiceActive);
export default DiceActiveProvider;
