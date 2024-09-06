import React, { useContext } from 'react';
import { Button } from '../button/Button.jsx'
import { CartContext } from '../../context/CartContext.jsx';


const CartItem = ({ producto }) => {
  const {deleteItem} = useContext(CartContext)
  return (
    <>
      <div className="flex items-center space-x-4 font-serif p-4 border-b border-gray-200">
        <div>
          <img
            className="max-h-8 object-cover"
            src={producto.imgUrl}
            alt={producto.descripcion}
            style={{ maxHeight: '70px', width: 'auto' }}
          />
        </div>
        <div className="flex">
          <span className="block text-lg font-bold p-4">{producto.descripcion}</span>
          <span className="block text-gray-600 p-4">Precio USD: {producto.precio}</span>
          <span className="block text-gray-600 p-4">Cantidad: {producto.Cantidad}</span>
          <Button clase="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" funcion={()=>deleteItem(producto.id)} texto="❌" />
        </div>
      </div>
    </>

    

    
  );
};

export default CartItem;


