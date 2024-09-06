import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../button/Button.jsx'

export const Item = ({ producto }) => { 
  return (
    <div className="border rounded-lg p-4 text-center">
      <img className="w-full h-auto mb-4" src={producto.imgUrl} alt="imagen" />
      <h2 className="text-lg font-semibold mb-2">{producto.descripcion}</h2>
      <Link to={`/producto/${producto.id}`}>
        <Button clase="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" texto="Ver Detalles" />
      </Link>
    </div>
  )
}


