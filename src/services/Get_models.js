const API_BASE_URL = 'YOUR_API_URL'; // Reemplazar con la URL base de tu API
import data from '../assets/data.json';
export const modelService = {
  // Transforma los datos crudos de la API al formato que necesita el componente
  transformModelData(rawData) {
    return rawData.map(item => ({
      id: item.id_modelo,
      modelo: item.modelo,
      img: item.foto.startsWith('/volvo') ? `https://www.volvocars.com${item.foto}` : item.foto,
      familia: item.familia_cotizador
    }));
  },

  // Obtiene los datos de la API
  async getModels() {
    try {
      const response = await fetch(`${API_BASE_URL}/models`);
      if (!response.ok) {
        throw new Error('Error fetching models');
      }
      const data = await response.json();
      return this.transformModelData(data);
    } catch (error) {
      console.error('Error in getModels:', error);
      throw error;
    }
  },

  // Método para desarrollo/testing que usa datos locales
  async getModelsMock() {

    // Simula delay de red
    await new Promise(resolve => setTimeout(resolve, 500));
    return this.transformModelData(data);
  }
};