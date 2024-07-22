

import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
function Navbar() {

  const cart= useSelector((state) =>state.cart)
  return (
    <div>
     
     <nav className='flex  justify-between items-center h-20 max-w-4xl mx-auto'>

        <NavLink to='/'>
          <div className='ml-5'>
            <img src='../logo.png' className='h-14'/>
          </div>
        </NavLink>

        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6 '>

          <NavLink to='/'>
          <p>Home</p>
          </NavLink>
          <NavLink to='/cart'>

            <div className='relative'>
            <FaShoppingCart/>
          
            {  cart.length >0 &&
             <span className='bg-green-600 absolute -top-2 -right-4 text-x5 w-5 h-5 justify-center items-center flex
             place-items-center animate-bounce rounded-full text-white '>{cart.length}</span>}
            </div>

          </NavLink>
         
        </div>
     </nav>

    </div>
  )
}

export default Navbar