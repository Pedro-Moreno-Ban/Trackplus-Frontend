import React from 'react';

const Alerta = ({ tipo, mensaje }) => {
  const estilos = {
    error: 'bg-red-100 text-red-700 p-4 rounded',
    loading: 'bg-blue-100 text-blue-700 p-4 rounded',
  };

  return (
    <div className={estilos[tipo]}>
      {tipo === 'loading' ? '⏳ ' : '⚠ '}
      {mensaje}
    </div>
  );
};

export default Alerta;