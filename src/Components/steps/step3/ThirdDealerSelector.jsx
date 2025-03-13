import { useState,useEffect,useMemo } from "react";
import Dropdown from "../../General_components/Dropdown";
import { comunas } from '../../../assets/data/FullDealers';

const ThirdDealerSelector = ({  selectedComuna,previouslySelectedOption, setSelectOption }) => {
    const [filteredDealers, setFilteredDealers] = useState([]);
    console.log(selectedComuna);
    const labelText = selectedComuna.name ? `Selecciona Concesionario de ${selectedComuna.name}` : "Selecciona Concesionario";
    const onChange = (option) => {
        if (option) {
            if (filteredDealers.find(c => c.id === option.id)) {
                setSelectOption(option);
            }
        }
    }
    //change the label when selectedRegion changes
    useEffect(() => {
        setFilteredDealers(comunas[selectedComuna.name] ?? []);
        setSelectOption({id:"",name:""});
    }, [selectedComuna.id]);

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