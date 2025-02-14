import Dropdown from '../../General_components/Dropdown';

const FirstDealerSelector = ({ options,setSelectOption }) => {
    const regions = [{
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
    ];
    const onChange = (option) => {
        if (option) {
            if (regions.find(r => r.id === option.id)) {
                setSelectOption(option.name);
            }   
        }
    }
    return (
        <Dropdown label_text="Selecciona Region" options={regions} onChange={onChange} />
    );
};  
export default FirstDealerSelector;