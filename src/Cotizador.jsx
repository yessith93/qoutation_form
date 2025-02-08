import React, { useState } from 'react';
import './css/cotizador/tasacion.css'
import './css/cotizador/gridpak.css'
import './css/cotizador/reset.css'
import './css/cotizador/global.css'

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

const Step1 = ({ onNext }) => {
  const modelos = [
    { id: 'EC40PE', modelo: 'EC40 Pure Electric', img: '/src/assets/models_images/0c4.png' },
    { id: 'EX40PE', modelo: 'EX40 Pure Electric', img: '/src/assets/models_images/xc40-pure.png' },
    { id: 'EX30ELE', modelo: 'EX30 Eléctrico', img: '/src/assets/models_images/foto_0000059020240313151901_ex30-reveal.png' },
    { id: 'XC90PH', modelo: 'XC90 Plug-In Hybrid', img: '/src/assets/models_images/foto_0000016220230525133458_1.png' },
    { id: 'XC60Plug', modelo: 'XC60 Plug-In Hybrid', img: '/src/assets/models_images/foto_0000024620230606175321_xc60l.png' },
    { id: 'XC60POLESTAR', modelo: 'XC60 Polestar', img: '/src/assets/models_images/foto_0000034420241204140409__COTIZADOR_480x194.png' }, 
    
  ];

  return (
    <div className="tabs div-step step1">
      <header className="cont-tit step1 step-header">
        <h2 className="titu">
          <p><strong>Elige la categoría, modelo y versión</strong> <br /> del vehículo que quieres</p>
        </h2>
      </header>
      <div className="tab-bar">
        <nav className="cont-tabs flex-center" id="familias-list">
          <button className="tablink active" data-familia="all">TODOS</button>
          <button className="tablink" data-familia="Electric">ELECTRIC</button>
          <button className="tablink" data-familia="Plug-in Hybrid">PLUG-IN HYBRID</button>
        </nav>
      </div>
      <div className="tab-content active">
        <ul className="row" id="modelos-list">
          {modelos.map((modelo) => (
            <li key={modelo.id} className="col xs-12 sm-6 lg-4">
              <article className="car-item">
                <a href="javascript:void(0)">
                  <figure className="img-wrap">
                    <img src={modelo.img} alt={modelo.modelo} />
                  </figure>
                  <div className="cont-subtit">
                    <h3 className="subtit">{modelo.modelo}</h3>
                    <img className="ic-arrow" src="/src/assets/ic_arrow_r.svg" alt="ic_arrow" />
                  </div>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Step2 = ({ onNext, onPrevious }) => {
  return (
    <div className="div-step step2">
      <header className="cont-tit step2 step-header">
        <h2 className="titu">
          <strong>Elige la categoría, modelo y versión</strong><br /> del vehículo que quieres
        </h2>
      </header>
      <div className="version-sel">
        <article className="car-item">
          <figure className="img-wrap modelo-img">
            <img src="/volvo/site/artic/20230615/imag/foto_0000030320230615175004_xc40-pure.png" alt="EX40 Pure Electric" />
          </figure>
          <div className="cont-subtit">
            <h3 className="subtit modelo-title">EX40 Pure Electric</h3>
          </div>
        </article>
        <div className="enc-select" style={{ backgroundColor: 'rgb(244, 244, 244)' }}>
          <div className="dropdown-container">
            <div className="enc-select">
              <p className="drop-txt version-title">EX40 P8 Recharge</p>
              <figure className="ic-arrow">
                <img src="/volvo/imag/v1/icon/articulos/cotizador/ic_arrow_d.svg" alt="" />
              </figure>
            </div>
            <div className="list-select" style={{ maxHeight: '0px' }}>
              <div className="article-inner">
                <ul id="versiones-list">
                  <li data-version="EX40 P8 Recharge" data-id="EX40p8RE">
                    <a href="javascript:void(0)">EX40 P8 Recharge</a>
                  </li>
                  <li data-version="EX40 P6 Recharge" data-id="EX40p6RE">
                    <a href="javascript:void(0)">EX40 P6 Recharge</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cont-btn">
        <button className="btn-main" onClick={onNext}>Siguiente</button>
        <button className="btn-sec cambiar-modelo" onClick={onPrevious}>Volver</button>
      </div>
    </div>
  );
};

const Step3 = ({ onNext, onPrevious }) => {
  return (
    <div className="div-step step3">
      <header className="cont-tit step3 step-header">
        <h2 className="titu">
          <strong>Escoge dónde quieres cotizar tu auto</strong>
        </h2>
      </header>
      <div className="enc-select">
        <div className="dropdown-container">
          <div className="enc-select">
            <p className="drop-txt title">II Región - Antofagasta</p>
            <figure className="ic-arrow">
              <img src="/volvo/imag/v1/icon/articulos/cotizador/ic_arrow_d.svg" alt="ic_arrow" />
            </figure>
          </div>
          <div className="list-select" style={{ maxHeight: '0px' }}>
            <div className="article-inner">
              <ul id="selector_1">
                <li data-value="II Región - Antofagasta">
                  <a href="javascript:void(0)">II Región - Antofagasta</a>
                </li>
                <li data-value="IV Región - Coquimbo">
                  <a href="javascript:void(0)">IV Región - Coquimbo</a>
                </li>
                <li data-value="IX Región - Araucanía">
                  <a href="javascript:void(0)">IX Región - Araucanía</a>
                </li>
                <li data-value="Metropolitana">
                  <a href="javascript:void(0)">Metropolitana</a>
                </li>
                <li data-value="V Región - Valparaiso">
                  <a href="javascript:void(0)">V Región - Valparaiso</a>
                </li>
                <li data-value="VIII Región - Biobío">
                  <a href="javascript:void(0)">VIII Región - Biobío</a>
                </li>
                <li data-value="X Región - Los Lagos">
                  <a href="javascript:void(0)">X Región - Los Lagos</a>
                </li>
                <li data-value="XII - Región de Magallanes y la Antártica Chilena">
                  <a href="javascript:void(0)">XII - Región de Magallanes y la Antártica Chilena</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cont-btn">
        <button className="btn-main" onClick={onNext}>Siguiente</button>
        <button className="btn-sec cambiar-version" onClick={onPrevious}>Volver</button>
      </div>
    </div>
  );
};

const Step4 = ({ onPrevious }) => {
  return (
    <div className="div-step step4">
      <header className="cont-tit step4 step-header">
        <h2 className="titu">
          <strong>Ingresa tus datos y elige tus preferencias de contacto</strong>
        </h2>
      </header>
      <div className="row">
        <div className="col xs-12 sm-12 md-6 lg-6">
          <div className="form-group">
            <input type="text" className="form-control" name="nombre" required />
            <span className="bar"></span>
            <label className="form-label">Nombre</label>
          </div>
        </div>
        <div className="col xs-12 sm-12 md-6 lg-6">
          <div className="form-group">
            <input type="text" className="form-control" name="primer_apellido" required />
            <span className="bar"></span>
            <label className="form-label">Apellidos</label>
          </div>
        </div>
        <div className="col xs-12 sm-12 md-6 lg-6">
          <div className="form-group">
            <input type="text" className="form-control" name="rut" minLength="8" maxLength="11" required />
            <span className="bar"></span>
            <label className="form-label">RUT</label>
          </div>
        </div>
        <div className="col xs-12 sm-12 md-6 lg-6">
          <div className="form-group">
            <input type="text" className="form-control" name="email" required />
            <span className="bar"></span>
            <label className="form-label">Email de Contacto</label>
          </div>
        </div>
        <div className="col xs-12 sm-12 md-6 lg-6">
          <div className="form-group">
            <input type="text" className="form-control" name="telefono" maxLength="9" required />
            <span className="bar"></span>
            <label className="form-label">Número de teléfono</label>
          </div>
        </div>
        <div className="col xs-12 sm-12 md-6 lg-6">
          <div className="form-group">
            <h3 className="subtit">
              <span className="bold">Necesito financiamiento para adquirir este auto</span> (opcional)
            </h3>
            <div className="radio-group">
              <p>
                <input type="radio" id="radio1" name="financiamiento" value="true" />
                <label htmlFor="radio1">Si</label>
              </p>
              <p>
                <input type="radio" id="radio2" name="financiamiento" value="false" />
                <label htmlFor="radio2">No</label>
              </p>
            </div>
          </div>
        </div>
        <div className="col xs-12 sm-12 md-6 lg-6">
          <div className="form-group">
            <h3 className="subtit">
              <span className="bold">Usaré mi auto actual en parte de pago</span> (opcional)
            </h3>
            <div className="radio-group">
              <p>
                <input type="radio" id="radio3" name="auto_parte_pago" value="true" />
                <label htmlFor="radio3">Si</label>
              </p>
              <p>
                <input type="radio" id="radio4" name="auto_parte_pago" value="false" />
                <label htmlFor="radio4">No</label>
              </p>
            </div>
          </div>
        </div>
        <div className="col xs-12 sm-12 md-6 lg-6">
          <div className="form-group">
            <h3 className="subtit">
              <span className="bold">Quisiera participar de un Test Drive de este vehículo</span> (opcional)
            </h3>
            <div className="radio-group">
              <p>
                <input type="radio" id="radio5" name="test_drive" value="true" />
                <label htmlFor="radio5">Si</label>
              </p>
              <p>
                <input type="radio" id="radio6" name="test_drive" value="false" />
                <label htmlFor="radio6">No</label>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="separa"></div>
      <div className="cont-checkbox">
        <div className="msj-checkbox">
          <input type="checkbox" id="checbkox-legal-1" />
          <label htmlFor="checbkox-legal-1"></label>
          <p className="legal">
            El Cliente autoriza a Sociedad Comercializadora Ditec Automoviles S.A. a compartir su información con empresas asociadas y filiales tanto nacionales como extranjeras, y a contactarlo para enviarle información relevante y/o preguntarle su opinión por la forma en que fueron prestados los servicios. El Cliente declara que ha sido informado acerca del propósito del almacenamiento de sus datos personales y autoriza su tratamiento de conformidad lo regula la ley 19.628 de protección de datos de carácter personal y a su Política de Privacidad y Protección de Datos Personales.
          </p>
        </div>
      </div>
      <div className="cont-btn">
        <button className="btn-main" id="finalizar">Enviar</button>
        <button className="btn-sec" id="cambiar-lugar" onClick={onPrevious}>Volver</button>
      </div>
    </div>
  );
};

export default Cotizador;