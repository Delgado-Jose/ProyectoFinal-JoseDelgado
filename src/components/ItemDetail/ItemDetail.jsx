import React, { useContext } from 'react'
import { ItemCount } from '../itemCount/ItemCount'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({producto}) => {
  const {addToCart} = useContext(CartContext)

  const actualizaStock = (cantidad) =>{
    producto.stock -= cantidad
  }

  return (
    <div className="flex font-serif">
      <div className="w-1/3 p-4">
        <img src={producto.imgUrl} alt={producto.descripcion} />
      </div>
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div className="mb-4">
          <h2 className="text-lg mb-2 font-bold">{producto.descripcion}</h2>
          <p className="mb-1">Precio USD: {producto.precio}</p>
          <p className="mb-1">Stock Actual: {producto.stock}</p>
          <p className="mb-4">Categoría: {producto.categoria}</p>
          <ItemCount stock={producto.stock} addToCart={(cantidad) => addToCart(producto, cantidad)} actualizaStock={actualizaStock} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
