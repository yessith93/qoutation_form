import React, { useState, useEffect } from 'react';
import { modelService } from '../../services/Get_models';

const Step1 = ({ onNext }) => {
  const [modelos, setModelos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [familiaSeleccionada, setFamiliaSeleccionada] = useState('all');

  // get data from api
  useEffect(() => {
    fetchModelos();
  }, []);
  const fetchModelos = async () => {
    try {
      setLoading(true);
      // En desarrollo usa getModelsMock(), en producción usa getModels()
      const data = await modelService.getModelsMock();
      setModelos(data);
    } catch (err) {
      setError('Error al cargar los modelos');
      console.error('Error fetching models:', err);
    } finally {
      setLoading(false);
    }
  };
  const filteredModelos = modelos.filter(modelo => 
    familiaSeleccionada === 'all' || modelo.familia === familiaSeleccionada
  );
  const handleFamiliaClick = (familia) => {
    setFamiliaSeleccionada(familia);
  };

    if (loading) {
      return <div className="loading">Cargando modelos...</div>;
    }
  
    if (error) {
      return <div className="error">{error}</div>;
    }
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