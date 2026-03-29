import React from "react";
import products from "../Content/Home"; 
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const Cards = () => {  
  return (
    <motion.div
     initial={{ opacity: 0, y: 60 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.7, ease: "easeOut" }}
     viewport={{ once: false }} 
     className="max-w-[95%] mx-auto mt-10"> 
      <h2 className="text-black text-2xl md:text-3xl font-bold">Trending Now</h2>
      <p className="text-pink-500 text-sm md:text-base mt-1 mb-6">Discover what's hot right now</p>
 
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">  
        {products.map((item,index) => ( 
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease:"easeOut" , delay: index * 0.08}}
            viewport={{ once: false, margin: "-100px" }}
            className="bg-black p-3 rounded-xl border border-gray-800 hover:border-pink-500/40 hover:scale-105 hover:-translate-y-1 
            transition duration-300 group"
            >
            
            <div className="overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover transition duration-300 group-hover:scale-110"
              />
            </div>

            <div className="mt-3">
              <h3 className="text-white text-sm font-medium">
                {item.title}
              </h3>

              <p className="text-pink-500 font-semibold mt-1"> 
                ${item.price.toFixed(2)}
              </p>

              <div className="flex items-center gap-1 text-gray-400 text-xs mt-1">
               <FaStar className="text-amber-300" />
               <span>{item.rating}</span>
               </div>
            </div> 

          </motion.div>
        ))}

      </div>
    </motion.div>
  );
};

export default Cards;