import React, { useState, useEffect } from 'react';
import { useQuote } from '../../hooks/UseQuote';
import { versionService } from '../../services/get_versions';
import ErrorMessage from '../General_components/ErrorMessage';
import LoadingIndicator from '../General_components/LoadingIndicator';
import Dropdown from '../General_components/Dropdown';
import ContainerBtn from '../General_components/ContainerBtn';


const Step2 = () => {
  const { quoteData,updateQuoteData, handleNextStep } = useQuote();
  const[disableNextButton, setDisableNextButton] = useState(true);
  const { model,version } = quoteData;
  const { name, img, id } = model;
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // get data from api
  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setVersions([]);
    setError(null);

    const fetchVersions = async () => {
      try {
        // En desarrollo usa getModelsMock(), en producción usa getModels()
        const { versions } = await versionService.getVersionsMock(id);
        setVersions(versions);
      } catch (err) {
        setError('error fetching Versions');
        console.error('Error fetching Versions:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVersions();
  }, [id]);

  const searchVersionSelected = (version) => {
    if (version) {
      return versions.find(v => v.id === version.id);
    }
    return null;
  }
  const handleDropdownChange = (option) => {
    if (option) {
      if(searchVersionSelected(option)) {
        let wasThereAVersionBefore = Object.keys(version).length > 0 ? true : false;
        updateQuoteData('version', option);
        setDisableNextButton(false);
        if (versions.length === 1&& !wasThereAVersionBefore) {
          handleNextStep();
        }
      }
    }
  }


  // if (loading) return <LoadingIndicator message="Cargando Versiones..." />;
  if (error) return <ErrorMessage message={error} onRetry={onPrevious} />;
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
            <img src={img} alt={name} />
          </figure>
          <div className="cont-subtit">
            <h3 className="subtit modelo-title">{name}</h3>
          </div>
        </article>
        {loading && <LoadingIndicator message="Cargando Versiones..." />}
        {error && <ErrorMessage message={error} onRetry={onPrevious} />}
        {!loading && !error && 
        <Dropdown label_text= 'Selecciona una versión' options={versions} onChange={handleDropdownChange}/> 
        }
      </div>
      <ContainerBtn disableNextButton={disableNextButton} />
    </div>
  );
};

export default Step2;