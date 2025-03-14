import { useMemo,useCallback,useState } from 'react';
import Dropdown from '../../General_components/Dropdown';
import { useRegions } from '../../../hooks';
const FirstDealerSelector = ({ previouslySelectedOption, setSelectOption }) => {
    const regions = useRegions();

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