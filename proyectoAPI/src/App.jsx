import React, { useState, useEffect } from 'react';
import Barra from './components/Barra';
import Resultado from './components/Resultado';
import Historial from './components/Historial';

function App (){
  
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [datosPais, setDatosPais] = useState(null);
  const [error, setError] = useState(null);
  const [historial, setHistorial] = useState([]);

  const manejarCambioBusqueda = (valor) => {
    setTerminoBusqueda(valor);
  };

  const buscarDatosPais = async (nombre) => {
    if (!nombre) return;

    setHistorial((historialPrevio) => {
      const historialActualizado = [nombre, ...historialPrevio.filter((item) => item !== nombre)];
      return historialActualizado.slice(0, 5); 
    });

    try {
      const respuesta = await fetch(`https://restcountries.com/v3.1/name/${nombre}`);
      if (!respuesta.ok) {
        throw new Error('No se encontró el país');
      }
      const datos = await respuesta.json();
      setDatosPais(datos[0]);
      setError(null);
    } catch (err) {
      setError(err.message);
      setDatosPais(null);
    }
  };

  useEffect(() => {
    buscarDatosPais(terminoBusqueda);
  }, [terminoBusqueda]);

  return (
    <>
      <h1>Buscar País</h1>
      
      <Barra terminoBusqueda={terminoBusqueda} alCambiarBusqueda={manejarCambioBusqueda} />
      
      <Resultado pais={datosPais} error={error} />
      
      <Historial historial={historial} />
    </>
  );
};

export default App;


