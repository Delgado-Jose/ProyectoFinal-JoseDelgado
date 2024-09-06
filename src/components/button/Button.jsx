import React from 'react';
import Swal from 'sweetalert2';

export const Button = ({ clase, funcion, texto, disabled, mensaje, titulo }) => {
  const handleClick = () => {
    if (disabled) {
      Swal.fire({
        icon: "info",
        title: titulo,
        text: mensaje,
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      funcion()
    }
  };
  return (
    <button className={clase} onClick={handleClick}>{texto}</button>
  );
};


