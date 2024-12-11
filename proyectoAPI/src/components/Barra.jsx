import React from 'react';

const Barra = ({ terminoBusqueda, alCambiarBusqueda }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Buscar país..."
        value={terminoBusqueda}
        onChange={(e) => alCambiarBusqueda(e.target.value)}
        
      />
    </>
  );
};

export default Barra;
