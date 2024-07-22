// import React from 'react'
// import {FcDeleteDatabase} from 'react-icons/fc'
// import { useDispatch } from 'react-redux'
// import { remove } from '../Slice/cartSlice';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function CartItem({item}) {

//   const dispatch = useDispatch();

//   const removeFromCart =() =>{
//       dispatch(remove(item.id))
//       toast.success('Item removed')
//   }

//   return (
//     <div className='flex flex-col m-30 border-b-4'>
//           <div>
//             <div className='w-[120px] h-[110px]'>
//               <img src={item.image} className='w-full h-full' />
//             </div>

//             <div>
//               <h1>{item.title}</h1>
//               <h1>{item.description}</h1>
//               <div>
//                 {item.price}
//                 <div onClick={removeFromCart}>
//                  <FcDeleteDatabase/>
//               </div>

//               </div>
            
//             </div>

//           </div>
//     </div>
//   )
// }

// export default CartItem


import React from 'react'
import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { remove } from '../Slice/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {MdDeleteSweep} from "react-icons/md"


const CartItem = ({item}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <div className="p-4 border-b-2 last:border-none border-slate-700">

      <div className="flex justify-between py-3.5 px-2.5 gap-14 flex-col md:flex-row">

        <div className="md:w-[30%] w-full flex justify-center items-center">
          <img src={item.image} alt="" className="w-[40%] md:w-[50%] lg:w-full"/>
        </div>
        <div className="md:w-[70%] w-full flex flex-col gap-5">
          <h1 className="text-xl font-[600] text-slate-700">{item.title}</h1>
          <h1 className="text-slate-700">{
            item.description.split(" ").slice(0,15).join(" ") + "..."}
          </h1>
          <div className="flex justify-between">
            <p className="font-bold text-[#16a34a] text-lg">${item.price}</p>
            <div
            onClick={removeFromCart}
            className="w-10 h-10 rounded-full bg-red-200 flex justify-center items-center
             hover:bg-red-400 group transition-all">
              <MdDeleteSweep fontSize={25} className="group-hover:text-white text-red-800 transition-all"/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;