import logo from '../Images/logo.png' 
import { FaCartShopping } from 'react-icons/fa6'
import { motion } from "framer-motion"
import { HiMenu, HiX } from 'react-icons/hi'
import { useState } from 'react'

const Navbar = () => {

  const [open, setOpen] = useState(false) 

  return (
    <div className='w-full px:6 md:px-8 py flex justify-between items-center'> 
      <div className="flex items-center font-bold text-2xl leading-none"> 
        <img src={logo} alt="logo" className='w-10 h-10 md:w-12 md:h-12 object-contain'/> 
        <span>ShopKart</span> 
      </div>

      <div className='hidden md:flex gap-8'> 
        <p className='cursor-pointer hover:text-pink-600 transition'>Shop</p>
        <p className='cursor-pointer hover:text-pink-600 transition'>Men</p>
        <p className='cursor-pointer hover:text-pink-600 transition'>Women</p>
        <p className='cursor-pointer hover:text-pink-600 transition'>Kids</p>
      </div>
 
      <div className='flex gap-4 items-center'>  
       <div className='hidden md:block'>
        <motion.button className="relative overflow-hidden border px-5 py-1 rounded-full hover:text-white"
        initial="initial"
        whileHover="hover"  
        >
        <motion.span
         variants={{
           initial: { width: 0 },
           hover: { width: "100%" }  
         }}  
         transition={{ duration: 0.5, ease: "easeInOut" }}  
         className="absolute left-0 top-0 h-full bg-pink-500 rounded-full"  
        />
        <span className="relative z-10 transition duration-300">Login</span> 
        </motion.button> 
       </div> 

        <h1 className='text-xl cursor-pointer hover:scale-110 transition'><FaCartShopping/></h1>
        <div className='md:hidden text-2xl cursor-pointer' onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenu />}
        </div> 

        {/* Menu section for mobile view */}  
        {open && (
        <div className='absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden'>
          <p className='hover:text-pink-600'>Shop</p>
          <p className='hover:text-pink-600'>Men</p>
          <p className='hover:text-pink-600'>Women</p>
          <p className='hover:text-pink-600'>Kids</p> 

          <motion.button 
            className="relative overflow-hidden border px-5 py-1 rounded-full hover:text-white"
            initial="initial"
            whileHover="hover"
          >
            <motion.span
              variants={{
                initial: { width: 0 },
                hover: { width: "100%" }  
             }} 
             transition={{ duration: 0.5 }}  
              className="absolute left-0 top-0 h-full bg-pink-500 rounded-full"  
            />
            <span className="relative z-10">Login</span> 
          </motion.button>
        </div>
      )} 
      </div> 
    </div>
  )
}

export default Navbar 