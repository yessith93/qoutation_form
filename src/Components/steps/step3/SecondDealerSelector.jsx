import { useMemo,useCallback} from "react";
import Dropdown from "../../General_components/Dropdown";
import { useDistricts } from '../../../hooks';

const SecondDealerSelector = ({  previouslySelectedOption,updateSelectedDealer,selectedDealer }) => {    
    const districts = useDistricts();
    const labelDistrictText = useMemo(() => 
        selectedDealer.region?.name && selectedDealer.region.name !== "Seleccionar Región" 
        ? `Selecciona Comuna de ${selectedDealer.region.name}` 
        : "Selecciona Comuna", 
        [selectedDealer.region?.name]
    );

    const filteredDistricts = useMemo(() => districts[selectedDealer.region?.id] ?? [], [selectedDealer.region?.id, districts]);

    const onChangeDistricts = useCallback((option) => {
        if (option?.id && filteredDistricts.some(d => d.id === option.id) && selectedDealer.district.id !== option.id) {
          updateSelectedDealer('district', option);
        }
    }, [filteredDistricts,selectedDealer.district.id]);

    return (
        <Dropdown 
            label_text={labelDistrictText} 
            options={filteredDistricts} 
            onChange={onChangeDistricts} 
            previouslySelectedOption={previouslySelectedOption} 
      />
    );
};
export default SecondDealerSelector;