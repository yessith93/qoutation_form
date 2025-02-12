import data from '../assets/Versions.json';
export const versionService = {
  // Transforma los datos crudos de la API al formato que necesita el componente
  transformVersionData(data) {
    return data.flatMap(item => 
        item.Versions.flatMap(versionGroup => 
            versionGroup.map(version => ({
                nombre: version.informacion.nombre,
                id: version.informacion.id
            }))
        )
    );
  },
  // Obtiene los datos de la API
  async getVersions(id_model) {
    try {
      const response = await fetch(`${API_BASE_URL}/versions`);
      if (!response.ok) {
        throw new Error('Error fetching versions');
      }
      const data = await response.json();
      const filteredversions = data.filter(item => item.model === id_model);
      return {
        versions: this.transformVersionData(filteredversions),
      };
    } catch (error) {
      console.error('Error in getVersions:', error);
      throw error;
    }
  },

  // Método para desarrollo/testing que usa datos locales
  async getVersionsMock(id_model) {

    // Simula delay de red
    await new Promise(resolve => setTimeout(resolve, 300));
    const filteredversions = data.filter(item => item.model === id_model);
    return {
      versions: this.transformVersionData(filteredversions),
    };
  }
};