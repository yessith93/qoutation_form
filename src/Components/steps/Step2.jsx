import React, { useState } from 'react';
import { useQuote, useStep } from '../../hooks';
import useFetchVersions from '../../hooks/useFetchVersions';
import { ErrorMessage, LoadingIndicator, Dropdown, ContainerBtn, StepHeader, ModelCard } from '../General_components';

const Step2 = () => {
  const { quoteData, updateQuoteData } = useQuote();
  const { handleNextStep } = useStep();
  const [disableNextButton, setDisableNextButton] = useState(true);
  const { model, version } = quoteData;

  // Use the custom hook
  const { versions, loading, error } = useFetchVersions(model?.id);

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
  };

  return (
    <div className="div-step step2">
      <StepHeader step={2} title="Elige la categoría, modelo y versión" subtitle="del vehículo que quieres" />
      <div className="version-sel">
        <ModelCard model={model} noArrow={true} />
        {loading && <LoadingIndicator message="Cargando Versiones..." />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && 
          <Dropdown 
            label_text="Selecciona una versión" 
            options={versions} 
            onChange={handleDropdownChange} 
            previouslySelectedOption={version} 
          />
        }
      </div>
      <ContainerBtn disableNextButton={disableNextButton} />
    </div>
  );
};

export default Step2;