import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const cartWidget = () => {
  const {cart} = useContext(CartContext)

  const totalCantidad = cart.reduce((total, producto) => total + producto.Cantidad, 0)
  return (
    <Link to='/Cart'>
      <div className='cartWidget'>
          <span role='img' aria-label='cart'>🛒</span>
          <span>{totalCantidad}</span>
      </div>
    </Link>
  )
}

export default cartWidget