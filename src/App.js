import React, { useEffect, useState } from 'react'
import { CreateContainer, Header, MainContainer } from './components';
import {Route,Routes} from 'react-router-dom';
import {AnimatePresence} from "framer-motion";
import { useStatevalue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { actionType } from './context/reducer';

function App() {
  const [{foodItems}, dispatch] = useStatevalue();
  
  const fetchData = async ()=>{
    await getAllFoodItems().then(data=>{
      dispatch({
        type : actionType.SET_FOOD_ITEMS,
        foodItems : data,
      });
    });
  };
 
  useEffect(()=>{
    fetchData();
  },[]);

  return (

    <AnimatePresence >
    <div className='w-screen h-auto flex flex-col bg-primary'>
      <Header />
      <main className="mt-14 md:mt-20 px-4 md:px16 py-4 w-full">
        <Routes>
          <Route path='/*' element={<MainContainer/>}></Route>
          <Route path='/createItem' element={<CreateContainer />}></Route>
        </Routes>
      </main>
    </div>
    </AnimatePresence>
    )
}

export default App;