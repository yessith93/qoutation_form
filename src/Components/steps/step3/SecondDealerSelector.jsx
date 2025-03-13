import { useState,useEffect,useCallback} from "react";
import Dropdown from "../../General_components/Dropdown";
import { districts } from '../../../assets/data/FullDealers';


const SecondDealerSelector = ({  previouslySelectedOption,selectedRegion, setSelectOption }) => {
    const [filteredDistricts, setFilteredDistricts] = useState([]);
    
    const labelText = selectedRegion.name ? `Selecciona Comuna de ${selectedRegion.name}` : "Selecciona Comuna";
    const onChange = (option) => {
        if (option?.id && filteredDistricts.some(c => c.id === option.id)) {
            setSelectOption(option);
            console.log(option);
        }
    };
    //change the options when selected Region changes
    useEffect(() => {
        setFilteredDistricts(districts[selectedRegion.name] ?? []);
        setSelectOption({id:"",name:""});
        console.log(selectedRegion);
    }, [selectedRegion.id]);
    
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