import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import I1 from "../img/i1.png"
import { heroData } from '../utils/data'



const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2" id="Home">
    <div className="px-8 py-2 flex flex-1 flex-col items-start md:items-center justify-center gap-4">
      <div className="flex items-center gap-2  bg-orange-100 px-2 py -1 rounded-full">
        <p className="text-base text-orange-500 font-semibold">Bike Delivery</p>
        <div className="w-6 h-6 rounded-full overflow-hidden"></div>
      <img src={Delivery} 
       className="w-8 object-contain" 
       alt="delivery"/>
      </div>

      <p className="text-[2.5rem] font-bold tracking-wide text-headingColor">
        The Fastest Delivery in <span className="text-orange-600 text-[3rem]">Your City </span>
      </p>
      <p className="text-base text-center md:text-left text-textColor">
      Lorem ipsum dolor sit amet. Qui recusandae nisi aut assumenda quam ut minus incidunt a laboriosam quos ut rerum quasi.
      </p>
      <button type="button" className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">
        Order Now
      </button>
    </div>
    <div className="px-8 py-2 flex-1 items-center relative">
    <img src={HeroBg} className="ml-auto h-420 w-full lg:w-auto lg:h-650"></img>
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap">
         {heroData && heroData.map(n=>(<div key={n.id} className=" lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
            <img src={n.imageSrc} className="w-20 lg:w-40 -mt-10 lg:-mt-20"></img>

        <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4 ">{n.name}</p>
        <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">{n.decp}</p>
        <p className="text-sm font-semibold text-headingColor">
          <span className="text-xs text-red-600">$</span>{n.price}</p>
          </div>))}
        </div>
    </div>
    </section>
  )
}

export default HomeContainer