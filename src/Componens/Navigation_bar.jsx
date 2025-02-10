/*create navigation bar */

import React from "react";

const steps = [
  { number: 1, label: "Elige modelo" },
  { number: 2, label: "Elige la versión" },
  { number: 3, label: "Selecciona tu ubicación" },
  { number: 4, label: "Ingresa tus datos" },
];

const Navigation_bar = ({ currentStep }) => {
  return (
    <ul className="step-bar">
      {steps.map((s, index) => (
        <li key={index} className={currentStep === s.number ? 'active' : ''}>
          <figure className="img-wrap">
            <span className="ic-step ic-number">{s.number}</span>
          </figure>
          <p className="subtit">{s.label}</p>
        </li>
      ))}
    </ul>
  );
};

export default Navigation_bar;
