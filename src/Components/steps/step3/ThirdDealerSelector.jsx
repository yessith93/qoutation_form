import { useMemo,useCallback } from "react";
import Dropdown from "../../General_components/Dropdown";
import { useDealers } from '../../../hooks';

const ThirdDealerSelector = ({  previouslySelectedOption,updateSelectedDealer,selectedDealer }) => {
    const dealers = useDealers();

    const labelDealerText = useMemo(() => 
        selectedDealer.district?.name && selectedDealer.district.name !== "Seleccionar Comuna" 
          ? `Selecciona Concesionario de ${selectedDealer.district.name}` 
          : "Selecciona Concesionario", 
        [selectedDealer.district?.name]
      );

    const filteredDealers = useMemo(() => dealers[selectedDealer?.district?.id] ?? [], [selectedDealer.district?.id, dealers]);

    const onChangeDealer = useCallback((option) => {
        if (option?.id && filteredDealers.some(d => d.id === option.id)&& selectedDealer.dealer.id !== option.id) {
          updateSelectedDealer('dealer', option);
        }
      }, [filteredDealers,selectedDealer.dealer.id]);
    
    return (
        <Dropdown 
            label_text={labelDealerText} 
            options={filteredDealers} 
            onChange={onChangeDealer} 
            previouslySelectedOption={previouslySelectedOption}
      />
    );
};
export default ThirdDealerSelector;