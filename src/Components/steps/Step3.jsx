import React, { useEffect, useState,useMemo,useCallback } from 'react';
import { ContainerBtn, StepHeader,Dropdown } from '../General_components'; 
import { useQuote,useDealerFullData } from '../../hooks';

const isValidSelection = (item) => item && item.id && item.id !== "";

const Step3 = () => {
  const [selectedRegion, setSelectedRegion] = useState({id:"",name:""}); 
  const [selectedComuna, setSelectedComuna] = useState({id:"",name:""});
  const [selectedDealer, setSelectedDealer] = useState({id:"",name:""});
  const [selectedDealer2, setSelectedDealer2] = useState({
    region: { id: "", name: "Seleccionar Región" },
    comuna: { id: "", name: "Seleccionar Comuna" },
    dealer: { id: "", name: "Seleccionar Dealer" }
  });

  const [regions, districts, dealers] = useDealerFullData();
  
  const { updateQuoteData,quoteData } = useQuote();
  const { dealer } = quoteData;
  const { region, comuna } = dealer || { region: {}, comuna: {} };
  
  const labelDistrictText = selectedRegion.name ? `Selecciona Comuna de ${selectedRegion.name}` : "Selecciona Comuna";
  const labelDealerText = selectedComuna.name ? `Selecciona Concesionario de ${selectedComuna.name}` : "Selecciona Concesionario";

  // const filteredDistricts = useMemo(() => districts[selectedDealer?.region?.name] ?? [], [selectedDealer.region, districts]);
  const filteredDistricts = useMemo(() => districts[selectedRegion?.id] ?? [], [selectedRegion, districts]);
  // const filteredDealers = useMemo(() => dealers[selectedDealer?.comuna?.name] ?? [], [selectedDealer.comuna, dealers]);
  const filteredDealers = useMemo(() => dealers[selectedComuna?.id] ?? [], [selectedComuna, dealers]);
  
  const onChangeRegions = useCallback((option) => {
    if (option?.id && regions.some(r => r.id === option.id)) {
      setSelectedRegion(option);
      setSelectedComuna({ id: "", name: "" });

      setSelectedDealer2(prev => ({ 
        ...prev, 
        region: option, 
        comuna: { id: "", name: "" }, 
        dealer: { id: "", name: "" } 
      })); 
    }
  }, [setSelectedDealer,setSelectedRegion,selectedComuna]);
  
  const onChangeDistricts = useCallback((option) => {
    if (option?.id && filteredDistricts.some(d => d.id === option.id)) {
      setSelectedComuna(option);
      setSelectedDealer({ id: "", name: "" });//set next dropwdown to empty

      setSelectedDealer2(prev => ({ 
        ...prev, 
        comuna: option, 
        dealer: { id: "", name: "" } 
      }))
    }
  }, [filteredDistricts, setSelectedComuna,setSelectedDealer]);

  const onChangeDealer = useCallback((option) => {
    if (option?.id && filteredDealers.some(d => d.id === option.id)) {
      setSelectedDealer(option);

      setSelectedDealer2(prev => ({ ...prev, dealer: option }));
    }
  }, [filteredDealers, setSelectedDealer]);

  const updateDealer = () => {
    if (selectedDealer?.id && selectedRegion?.id && selectedComuna?.id) {
      const fullDealer =  { ...selectedDealer, region: selectedRegion, comuna: selectedComuna };
      updateQuoteData('dealer', fullDealer);
    }
  }
  
  return (
    <div className="div-step step3">
      <StepHeader step={3} title="Escoge dónde quieres cotizar tu auto" />
      <Dropdown 
          label_text="Selecciona Región" 
          options={regions} 
          onChange={onChangeRegions} 
          previouslySelectedOption={isValidSelection(region) ? region : null} 
      />
      <Dropdown 
        label_text={labelDistrictText} 
        options={filteredDistricts} 
        onChange={onChangeDistricts} 
        previouslySelectedOption={isValidSelection(comuna) ? comuna : null} 
      />
      <Dropdown 
        label_text={labelDealerText} 
        options={filteredDealers} 
        onChange={onChangeDealer} 
        previouslySelectedOption={isValidSelection(dealer) ? dealer : null}
      />
      <ContainerBtn  disableNextButton={!isValidSelection(selectedDealer)}  additionalFunction={updateDealer}/>
    </div>
  );
};

export default Step3;