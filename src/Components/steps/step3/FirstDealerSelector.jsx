import { useMemo,useCallback,useState } from 'react';
import Dropdown from '../../General_components/Dropdown';

const FirstDealerSelector = ({ previouslySelectedOption, setSelectOption }) => {
    const regions = useMemo(() =>[{
            name: "II Región - Antofagasta",
            id: "II Región - Antofagasta",
        },
        {
            name: "IV Región - Coquimbo",
            id: "IV Región - Coquimbo",
        },
        {
            name: "IX Región - Araucanía",
            id: "IX Región - Araucanía",
        },
        {
            name: "Metropolitana",
            id: "Metropolitana",
        },
        {
            name: "V Región - Valparaíso",
            id: "V Región - Valparaíso",
        },
        {
            name: "VIII Región - Biobío",
            id: "VIII Región - Biobío",
        },
        {
            name: "X Región - Los Lagos",
            id: "X Región - Los Lagos",
        },
        {
            name: "XII Región de Magallanes y la Antártica Chilena",
            id: "XII Región de Magallanes y la Antártica Chilena",
        },
    ],[]);
    const onChange = useCallback(
        (option) => {
          if (option && regions.find((r) => r.id === option.id)) {
            setSelectOption(option);
          }
        },[] );

    return (
        <Dropdown label_text="Selecciona Región" options={regions} onChange={onChange} previouslySelectedOption={previouslySelectedOption} />
    );
};  
export default FirstDealerSelector;