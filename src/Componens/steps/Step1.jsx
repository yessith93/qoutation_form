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

  export default Step1;