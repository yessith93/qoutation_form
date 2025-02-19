import React, { createContext, useState } from 'react';

export const QuoteContext = createContext();

// Provider component
export const QuoteProvider = ({ children }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [quoteData, setQuoteData] = useState({
    model: {},
    version: {},
    location: {},
    userInfo: {}
  });

  const updateQuoteData = (field, value) => {
    setQuoteData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const value = {
    quoteData,
    updateQuoteData,
    formSubmitted,
    setFormSubmitted
  };

  return (
    <QuoteContext.Provider value={value}>
      {children}
    </QuoteContext.Provider>
  );
};