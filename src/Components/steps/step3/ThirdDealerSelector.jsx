import { useState,useEffect,useCallback } from "react";
import Dropdown from "../../General_components/Dropdown";
import { useDealers } from '../../../hooks';

const ThirdDealerSelector = ({  selectedComuna,previouslySelectedOption, setSelectOption }) => {
    const [filteredDealers, setFilteredDealers] = useState([]);
    const [emptyOption] = useState({ id: "", name: "" }); 
    
    const labelText = selectedComuna.name ? `Selecciona Concesionario de ${selectedComuna.name}` : "Selecciona Concesionario";
    const dealers = useDealers();
    
    const onChange = useCallback((option) => {
        if (option?.id && filteredDealers.some(c => c.id === option.id)) {
            setSelectOption(option);
        }
    }, [filteredDealers, setSelectOption]);

    //change the label when selectedRegion changes
    useEffect(() => {
        setFilteredDealers(dealers[selectedComuna.name] ?? []);
        setSelectOption(emptyOption);
    }, [selectedComuna.id,setSelectOption]);

    return (
        <>
            {
            filteredDealers.length === 0 
                ? (
                    <Dropdown label_text={labelText} options={[]}  />
                ):(
                    <Dropdown label_text={labelText} options={filteredDealers} onChange={onChange} previouslySelectedOption={previouslySelectedOption}/>
                ) 
            }
        </>
    );
};
export default ThirdDealerSelector;