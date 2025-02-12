import React, { useState, useEffect } from 'react';
import { useQuote } from '../../hooks/UseQuote';
import { versionService } from '../../services/get_versions';
import ErrorMessage from '../General_components/ErrorMessage';
import LoadingIndicator from '../General_components/LoadingIndicator';

const Step2 = () => {
  const { handleNextStep, handlePreviousStep, quoteData } = useQuote();
  const { model } = quoteData;
  const { name, img, id } = model;


  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const onNext = () => {
    handleNextStep();
  };
  const onPrevious = () => {
    handlePreviousStep();
  };
  // get data from api
  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setVersions([]);
    setError(null);

    const fetchVersions = async () => {
      try {
        // En desarrollo usa getModelsMock(), en producción usa getModels()
        const versions = await versionService.getVersionsMock(id);
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
        <div className="enc-select" style={{ backgroundColor: 'rgb(244, 244, 244)' }}>
          <div className="dropdown-container">
            <div className="enc-select">
              <p className="drop-txt version-title">EX40 P8 Recharge</p>
              <figure className="ic-arrow">
                <img src="/volvo/imag/v1/icon/articulos/cotizador/ic_arrow_d.svg" alt="" />
              </figure>
            </div>
            <div className="list-select" style={{ maxHeight: '0px' }}>
              <div className="article-inner">
                <ul id="versiones-list">
                  <li data-version="EX40 P8 Recharge" data-id="EX40p8RE">
                    <a href="javascript:void(0)">EX40 P8 Recharge</a>
                  </li>
                  <li data-version="EX40 P6 Recharge" data-id="EX40p6RE">
                    <a href="javascript:void(0)">EX40 P6 Recharge</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cont-btn">
        <button className="btn-main" onClick={onNext}>Siguiente</button>
        <button className="btn-sec cambiar-modelo" onClick={onPrevious}>Volver</button>
      </div>
    </div>
  );
};

export default Step2;