import React, { useState, useEffect } from 'react';
import { useQuote, useStep } from '../../hooks';
import { versionService } from '../../services/get_versions';
import { ErrorMessage, LoadingIndicator, Dropdown, ContainerBtn, StepHeader, ModelCard } from '../General_components';

const Step2 = () => {
  const { quoteData,updateQuoteData } = useQuote();
  const { handleNextStep } = useStep();
  const[disableNextButton, setDisableNextButton] = useState(true);
  const { model,version } = quoteData;
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // get data from api
  useEffect(() => {
    if (!model?.id) return;

    setLoading(true);
    setError(null);

    const fetchVersions = async () => {
      try {
        // En desarrollo usa getModelsMock(), en producción usa getModels()
        const { versions } = await versionService.getVersionsMock(model.id);
        setVersions(versions);
      } catch (err) {
        setError('error fetching Versions');
        console.error('Error fetching Versions:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVersions();
  }, [model.id]);

  const handleDropdownChange = (option) => {
    if (option && versions.some(v => v.id === option.id)) {
        const wasThereAVersionBefore = Boolean(Object.keys(version).length);
        updateQuoteData('version', option);
        setDisableNextButton(false);
        //this skips the step if there's only one option, but doesn't skip it if the user wants to go back
        if (versions.length === 1&& !wasThereAVersionBefore) {
          handleNextStep();
        }
    }
  }

  return (
    <div className="div-step step2">
      <StepHeader step={2} title="Elige la categoría, modelo y versión" subtitle="del vehículo que quieres" />
      <div className="version-sel">
        <ModelCard model={model} noArrow={true} />
        {loading && <LoadingIndicator message="Cargando Versiones..." />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && 
        <Dropdown label_text= 'Selecciona una versión' options={versions} onChange={handleDropdownChange} previouslySelectedOption={version}/> 
        }
      </div>
      <ContainerBtn disableNextButton={disableNextButton} />
    </div>
  );
};

export default Step2;