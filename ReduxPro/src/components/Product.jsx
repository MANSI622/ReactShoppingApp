import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add, remove} from '../Slice/cartSlice'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product({data}) {
    const cart = useSelector((state) =>state.cart)
    const dispatch =useDispatch();
    const addToCart =() =>{
      dispatch(add(data))
      toast.success('Item added to Cart');
    }

    const removeFromCart =() =>{
      dispatch(remove(data.id))
      toast.error('Item removed from cart')
    }
    // shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]
  return (
    

    <div className='flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline'>

      <div>
      <p className='font-semibold text-gray-700 text-lg text-left truncate w-40 mt-1'>{data.title}</p>
      </div>

      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left '>{data.description.split(" ").slice(0,10).join(" ")+"...."}</p>
      </div>

     <div className='h-[110px]'>
      <img src={data.image} className='w-full h-full'  />
     </div>

<div className='flex justify-between items-center mt-4 gap-12 w-full'>

         <div>
       <p className='text-green-600 font-semibold'> ${data.price}</p>
     </div>

      {
        cart.some((p) =>p.id === data.id)?
        (<button  
          className ='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px]
          p-1 px-3 uppercase
          hover:bg-gray-700 hover:text-white transition duration-200 ease-in' onClick={removeFromCart}>Remove Item </button> )
        : (<button
          className ='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px]
          p-1 px-3 uppercase
          hover:bg-gray-700 hover:text-white transition duration-200 ease-in'
           onClick={addToCart}> Add to cart</button>)
      }

</div>
     
    </div>
  )
}

export default Product

