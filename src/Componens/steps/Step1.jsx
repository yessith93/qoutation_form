import React, { useState, useEffect } from 'react';
import { modelService } from '../../services/Get_models';
import TabSelector from '../Tab_selector';

const Step1 = ({ onNext }) => {
  const [allModels, setAllModels] = useState([]);
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [families, setFamilies] = useState([]);

  // get data from api
  useEffect(() => {
    fetchModelos();
  }, []);
  const fetchModelos = async () => {
    try {
      setLoading(true);
      // En desarrollo usa getModelsMock(), en producción usa getModels()
      const { modelos: models, familias: families } = await modelService.getModelsMock();
      setModels(models);
      setFamilies(families);
      setAllModels(models);
    } catch (err) {
      setError('Error al cargar los modelos');
      console.error('Error fetching models:', err);
    } finally {
      setLoading(false);
    }
  };
  
  

  if (loading) return <div className="loading">Cargando modelos...</div>;
  if (error) return <div className="error">{error}</div>;

    return (
      <div className="tabs div-step step1">
        <header className="cont-tit step1 step-header">
          <h2 className="titu">
            <p><strong>Elige la categoría, modelo y versión</strong> <br /> del vehículo que quieres</p>
          </h2>
        </header>
        <TabSelector families={families} models={allModels} setModels={setModels} />
        <div className="tab-content active">
          <ul className="row" id="modelos-list">
            {models.map((modelo) => (
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