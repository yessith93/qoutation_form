import React, { useState } from 'react';
import ContainerBtn from '../General_components/ContainerBtn';
import FirstDealerSelector from './step3/FirstDealerSelector';
import SecondDealerSelector from './step3/SecondDealerSelector';


const Step3 = ({ onNext, onPrevious }) => {

  const concesionarios = {
    "Lo Barnechea": ["Volvo La Dehesa"],
    "Vitacura": ["Volvo Vitacura"],
    "La Serena": ["Carmona y Cía."],
    "Viña del Mar": ["Mach - Viña del Mar"],
    "Concepción": ["Salazar Israel Concepción"],
    "Temuco": ["Portillo Sur - Temuco"],
    "Osorno": ["Servimaq - Osorno"],
    "Antofagasta": ["Yusic - Antofagasta"],
    "Punta Arenas": ["Recasur - Punta Arenas"],
  };
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedComuna, setSelectedComuna] = useState("");
  const [selectedConcesionario, setSelectedConcesionario] = useState("");

  return (
    <div className="div-step step3">
      <header className="cont-tit step3 step-header">
        <h2 className="titu"><strong>Escoge dónde quieres cotizar tu auto</strong></h2>
      </header>
      <FirstDealerSelector setSelectOption={setSelectedRegion} />
      <SecondDealerSelector selectedRegion={selectedRegion} setSelectOption={setSelectedComuna} />
      <div className="enc-select disable">
        <div className="dropdown-container">
          <div className="enc-select" style={{ backgroundColor: "rgb(244, 244, 244)" }}>
            <p className="drop-txt concesionario-title">Selecciona Concesionario</p>
            <figure className="ic-arrow">
              <img src="/volvo/imag/v1/icon/articulos/cotizador/ic_arrow_d.svg" alt="ic_arrow" />
            </figure>
          </div>
        </div>
      </div>
      <ContainerBtn  />
    </div>
  );
};

export default Step3;