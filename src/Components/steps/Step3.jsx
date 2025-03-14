import React, { useEffect, useState } from 'react';
import { ContainerBtn, StepHeader } from '../General_components'; 
import { FirstDealerSelector, SecondDealerSelector, ThirdDealerSelector } from './step3';
import { useQuote } from '../../hooks';

const Step3 = () => {
  const [selectedRegion, setSelectedRegion] = useState({id:"",name:""}); 
  const [selectedComuna, setSelectedComuna] = useState({id:"",name:""});
  const [selectedDealer, setSelectedDealer] = useState({id:"",name:""});
  const [disableNextButton, setDisableNextButton] = useState(true);

  const { updateQuoteData,quoteData } = useQuote();
  const { dealer } = quoteData;
  const { region, comuna } = dealer;

  const updateDealer = () => {
    const fullDealer =  { ...selectedDealer, region: selectedRegion, comuna: selectedComuna };
    updateQuoteData('dealer', fullDealer);
  }

  useEffect(() => {
    setDisableNextButton(selectedDealer.id === "");
  },[selectedDealer.id]);
  
  const isValidSelection = (item) => item && item.id && item.id !== "";
  
  return (
    <div className="div-step step3">
      <StepHeader step={3} title="Escoge dónde quieres cotizar tu auto" />
      <FirstDealerSelector 
        setSelectOption={setSelectedRegion} 
        previouslySelectedOption={isValidSelection(region) ? region : null}
      />
      <SecondDealerSelector 
        selectedRegion={selectedRegion} 
        setSelectOption={setSelectedComuna} 
        previouslySelectedOption={isValidSelection(comuna) ? comuna : null}
      />
      <ThirdDealerSelector 
        selectedComuna={selectedComuna} 
        setSelectOption={setSelectedDealer} 
        previouslySelectedOption={isValidSelection(dealer) ? dealer : null}
      />
      <ContainerBtn  disableNextButton={disableNextButton}  additionalFunction={updateDealer}/>
    </div>
  );
};

export default Step3;