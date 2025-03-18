import React, { useEffect, useState,useMemo,useCallback } from 'react';
import { ContainerBtn, StepHeader,Dropdown } from '../General_components'; 
import { FirstDealerSelector, SecondDealerSelector, ThirdDealerSelector } from './step3';
import { useQuote } from '../../hooks';

const isValidSelection = (item) => !!item?.id;

const Step3 = () => { 
  const { updateQuoteData, quoteData: { dealer: dealerInfo } } = useQuote();
  const { region, district, dealer } = dealerInfo || { region: {}, district: {}, dealer: {} };

  const [selectedDealer, setSelectedDealer] = useState({
    region: { id: "", name: "Seleccionar Región" },
    district: { id: "", name: "Seleccionar Comuna" },
    dealer: { id: "", name: "Seleccionar Dealer" }
  });
  
  const updateSelectedDealer = useCallback((key, value) => {
    setSelectedDealer(prev => ({
      ...prev,
      [key]: value,
      ...(key === 'region' && { district: { id: "", name: "" }, dealer: { id: "", name: "" } }),
      ...(key === 'district' && { dealer: { id: "", name: "" } }),
    }));
  }, []);

  const updateDealer = useCallback(() => {
    if (selectedDealer.dealer?.id && selectedDealer.region?.id && selectedDealer.district?.id) {
      updateQuoteData('dealer', selectedDealer);
    }
  }, [selectedDealer, updateQuoteData]);
  
  const isNextButtonDisabled = useMemo(
    () => !isValidSelection(selectedDealer.dealer),
    [selectedDealer.dealer]
  );
  
  return (
    <div className="div-step step3">
      <StepHeader step={3} title="Escoge dónde quieres cotizar tu auto" />
      <FirstDealerSelector 
        updateSelectedDealer={updateSelectedDealer}
        selectedDealer={selectedDealer}
        previouslySelectedOption={isValidSelection(region) ? region : null} 
      />
      <SecondDealerSelector 
        selectedDealer={selectedDealer}
        updateSelectedDealer={updateSelectedDealer}
        previouslySelectedOption={isValidSelection(district) ? district : null}
      />
      <ThirdDealerSelector
        selectedDealer={selectedDealer}
        updateSelectedDealer={updateSelectedDealer}
        previouslySelectedOption={isValidSelection(dealer) ? dealer : null}
      />  
      <ContainerBtn  disableNextButton={isNextButtonDisabled}  additionalFunction={updateDealer}/>
    </div>
  );
};

export default Step3;