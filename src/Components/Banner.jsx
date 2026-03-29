import React from 'react'
import Bag from '../Images/Bag.png'
import { motion } from 'framer-motion'

const Banner = () => {
  return ( 
    <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: false }} 
    className='flex flex-row items-center mx-auto mt-6 max-w-[95%] rounded-2xl overflow-hidden
    bg-linear-to-r from-gray-800 via-black to-gray-800 py-1 px-4 sm:px-6 md:px-8 gap-6 sm:gap-10 md:gap-8'> 

      <div className='w-1/2 flex justify-center items-end'> 
        <img src={Bag} alt="bag" className='h-32 sm:h-40 md:h-52 lg:h-60 object-contain drop-shadow-[0_10px_30px_rgba(255,105,180,0.3)]'/> 
      </div>  

      <div className='flex flex-col items-center text-center'> 
        <h1 className='text-white font-bold text-lg sm:text-xl md:text-3xl lg:text-6xl leading-[1.1] tracking-wide drop-shadow-sm'>
            FLAT 50% OFF
        </h1>
        <p className='mt-1.5 text-sm sm:text-base md:text-lg text-gray-300'>
           On your first purchase. Limited time offer!
       </p>
       <button className='mt-3 px-4 py-1 sm:px-7 sm:py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-pink-500/40 transition-all duration-300 hover:scale-105 active:scale-95'>  
          Shop Now
       </button>
      </div>
    </motion.div> 
  ) 
}

export default Banner