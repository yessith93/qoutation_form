import { useState,useEffect,useMemo } from "react";
import Dropdown from "../../General_components/Dropdown";

const initialLabelText = "Selecciona Comuna";

const SecondDealerSelector = ({  previouslySelectedOption,selectedRegion, setSelectOption }) => {
    const [labelText, setLabelText] = useState(initialLabelText);
    const [filteredDistricts, setFilteredDistricts] = useState([]);
    const districts = useMemo(() => ({
        "Metropolitana": [
            {
                name: "Lo Barnechea",
                id: "Lo Barnechea",
            },
            {
                name: "Vitacura",
                id: "Vitacura",
            }
        ]
        ,
        "IV Región - Coquimbo":
            [
                {
                    name: "La Serena",
                    id: "La Serena",
                }
            ],
        "IX Región - Araucanía": [
            {
                name: "Temuco",
                id: "Temuco",
            }
        ],
        "II Región - Antofagasta": [
            {
                name: "Antofagasta",
                id: "Antofagasta",
            }
        ],
        "V Región - Valparaíso": [
            {
                name: "Viña del Mar",
                id: "Viña del Mar",
            }
        ],
        "VIII Región - Biobío": [
            {
                name: "Concepción",
                id: "Concepción",
            },
            {
                name: "Osorno",
                id: "Osorno",
            }
        ],
        "X Región - Los Lagos": [
            {
                name: "Osorno",
                id: "Osorno",
            }
        ],
        "XII Región de Magallanes y la Antártica Chilena": [
            {
                name: "Punta Arenas",
                id: "Punta Arenas",
            }
        ],
    }), []);
    
    const onChange = (option) => {
        if (option) {
            if (filteredDistricts.find(c => c.id === option.id)) {
                setSelectOption(option);
            }
        }
    }
    //change the label when selectedRegion changes
    useEffect(() => {
        if (selectedRegion.name==="") {
            setLabelText(initialLabelText);
        }else
            setLabelText(`${initialLabelText} de ${selectedRegion.name}`);

        setFilteredDistricts(districts[selectedRegion.name] ?? []);
        setSelectOption({id:"",name:""});
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