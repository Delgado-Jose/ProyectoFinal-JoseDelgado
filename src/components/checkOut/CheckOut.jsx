import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, clean } = useContext(CartContext);
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    tarjeta: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: '¡Compra Confirmada!',
      text: 'Gracias por tu compra. Tu carrito ha sido limpiado.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    }).then(() => {
      clean(); 
      setForm({
        nombre: '',
        apellido: '',
        email: '',
        tarjeta: ''
      }); 
      navigate('/'); 
    });
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-2xl mb-4 font-bold">Datos de Compra</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Nombre:</label>
          <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block mb-1">Apellido:</label>
          <input type="text" name="apellido" value={form.apellido} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block mb-1">Correo Electrónico:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block mb-1">Número de Tarjeta:</label>
          <input type="number" name="tarjeta" value={form.tarjeta} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block mb-1">Validez:</label>
          <input type="text" name="validez" value={form.validezTarjeta} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block mb-1">CVC:</label>
          <input type="number" name="cvc" value={form.cvcTarjeta} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Confirmar Compra
        </button>
      </form>
    </div>
  );
};

export default Checkout;