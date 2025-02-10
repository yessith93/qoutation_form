import React, { createContext, useContext, useState } from 'react';

export const QuoteContext = createContext();

// Provider component
export const QuoteProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [quoteData, setQuoteData] = useState({
    model: '',
    version: '',
    location: '',
    userInfo: {}
  });

  const handleNextStep = () => {
    setStep(prev => Math.min(prev + 1, 4));
  };

  const handlePreviousStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const updateQuoteData = (field, value) => {
    setQuoteData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const value = {
    step,
    quoteData,
    handleNextStep,
    handlePreviousStep,
    updateQuoteData
  };

  return (
    <QuoteContext.Provider value={value}>
      {children}
    </QuoteContext.Provider>
  );
};