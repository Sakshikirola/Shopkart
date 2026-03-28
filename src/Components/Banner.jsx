import React from 'react'
import Bag from '../Images/Bag.png'

const Banner = () => {
  return (
    <div className='flex flex-row items-center mx-auto mt-6 max-w-[95%] rounded-2xl overflow-hidden
    bg-linear-to-r from-gray-800 via-black to-gray-800 py-1 px-4 sm:px-6 md:px-8 gap-6 sm:gap-10 md:gap-8'> 

      <div className='w-[45%] flex justify-center items-end'> 
        <img src={Bag} alt="bag" className='h-32 sm:h-40 md:h-52 lg:h-60 object-contain'/>
      </div>  

      <div className='w-[60%] flex flex-col items-center text-center'> 
        <h1 className='text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-6xl leading-[1.1] tracking-wide drop-shadow-sm'>
            FLAT 50% OFF
        </h1>
        <p className='mt-1.5 text-sm sm:text-base md:text-lg text-gray-300'>
           On your first purchase. Limited time offer!
       </p>
       <button className='mt-2.5 px-6 py-2 sm:px-7 sm:py-2.5 bg-pink-500 hover:bg-pink-600 rounded-full transition'>
          Shop Now
       </button>
      </div>
    </div>
  )
}

export default Banner