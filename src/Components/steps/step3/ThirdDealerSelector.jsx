import { useState,useEffect,useMemo } from "react";
import Dropdown from "../../General_components/Dropdown";

const ThirdDealerSelector = ({  selectedComuna,previouslySelectedOption, setSelectOption }) => {
    const initialLabelText = "Selecciona Concesionario";
    const [labelText, setLabelText] = useState(initialLabelText);
    const [filteredDealers, setFilteredDealers] = useState([]);
    const comunas = useMemo(() => ({
        "Lo Barnechea": [
            {
                name: "Volvo La Dehesa",
                id: "Volvo La Dehesa",
            },
            {
                name: "Volvo La Dehesa2",
                id: "Volvo La Dehesa2",
            }
        ],
        "Vitacura": [
            {
                "name": "Volvo Vitacura",
                "id": "Volvo Vitacura"
            }
        ],
        "La Serena": [
            {
                "name": "Carmona y Cía.",
                "id": "Carmona y Cía."
            }
        ],
        "Viña del Mar": [
            {
                "name": "Mach - Viña del Mar",
                "id": "Mach - Viña del Mar"
            }
        ],
        "Concepción": [
            {
                "name": "Salazar Israel Concepción",
                "id": "Salazar Israel Concepción"
            }
        ],
        "Temuco": [
            {
                "name": "Portillo Sur - Temuco",
                "id": "Portillo Sur - Temuco"
            }
        ],
        "Osorno": [
            {
                "name": "Servimaq - Osorno",
                "id": "Servimaq - Osorno"
            }
        ],
        "Antofagasta": [
            {
                "name": "Yusic - Antofagasta",
                "id": "Yusic - Antofagasta"
            }
        ],
        "Punta Arenas": [
            {
                "name": "Recasur - Punta Arenas",
                "id": "Recasur - Punta Arenas"
            }
        ]
    }), []);
    
    const onChange = (option) => {
        if (option) {
            if (filteredDealers.find(c => c.id === option.id)) {
                setSelectOption(option);
            }
        }
    }
    //change the label when selectedRegion changes
    useEffect(() => {
        if (selectedComuna.name==="") {
            setLabelText(initialLabelText);
        }else
            setLabelText(`Selecciona Comuna de ${selectedComuna.name}`);

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