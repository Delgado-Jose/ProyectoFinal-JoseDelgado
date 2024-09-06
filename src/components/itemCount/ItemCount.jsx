import React, { useState } from 'react'
import { Button } from '../button/Button.jsx'

export const ItemCount = ({ stock, addToCart }) => {
  const [cantidad, setCantidad] = useState(1)

  const incrementar = () => {
    if (cantidad < stock)
      setCantidad(cantidad + 1)
  }

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  return (
    <div className="flex-col items-center space-y-2">
      <div className="flex space-x-2 items-center">
        <Button clase="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded" funcion={decrementar} texto="-" />
        <h4 className="text-xl">{cantidad}</h4>
        <Button clase="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded" funcion={incrementar} texto="+" />
      </div>
      <Button clase="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" funcion={()=>addToCart(cantidad)} texto="Agregar al Carrito" />
    </div>
  )
}
