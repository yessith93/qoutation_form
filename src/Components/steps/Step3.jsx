
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

  export default Step3;