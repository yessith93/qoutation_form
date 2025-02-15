import React, { useEffect, useState } from 'react';
import ContainerBtn from '../General_components/ContainerBtn';
import FirstDealerSelector from './step3/FirstDealerSelector';
import SecondDealerSelector from './step3/SecondDealerSelector';
import StepHeader from '../General_components/StepHeader';
import ThirdDealerSelector from './step3/ThirdDealerSelector';
import { useQuote } from '../../hooks/UseQuote';


const Step3 = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedComuna, setSelectedComuna] = useState("");
  const [selectedConcesionario, setSelectedConcesionario] = useState("");
  const[disableNextButton, setDisableNextButton] = useState(true);
  const { updateQuoteData } = useQuote();
  useEffect(() => {
    if (selectedConcesionario) {
      if(JSON.stringify(selectedConcesionario) !== JSON.stringify({})) {
        updateQuoteData('concesionario', selectedConcesionario);
        setDisableNextButton(false);
      }
      else {
        setDisableNextButton(true);
      }
    }
  },[selectedConcesionario]);
  return (
    <div className="div-step step3">
      <StepHeader step={3} title="Escoge dónde quieres cotizar tu auto" />
      <FirstDealerSelector setSelectOption={setSelectedRegion} />
      <SecondDealerSelector selectedRegion={selectedRegion} setSelectOption={setSelectedComuna} />
      <ThirdDealerSelector selectedComuna={selectedComuna} setSelectOption={setSelectedConcesionario} />
      <ContainerBtn  disableNextButton={disableNextButton}/>
    </div>
  );
};

export default Step3;