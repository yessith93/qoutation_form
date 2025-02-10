import React, { useState } from 'react';
import './css/cotizador/tasacion.css'
import './css/cotizador/gridpak.css'
import './css/cotizador/reset.css'
import './css/cotizador/global.css'
import Navigation_bar from './Componens/Navigation_bar';
import { Step1, Step2, Step3, Step4 } from './Componens/steps'
import { useQuote } from './hooks/UseQuote';

const Cotizador = () => {
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


export default Cotizador;