import React from 'react'
import CartWidget from '../cartWidget/CartWidget.jsx'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link to='/'><h1 className="text-2xl font-bold">Legendary Tone</h1></Link>
      <div className='flex space-x-4'>
        <NavLink to={`/`} className={({isActive}) => isActive ? 'text-yellow-500' : 'text-white'}>Inicio</NavLink>
        <NavLink to={`/categoria/Guitarras`} className={({isActive}) => isActive ? 'text-yellow-500' : 'text-white'}>Guitarras</NavLink>
        <NavLink to={`/categoria/Bajos`} className={({isActive}) => isActive ? 'text-yellow-500' : 'text-white'}>Bajos</NavLink>
        <NavLink to={`/categoria/Pianos`} className={({isActive}) => isActive ? 'text-yellow-500' : 'text-white'}>Pianos</NavLink>
        <NavLink to={`/categoria/Organos`} className={({isActive}) => isActive ? 'text-yellow-500' : 'text-white'}>Organos</NavLink>
      </div>
      <CartWidget />
    </nav>
  )
}

export default NavBar;
