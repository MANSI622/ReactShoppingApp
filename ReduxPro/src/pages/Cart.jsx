// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import CartItem from '../components/CartItem';
// import { Link } from 'react-router-dom';

// function Cart() {
//     const cart = useSelector((state) => state.cart);
   

//     const[totalAmount ,settotalAmount] =useState(0);

//     useEffect (() =>{
//         settotalAmount(cart.reduce((acc,curr)  =>acc+curr.price ,0));
//     } ,[cart])

//   return (
//     <div>
//             {
//                     cart.length > 0 ?
//             ( <div  className='flex flex-row w-[550px] justify-between items-center p-34 '>
                    
//              {
               
//           cart.map((item) =>{
            
//      return ( 
        
//         <div className='flex flex-col'>
//      <CartItem key ={item.id}  item={item} />
//      </div>
//             )
           
//              })  }
                   


    
//     <div className='flex flex-col'>
//     <div>YOur cart  </div>
//     <div>Summary</div>
//     <p>
//         <span>Total Items :{cart.length}</span>
//         <button>CheckOut now</button>
//     </p>
//     </div>
               
//                <div>
//                 <p>Total Amount :{totalAmount}</p>
//                 </div>
//          </div>
//                   )
//                  :(

//                     <div>
//                     <h1> cart Empty</h1>
//                     <Link to ={"/"}>
//                         <button>
//                             Shop Now
//                         </button>
//                     </Link>
//                     </div>
//                 )
//             }
 
//     </div>
//   )
// }

// export default Cart



import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

function Cart() {
    const cart = useSelector((state) => state.cart);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);

    return (
        <div className="p-4">
            {cart.length > 0 ? (
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="flex flex-col space-y-4 w-full md:w-2/3">
                        {cart.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>
                    <div className="flex flex-col items-center bg-white p-4 shadow-md rounded-md w-full md:w-1/3 mt-4 md:mt-0">
                        <h2 className="text-2xl font-semibold">Your Cart</h2>
                        <h3 className="text-xl font-medium mt-2">Summary</h3>
                        <p className="mt-2">
                            <span className="font-semibold">Total Items: </span>{cart.length}
                        </p>
                        <p className="mt-2">
                            <span className="font-semibold">Total Amount: </span>${totalAmount.toFixed(2)}
                        </p>
                        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Check Out Now</button>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center mt-8">
                    <h1 className="text-3xl font-bold">Cart is Empty</h1>
                    <Link to="/" className="mt-4">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                            Shop Now
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Cart;
