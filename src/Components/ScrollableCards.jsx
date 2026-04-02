import React from 'react'
import { motion } from 'framer-motion'
import imagesData from "../Content/Featured"; 

const ScrollableCards = () => { 
  return (
    <motion.div
     initial={{ opacity: 0, y: 60 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.7, ease: "easeOut" }}  
     viewport={{ once: false }}  
     className='mt-10 max-w-[95%] mx-auto'
    >
      <h2 className="text-black text-2xl md:text-3xl font-bold">Featured Collection</h2>
      <p className="text-pink-500 text-sm md:text-base mt-1 mb-6">
        These picks are trending everywhere — don't miss out. 
      </p>
      <motion.div
      initial={{ opacity: 0, y: 60 }} 
     whileInView={{ opacity: 1, y: 0 }} 
     transition={{ duration: 1, ease: "easeOut" }}  
     viewport={{ once: false }}  
      className="w-full px-6 py-6 bg-linear-to-r from-gray-800 via-black to-gray-800 rounded-xl">  
       <div className="overflow-x-auto rounded-xl hide-scrollbar">
        <div className="flex gap-4 min-w-max">  
         {imagesData.map((item) => (
         <div key={item.id} className="min-w-62 h-55">   
         <img
          src={item.image} 
          alt={`img-${item.id}`}
          className="w-full h-full object-cover rounded-xl"
         /> 
         </div> 
         ))}
       </div> 
      </div>
      </motion.div>
    </motion.div>
  ) 
}

export default ScrollableCards
