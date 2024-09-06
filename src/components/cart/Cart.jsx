/*import React, {useContext} from 'react'
import CartItem from '../cartItem/CartItem'
import { CartContext } from '../../context/CartContext'
import { Button } from '../button/Button'
import { Link } from 'react-router-dom'


const Cart = () => {
  const {cart, clean} = useContext(CartContext)

  return (
    <div>
      {cart.map(e => {
        return(
          <CartItem producto={e} key={e.id}/>
        )
      })}
       <div className="flex items-center space-x-4 font-serif p-4 border-b border-gray-200"> 
        <Button clase="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" funcion={clean} texto="Limpiar todo" />
        <Link to='/Checkout'>
          <Button clase="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" texto="Finalizar Compra" disabled={cart.length === 0}/>
        </Link>
      </div>
    </div>
  )
}

export default Cart*/
import React, { useContext } from 'react';
import CartItem from '../cartItem/CartItem';
import { CartContext } from '../../context/CartContext';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, clean } = useContext(CartContext);

  return (
    <div>
      {cart.map(e => (
        <CartItem producto={e} key={e.id} />
      ))}
      <div className="flex items-center space-x-4 font-serif p-4 border-b border-gray-200">
        <Button clase="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" funcion={clean} texto="Limpiar todo" />
        {cart.length === 0 ? (
          <Button clase="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" texto="Finalizar Compra" disabled={true} titulo="Atención" mensaje="No hay productos en el carrito para finalizar la compra."/>
        ) : (
          <Link to='/Checkout'>
            <Button clase="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" texto="Finalizar Compra" disabled={false} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;

