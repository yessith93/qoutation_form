import React, { useEffect, useState,useMemo,useCallback } from 'react';
import { ContainerBtn, StepHeader,Dropdown } from '../General_components'; 
import { useQuote,useDealerFullData } from '../../hooks';

const isValidSelection = (item) => !!item?.id;

const Step3 = () => { 
  const [regions, districts, dealers] = useDealerFullData();
  const { updateQuoteData, quoteData: { dealer: dealerInfo } } = useQuote();
  const { region, district, dealer } = dealerInfo || { region: {}, district: {}, dealer: {} };

  const [selectedDealer, setSelectedDealer] = useState({
    region: { id: "", name: "Seleccionar Región" },
    district: { id: "", name: "Seleccionar Comuna" },
    dealer: { id: "", name: "Seleccionar Dealer" }
  });

  const labelDistrictText = useMemo(() => 
    selectedDealer.region?.name && selectedDealer.region.name !== "Seleccionar Región" 
      ? `Selecciona Comuna de ${selectedDealer.region.name}` 
      : "Selecciona Comuna", 
    [selectedDealer.region?.name]
  );
  
  const labelDealerText = useMemo(() => 
    selectedDealer.district?.name && selectedDealer.district.name !== "Seleccionar Comuna" 
      ? `Selecciona Concesionario de ${selectedDealer.district.name}` 
      : "Selecciona Concesionario", 
    [selectedDealer.district?.name]
  );
  //filter the next dropdowns
  const filteredDistricts = useMemo(() => districts[selectedDealer.region?.id] ?? [], [selectedDealer.region, districts]);
  const filteredDealers = useMemo(() => dealers[selectedDealer?.district?.id] ?? [], [selectedDealer.district, dealers]);
  
  const onChangeRegions = useCallback((option) => {
    if (option?.id && regions.some(r => r.id === option.id)&& selectedDealer.region.id !== option.id) {
      setSelectedDealer(prev => ({ 
        ...prev, 
        region: option, 
        district: { id: "", name: "" }, //empty the next dropdown
        dealer: { id: "", name: "" } 
      })); 
    }
  }, [regions,selectedDealer.region.id]);
  
  const onChangeDistricts = useCallback((option) => {
    if (option?.id && filteredDistricts.some(d => d.id === option.id) && selectedDealer.district.id !== option.id) {
      setSelectedDealer(prev => ({ 
        ...prev, 
        district: option, 
        dealer: { id: "", name: "" } 
      }))
    }
  }, [filteredDistricts,selectedDealer.district.id]);

  const onChangeDealer = useCallback((option) => {
    if (option?.id && filteredDealers.some(d => d.id === option.id)&& selectedDealer.dealer.id !== option.id) {
      setSelectedDealer(prev => ({ ...prev, dealer: option }));
    }
  }, [filteredDealers,selectedDealer.dealer.id]);

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
        previouslySelectedOption={isValidSelection(district) ? district : null} 
      />
      <Dropdown 
        label_text={labelDealerText} 
        options={filteredDealers} 
        onChange={onChangeDealer} 
        previouslySelectedOption={isValidSelection(dealer) ? dealer : null}
      />
      <ContainerBtn  disableNextButton={isNextButtonDisabled}  additionalFunction={updateDealer}/>
    </div>
  );
};

export default Step3;