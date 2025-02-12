import React, { useState, useEffect } from 'react';
import { useQuote } from '../../hooks/UseQuote';
import { versionService } from '../../services/get_versions';
import ErrorMessage from '../General_components/ErrorMessage';
import LoadingIndicator from '../General_components/LoadingIndicator';
import Dropdown from '../General_components/Dropdown';
import PreviousButton from '../General_components/PreviousButton';
import NextButton from '../General_components/NextButton';

const Step2 = () => {
  const { handleNextStep, quoteData } = useQuote();
  const { model } = quoteData;
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

  if (loading) return <LoadingIndicator message="Cargando Versiones..." />;
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
        <Dropdown label_text={'Selecciona una versión'} options={versions} selected={model.id} onChange={handleNextStep} />
      </div>
      <div className="cont-btn">
        <NextButton />
        <PreviousButton />
      </div>
    </div>
  );
};

export default Step2;