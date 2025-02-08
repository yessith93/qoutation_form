import React, { useState } from 'react';
import './css/cotizador/tasacion.css'
import './css/cotizador/gridpak.css'
import './css/cotizador/reset.css'
import './css/cotizador/global.css'
import { Step1, Step2, Step3, Step4 } from './Componens/steps'

const Cotizador = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <section className="cont-form">
      <div className="auxi">
        <header className="cont-tit">
          <h1 id="#contenido-ppal" className="tit">Cotizar</h1>
        </header>
        <StepBar step={step} />
        {step === 1 && <Step1 onNext={handleNextStep} />}
        {step === 2 && <Step2 onNext={handleNextStep} onPrevious={handlePreviousStep} />}
        {step === 3 && <Step3 onNext={handleNextStep} onPrevious={handlePreviousStep} />}
        {step === 4 && <Step4 onPrevious={handlePreviousStep} />}
      </div>
    </section>
  );
};

const StepBar = ({ step }) => {
  const steps = [
    { number: 1, label: 'Elige modelo' },
    { number: 2, label: 'Elige la versión' },
    { number: 3, label: 'Selecciona tu ubicación' },
    { number: 4, label: 'Ingresa tus datos' },
  ];

  return (
    <ul className="step-bar">
      {steps.map((s, index) => (
        <li key={index} className={step === s.number ? 'active' : ''}>
          <figure className="img-wrap">
            <span className="ic-step ic-number">{s.number}</span>
          </figure>
          <p className="subtit">{s.label}</p>
        </li>
      ))}
    </ul>
  );
};



export default Cotizador;