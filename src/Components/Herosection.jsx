import Heroimage from "../Images/hero-image.png"
import { FaMapMarkerAlt, FaTruck } from 'react-icons/fa'

const Herosection = () => {
  return (
    <div className='bg-linear-to-r from-pink-400 to-pink-300 h-125 max-w-[95%] mx-auto mt-4 flex items-center justify-between 
    shadow-[0_10px_40px_rgba(236,72,153,0.35)] rounded-2xl p-6'>
      {/* Hero-content  */} 
      <div className='ml-10 max-w-150'> 
       <h1 className='text-black font-bold text-6xl md:text-7xl font-playfair leading-[1.05] tracking-wide'>FIND YOUR</h1>
       <h1 className='text-white text-stroke font-bold text-6xl md:text-7xl font-playfair leading-[1.05] tracking-wide'>PERFECT FIT,</h1>
       <h1 className='text-black font-bold text-6xl md:text-7xl font-playfair tracking-wide leading-[1.05]'>EVERY TIME.</h1>
       <p className='mt-4 text-white/90 text-xl'>Discover fashion that reflects who you truly are.</p>
       <p className='text-white/90 text-xl'>Shop Styles You'll Love to Live In.</p> 
       <button className="mt-6 px-7 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300">
         Shop Now
       </button>
      </div>

      <div className='flex flex-col gap-10'>

      <div className='flex flex-col items-center'>
       <div className='w-16 h-16 border border-pink-600 rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(236,72,153,0.35)]'>
        <FaTruck className='text-pink-600 text-3xl'/>
       </div>
       <h2 className='text-2xl font-semibold mt-2'>750K+</h2>
       <p className='text-sm text-black/50'>Product Delivered</p> 
      </div>

      <div className='flex flex-col items-center'>
       <div className='w-16 h-16 border border-pink-600 rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(236,72,153,0.35)]'>
        <FaMapMarkerAlt className='text-pink-600 text-3xl'/> 
       </div>
       <h2 className='text-2xl font-semibold mt-2'>100+</h2>
       <p className='text-sm text-black/50'>Cities and Areas</p>   
      </div>

</div>

      {/* Heroimage */}
      <div className='flex justify-center items-end h-full'>  
       <img src={Heroimage} alt="heroimage" className='object-contain max-h-[125%] translate-y-6'/> 
      </div> 
    </div> 
  )
}

export default Herosection 
