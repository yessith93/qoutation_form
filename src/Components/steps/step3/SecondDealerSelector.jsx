import { useState,useEffect,useMemo } from "react";
import Dropdown from "../../General_components/Dropdown";

const SecondDealerSelector = ({  selectedRegion, setSelectOption }) => {
    const initialLabelText = "Selecciona Comuna";
    const [labelText, setLabelText] = useState(initialLabelText);
    const [filteredComunas, setFilteredComunas] = useState([]);
    const comunas = useMemo(() => ({
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
            if (filteredComunas.find(c => c.id === option.id)) {
                setSelectOption(option.name);
            }
        }
    }
    //change the label when selectedRegion changes
    useEffect(() => {
        if (selectedRegion==="") {
            setLabelText(initialLabelText);
        }else
            setLabelText(`Selecciona Comuna de ${selectedRegion}`);
        setFilteredComunas(comunas[selectedRegion] ?? []);
        setSelectOption("");
    }, [selectedRegion]);

    return (
        <>
            {
            filteredComunas.length === 0 
                ? (
                    <Dropdown label_text={labelText} options={[]}  />
                ):(
                    <Dropdown label_text={labelText} options={filteredComunas} onChange={onChange}  />
                ) 
            }
        </>
    );
};
export default SecondDealerSelector;