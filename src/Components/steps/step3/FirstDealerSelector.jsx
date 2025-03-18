import React,{ useCallback, memo } from 'react';
import Dropdown from '../../General_components/Dropdown';
import { useRegions } from '../../../hooks';
const FirstDealerSelector = memo(({ previouslySelectedOption, updateSelectedDealer,selectedDealer }) => {
    const regions = useRegions();

    const onChangeRegions = useCallback((option) => {
        if (option?.id && regions.some(r => r.id === option.id)&& selectedDealer.region.id !== option.id) {
          updateSelectedDealer('region', option);
        }
      }, [regions,selectedDealer.region.id]);

    return (
        <Dropdown 
            label_text="Selecciona Región" 
            options={regions} 
            onChange={onChangeRegions} 
            previouslySelectedOption={previouslySelectedOption} 
        />
    );
});
FirstDealerSelector.displayName = 'FirstDealerSelector';
export default FirstDealerSelector;