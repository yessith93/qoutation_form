import React, { useEffect, useState } from 'react';
import ContainerBtn from '../General_components/ContainerBtn';
import FirstDealerSelector from './step3/FirstDealerSelector';
import SecondDealerSelector from './step3/SecondDealerSelector';
import StepHeader from '../General_components/StepHeader';
import ThirdDealerSelector from './step3/ThirdDealerSelector';
import { useQuote } from '../../hooks/UseQuote';

let SelectedRegionPreviousStep = null;
let SelectedComunaPreviousStep = null;
let SelectedConcesionarioPreviousStep = null;

const Step3 = () => {
  const [selectedRegion, setSelectedRegion] = useState({id:"",name:""}); 
  const [selectedComuna, setSelectedComuna] = useState({id:"",name:""});
  const [selectedDealer, setSelectedDealer] = useState({id:"",name:""});
  const[disableNextButton, setDisableNextButton] = useState(true);
  const { updateQuoteData,quoteData } = useQuote();
  const { concesionario } = quoteData;
  const { region, comuna } = concesionario;

  const updateDealer = () => {
    const fullDealer = {
      ...selectedDealer, 
      region: selectedRegion, 
      comuna: selectedComuna
    };
    updateQuoteData('concesionario', fullDealer);
  }

  useEffect(() => {
    if (selectedDealer) {
      if(JSON.stringify(selectedDealer) !== JSON.stringify({id:"",name:""})) {
        setDisableNextButton(false);
      }
      else 
        setDisableNextButton(true);
    }
  },[selectedDealer.id]);
  
  const isValidSelection = (item) => item && item.id && item.id !== "";

  if (isValidSelection(region)) {
    SelectedRegionPreviousStep = region;
  }
  if (isValidSelection(comuna)) {
    SelectedComunaPreviousStep = comuna;
  }
  if (isValidSelection(concesionario)) {
    SelectedConcesionarioPreviousStep = concesionario;
  }
  
  return (
    <div className="div-step step3">
      <StepHeader step={3} title="Escoge dónde quieres cotizar tu auto" />
      <FirstDealerSelector setSelectOption={setSelectedRegion} previouslySelectedOption={SelectedRegionPreviousStep? SelectedRegionPreviousStep : null} />
      <SecondDealerSelector selectedRegion={selectedRegion} setSelectOption={setSelectedComuna} previouslySelectedOption={SelectedComunaPreviousStep? SelectedComunaPreviousStep : null}/>
      <ThirdDealerSelector selectedComuna={selectedComuna} setSelectOption={setSelectedDealer} previouslySelectedOption={SelectedConcesionarioPreviousStep? SelectedConcesionarioPreviousStep : null} />
      <ContainerBtn  disableNextButton={disableNextButton}  additionalFunction={updateDealer}/>
    </div>
  );
};

export default Step3;