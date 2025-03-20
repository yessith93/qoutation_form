import { useState, useEffect, useRef } from 'react';
import { modelService } from '../services/Get_models';

const useFetchModels = () => {
  const [models, setModels] = useState([]);
  const [families, setFamilies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const allModelsRef = useRef([]);

  useEffect(() => {
    const fetchModelos = async () => {
      try {
        const { modelos: models, familias: families } = await modelService.getModelsMock();
        setModels(models);
        setFamilies(families);
        allModelsRef.current = models;
      } catch (err) {
        const errorMessage = err.response?.data?.message || err.message || "Error al cargar los modelos";
        setError(errorMessage);
        console.error('Error fetching models:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchModelos();
  }, []);

  return { models, families, loading, error, allModelsRef, setModels };
};

export default useFetchModels;