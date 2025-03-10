import React, { useEffect, useState } from 'react';
const TabSelector = ({ families, models,setModels }) => {
  const [selectedFamily, setSelectedFamily] = useState('all');

  const filteredModels = models.filter(model => 
    selectedFamily === 'all' || model.family === selectedFamily
  );
  const handleFamilyClick = (familia) => {
    setSelectedFamily(familia);
  };
  useEffect(() => {
    setModels(filteredModels);
  }, [selectedFamily]);
  return (
    <div className="tab-bar">
      <nav className="cont-tabs flex-center" id="familias-list">
        <button
          className={`tablink ${selectedFamily === 'all' ? 'active' : ''}`}
          onClick={() => handleFamilyClick('all')}
        >
          TODOS
        </button>
        {families.map(familia => (
          <button
            key={familia}
            className={`tablink ${selectedFamily === familia ? 'active' : ''}`}
            onClick={() => handleFamilyClick(familia)}
          >
            {familia.toUpperCase()}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabSelector;