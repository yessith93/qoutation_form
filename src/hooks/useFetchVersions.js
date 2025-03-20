import { useState, useEffect } from 'react';
import { versionService } from '../services/get_versions';

const useFetchVersions = (modelId) => {
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!modelId) return;

    const fetchVersions = async () => {
      setLoading(true);
      setError(null);
      try {
        // En desarrollo usa getModelsMock(), en producción usa getModels()
        const { versions } = await versionService.getVersionsMock(modelId);
        setVersions(versions);
      } catch (err) {
        const errorMessage = err.response?.data?.message || 'Error al obtener las versiones. Intenta nuevamente.';
        setError(errorMessage);
        console.error('Error fetching Versions:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVersions();
  }, [modelId]);

  return { versions, loading, error };
};

export default useFetchVersions;