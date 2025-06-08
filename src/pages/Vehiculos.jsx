import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { mostrarError } from '../services/notificaciones';
import Alerta from '../components/Alerta'; // Componente personalizado

function Vehiculos() {
  const [vehiculos, setVehiculos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // Timeout de 10s

    const fetchData = async () => {
      try {
        const response = await api.get('/vehiculos', { 
          signal: controller.signal 
        });
        setVehiculos(response.data);
      } catch (err) {
        const mensaje = err.message || 'Error al cargar vehículos';
        setError(mensaje);
        mostrarError(mensaje);
      } finally {
        setLoading(false);
        clearTimeout(timeoutId);
      }
    };

    fetchData();

    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, []);

  if (loading) return <Alerta tipo="loading" mensaje="Cargando..." />;
  if (error) return <Alerta tipo="error" mensaje={error} />;

  return (
    <div>
      <h2>Vehículos</h2>
      <ul>
        {vehiculos.map((vehiculo) => (
          <li key={vehiculo.id}>
            {vehiculo.placa} - {vehiculo.modelo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Vehiculos;