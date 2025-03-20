import React from 'react';
import useFetchModels from '../../hooks/useFetchModels';
import TabSelector from './step1/Tab_selector';
import ModelCards from './step1/Model_cards';
import { ErrorMessage, LoadingIndicator, StepHeader } from '../General_components';

const Step1 = () => {
  const { models, families, loading, error, allModelsRef, setModels } = useFetchModels();

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