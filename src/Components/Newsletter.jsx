import card1 from "../Images/card1.jpg";  
import card2 from "../Images/card2.jpg"; 
import card3 from "../Images/card3.jpg"; 
import card4 from "../Images/card4.jpg"; 
import card5 from "../Images/card5.jpg"; 
import { motion } from 'framer-motion'
     
const Newsletter = () => { 
  return ( 
    <motion.div  
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}   
    viewport={{ once: false }}  
    className='flex flex-col lg:flex-row gap-10 mt-14 mx-auto max-w-[95%] items-center'
    >
      
      {/* Newsletter */}
      <div className='w-full lg:w-[50%] bg-black p-6 md:p-8 rounded-2xl'>
         <h2 className='text-white text-xl md:text-2xl font-bold'> 
            Unlock Exclusive Deals & Offers
         </h2>
         <p className="text-gray-400 mt-2 text-sm md:text-base">
          Subscribe to get latest trends, exclusive deals & offers.
        </p>
        <input type="email" placeholder='Enter your email'
        className="w-full mt-4 p-3 rounded-lg bg-gray-800 text-white outline-none"
        /> 
        <button className="w-full mt-4 bg-pink-500 py-3 rounded-lg text-white font-semibold hover:bg-pink-600 transition"> 
          Subscribe
        </button>
      </div>

      {/* Cards */} 
      <div className='w-full lg:w-[50%] flex justify-center'> 
        <div className='relative w-full max-w-lg md:max-w-2xl h-72 md:h-80 flex items-center justify-center group'> 
         
         <div className='absolute w-40 sm:w-44 md:w-52 h-56 sm:h-60 md:h-72 rounded-xl overflow-hidden shadow-lg transform -rotate-12 -translate-x-7.5 transition-all duration-500 ease-in-out group-hover:rotate-[-25deg] group-hover:-translate-x-32.5 group-hover:-translate-y-6 z-10 group-hover:shadow-pink-500/20'>
          <img src={card3} className="w-full h-full object-cover" />
         </div>  

         <div className="absolute w-40 sm:w-44 md:w-52 h-56 sm:h-60 md:h-72 rounded-xl overflow-hidden shadow-lg transform -rotate-6 -translate-x-3.75 transition-all duration-500 ease-in-out group-hover:-rotate-12 group-hover:-translate-x-17.5 group-hover:-translate-y-10 z-10 group-hover:shadow-pink-500/20"> 
            <img src={card2} className="w-full h-full object-cover" />
         </div> 

          <div className="absolute w-40 sm:w-44 md:w-52 h-56 sm:h-60 md:h-72 rounded-xl overflow-hidden shadow-lg transform rotate-0 transition-all duration-500 ease-in-out group-hover:-translate-y-5 z-20 scale-105 group-hover:scale-110 group-hover:shadow-pink-500/20">
            <img src={card1} className="w-full h-full object-cover" />
          </div>

          <div className="absolute w-40 sm:w-44 md:w-52 h-56 sm:h-60 md:h-72 rounded-xl overflow-hidden shadow-lg transform rotate-6 translate-x-3.75
          transition-all duration-500 ease-in-out group-hover:rotate-12 group-hover:translate-x-17.5 group-hover:-translate-y-10 z-10 group-hover:shadow-pink-500/20"> 
            <img src={card4} className="w-full h-full object-cover" />
          </div>

          <div className="absolute w-40 sm:w-44 md:w-52 h-56 sm:h-60 md:h-72 rounded-xl overflow-hidden shadow-lg transform rotate-12 translate-x-7.5 transition-all duration-500 ease-in-out group-hover:rotate-25 group-hover:translate-x-32.5 group-hover:-translate-y-6 z-10 group-hover:shadow-pink-500/20">
            <img src={card5} className="w-full h-full object-cover" /> 
          </div> 
 
        </div> 
      </div>
    </motion.div>
  )
}

export default Newsletter
