
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

  export default Step2;