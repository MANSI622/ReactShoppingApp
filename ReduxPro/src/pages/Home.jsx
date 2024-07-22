import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import Spinner from '../components/Spinner';
function Home() {

  const [data,setdata] =useState([]);
  const[loading ,setLoading] =useState(false);

    const API_URL ='https://fakestoreapi.com/products' ;

  const fetchProductData = async() =>{
    setLoading(true);
    try{

       const res= await fetch(API_URL)
       const datas = await res.json()
       setdata(datas)
  
    }
    catch(error){
      console.log('error in fetching dataa')
          console.log(error);
            setdata([])
    }

    setLoading(false);
    }

    useEffect(() =>{
           fetchProductData();
    } ,[])

    
  return (
    <div>
        {
            loading ? <Spinner/> :
    
                data.length > 0 ?
                (  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[10px] '>
                {
                data.map((d) =>  {
                  return(
                  <div   > 
                  <Product  key ={d.id} data= {d}/>
                  </div>
                )})
                      }
                </div>)
                 :

                
                <div className='flex justify-center items-center'>
                  <p>No Data Found </p>
                  </div>
                
        }
    </div>
  )
}
export default Home