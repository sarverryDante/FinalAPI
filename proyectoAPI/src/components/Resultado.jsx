import React from 'react';

const Resultado = ({ pais, error }) => {
  if (error) {
    return <p>No se encontraron resultados para esta búsqueda.</p>;
  }

  if (!pais) return null;

  const { flags, name, capital, population } = pais;

  return (
    <>
    <hr />
      <img src={flags[0]} alt={`pais${name.common}`}/>
      <h2>{name.common}</h2>
      <p><strong>Capital:</strong> {capital ? capital[0] : 'No disponible'}</p>
      <p><strong>Población:</strong> {population.toLocaleString()}</p>
    </>
  );
};

export default Resultado;
