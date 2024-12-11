import React from 'react';

const Historial = ({ historial }) => {
  return (
    <div>
      <h3>Historial de búsquedas</h3>
      <ul>
        {historial.map((busqueda, index) => (
          <li key={index}>{busqueda}</li>
        ))}
      </ul>
    </div>
  );
};

export default Historial;

