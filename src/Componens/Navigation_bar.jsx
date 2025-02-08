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
      {steps.map((step) => (
        <li key={step.number} className={currentStep >= step.number ? (currentStep === step.number ? "active" : "completed") : ""}>
          <figure className="img-wrap">
            <span className="ic-step ic-number">{step.number}</span>
          </figure>
          <p className="subtit">{step.label}</p>
        </li>
      ))}
    </ul>
  );
};

export default Navigation_bar;
