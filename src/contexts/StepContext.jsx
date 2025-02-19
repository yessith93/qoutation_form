import React, { createContext, useState, useContext } from 'react';

export const StepContext = createContext();

export const StepProvider = ({ children }) => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(prev => Math.min(prev + 1, 4));
  };

  const handlePreviousStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const value = {
    step,
    handleNextStep,
    handlePreviousStep
  };

  return (
    <StepContext.Provider value={value}>
      {children}
    </StepContext.Provider>
  );
};
