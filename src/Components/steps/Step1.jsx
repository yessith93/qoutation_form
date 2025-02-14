import React, { useState, useEffect, useRef } from 'react';
import { modelService } from '../../services/Get_models';
import TabSelector from './step1/Tab_selector';
import ModelCards from './step1/Model_cards';
import ErrorMessage from '../General_components/ErrorMessage';
import LoadingIndicator from '../General_components/LoadingIndicator';
import StepHeader from '../General_components/StepHeader';

const Step1 = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [families, setFamilies] = useState([]);

  const allModelsRef = useRef([]);

  // get data from api
  useEffect(() => {
    const fetchModelos = async () => {
      try {
        // En desarrollo usa getModelsMock(), en producción usa getModels()
        const { modelos: models, familias: families } = await modelService.getModelsMock();
        setModels(models);
        setFamilies(families);
        allModelsRef.current = models;
      } catch (err) {
        setError(err.message || "Error al cargar los modelos");
        console.error('Error fetching models:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchModelos();
  }, []);
  
  

  if (loading) return <LoadingIndicator message="Cargando Modelos..." />;
  if (error) return <ErrorMessage message={error} />;

    return (
      <div className="tabs div-step step1">
        <StepHeader step={1} title="Elige la categoría, modelo y versión" subtitle="del vehículo que quieres" />
        <TabSelector families={families} models={allModelsRef.current} setModels={setModels} />
        <ModelCards models={models} />
      </div>
    );
  };

  export default Step1;