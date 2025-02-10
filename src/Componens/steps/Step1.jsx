import React, { useState, useEffect } from 'react';
import { modelService } from '../../services/Get_models';
import TabSelector from './step1/Tab_selector';
import ModelCards from './step1/Model_cards';

const Step1 = () => {
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
        <ModelCards models={models} />
      </div>
    );
  };

  export default Step1;