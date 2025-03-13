import { useMemo,useCallback,useState } from 'react';
import Dropdown from '../../General_components/Dropdown';
import { regions } from '../../../assets/data/FullDealers';
const FirstDealerSelector = ({ previouslySelectedOption, setSelectOption }) => {
    
    const onChange = useCallback((option) => {
        if (option?.id && regions.some((r) => r.id === option.id)) {
            setSelectOption(option);
        }
    },[setSelectOption] );
    return (
        <Dropdown 
            label_text="Selecciona Región" 
            options={regions} 
            onChange={onChange} 
            previouslySelectedOption={previouslySelectedOption} 
        />
    );
};  
export default FirstDealerSelector;