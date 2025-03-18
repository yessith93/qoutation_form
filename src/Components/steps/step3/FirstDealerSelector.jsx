import React,{ useCallback, memo } from 'react';
import Dropdown from '../../General_components/Dropdown';
import { useRegions } from '../../../hooks';
const FirstDealerSelector = memo(({ previouslySelectedOption, setSelectOption }) => {
    const regions = useRegions();

    const onChange = useCallback((option) => {
        if (option?.id && regions.some((r) => r.id === option.id)) {
            setSelectOption(option);
        }
    },[setSelectOption,regions] );

    return (
        <Dropdown 
            label_text="Selecciona Región" 
            options={regions} 
            onChange={onChange} 
            previouslySelectedOption={previouslySelectedOption} 
        />
    );
});
FirstDealerSelector.displayName = 'FirstDealerSelector';
export default FirstDealerSelector;