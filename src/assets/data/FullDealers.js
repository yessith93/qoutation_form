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
const districts = {
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
};
const comunas = {
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
};
export {
    regions,
    districts,
    comunas
};