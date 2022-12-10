import React, { useEffect, useRef } from 'react'
import {MdShoppingBasket} from "react-icons/md"
import {motion} from "framer-motion"
import { useStatevalue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { useState } from 'react';


const RowContainer = ({flag, data, scrollValue}) => {
  console.log(data);
  const rowContainer = useRef();

  const [items, setItems] = useState([])

  const [{cartItems}, dispatch] = useStatevalue();

  const addtocart = ()=>{
   
  dispatch({
    type : actionType.SET_CARTITEMS,
    cartItems : items,
  });
  localStorage.setItem('cartItems', JSON.stringify(items))
  };

  useEffect(()=>{
  rowContainer.current.scrollLeft += scrollValue
  },[scrollValue]);

  useEffect(()=>{
    addtocart()
  }, [items])

  return (
    <div 
    ref={rowContainer}
    className={`w-full flex items-center gap-3 my-12 scroll-smooth
     ${ flag ? 'overflow-x-scroll scrollbar-none':'overflow-x-hidden flex-wrap justify-center'}`}>

      {data && data.map((item) => (
       <div key={item.id} 
       className='w-300 h-[225px] min-w-[300px] md:min-w-[340px] md:w-340  bg-cardOverlay my-12 rounded-lg p-2 backdrop-blur-lg 
       hover:drop-shadow-lg flex flex-col items-center justify-between'>
       <div className="w-full flex items-center justify-between">
         <motion.div whileHover={{ scale :1.2 }}
         className="w-40 h-40 -mt-8 drop-shadow-2xl ">
         <img 
          src={item?.imageURL}
          alt=""
          className='w-full h-full object-contain'
          />
         </motion.div>
         <motion.div 
         whileTap={{scale: 0.75 }}
         className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center
         cursor-pointer hover:shadow-md"
         onClick={()=>  setItems([...cartItems, item])}>
           <MdShoppingBasket className="text-white"/>
         </motion.div>
        </div> 
         <div className="w-full flex flex-col items-end justify-end">
           <p className="text-textColor font-semibold text-base md:text-lg">{item?.title}</p>
           <p className="mt-1 text-sm text-gray-500" >{item?.calories} Calories</p>
           <div className='flex items-center gap-8'>
             <p className='text-sm text-headingColor font-semibold'>
               <span className='text-sm text-red-500'>$</span>{item?.price}
             </p>
           </div>
         </div>
     </div>
      ))}
    </div>
  )
}

export default RowContainer;