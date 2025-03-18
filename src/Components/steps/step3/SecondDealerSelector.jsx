import { useState,useEffect,useCallback} from "react";
import Dropdown from "../../General_components/Dropdown";
import { useDistricts } from '../../../hooks';

const SecondDealerSelector = ({  previouslySelectedOption,selectedRegion, setSelectOption }) => {
    const [filteredDistricts, setFilteredDistricts] = useState([]);
    const [emptyOption] = useState({ id: "", name: "" }); 
    
const labelText = selectedRegion.name ? `Selecciona Comuna de ${selectedRegion.name}` : "Selecciona Comuna";
const districts = useDistricts();

const onChange = useCallback((option) => {
    if (option?.id && filteredDistricts.some(c => c.id === option.id)) {
        setSelectOption(option);
    }
}, [filteredDistricts, setSelectOption]);
//change the options when selected Region changes
useEffect(() => {
    setFilteredDistricts(districts[selectedRegion.name] ?? []);
    setSelectOption(emptyOption);
}, [selectedRegion.id,setSelectOption]);
    
    return (
        <>
            {
            filteredDistricts.length === 0 
                ? (
                    <Dropdown label_text={labelText} options={[]}  />
                ):(
                    <Dropdown label_text={labelText} options={filteredDistricts} onChange={onChange} previouslySelectedOption={previouslySelectedOption} />
                ) 
            }
        </>
    );
};
export default SecondDealerSelector;