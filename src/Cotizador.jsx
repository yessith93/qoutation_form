import React, { useState } from 'react';
import './css/quotation/tasacion.css'
import './css/quotation/gridpak.css'
import './css/quotation/reset.css'
import './css/quotation/global.css'
import Navigation_bar from './Components/Navigation_bar';
import { Step1, Step2, Step3, Step4 } from './Components/steps'
import { useQuote } from './hooks/UseQuote';

const QuotationForm = () => {
  const { step } = useQuote();
  return (
    <section className="cont-form">
      <div className="auxi">
        <header className="cont-tit">
          <h1 id="#contenido-ppal" className="tit">Cotizar</h1>
        </header>
        <Navigation_bar step={step} />
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
      </div>
    </section>
  );
};


export default QuotationForm;