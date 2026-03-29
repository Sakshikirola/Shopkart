import Heroimage from "../Images/hero-image.png"
import { FaMapMarkerAlt, FaTruck } from 'react-icons/fa'

const HeroSection = () => { 
  return (
    <div className='bg-linear-to-r from-pink-400 to-pink-300 lg:h-125 max-w-[95%] mx-auto mt-4 flex flex-col lg:flex-row items-center justify-between 
    shadow-[0_10px_40px_rgba(236,72,153,0.35)] rounded-2xl p-4 sm:p-6 lg:p-6'>
      {/* Hero-content  */} 
      <div className='lg:ml-10 max-w-full lg:max-w-150 text-center lg:text-left'> 
       <h1 className='text-black font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair leading-[1.05] tracking-wide'>FIND YOUR</h1>
       <h1 className='text-white text-stroke font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair leading-[1.05] tracking-wide'>PERFECT FIT,</h1>
       <h1 className='text-black font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair tracking-wide leading-[1.05]'>EVERY TIME.</h1>
       <p className='mt-4 text-white/90 text-sm sm:text-base md:text-lg lg:text-xl'>Discover fashion that reflects who you truly are.</p>
       <p className='text-white/90 text-sm sm:text-base md:text-lg lg:text-xl'>Shop Styles You'll Love to Live In.</p> 
       <button className="mt-6 px-7 py-3 sm:px-6 sm:py-3  bg-black text-white rounded-full transition-all duration-300 hover:drop-shadow-md active:scale-95 hover:scale-105">
         Explore Now 
       </button> 
      </div>

      <div className='flex flex-row lg:flex-col gap-6 sm:gap-10 mt-6 lg:mt-0'>

      <div className='flex flex-col items-center'>
       <div className='w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border border-pink-600 rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(236,72,153,0.35)]'>
        <FaTruck className='text-pink-600 text-xl sm:text-2xl lg:text-3xl'/>
       </div>
       <h2 className='text-lg sm:text-xl lg:text-2xl font-semibold mt-2'>750K+</h2>
       <p className='text-xs sm:text-sm text-black/50'>Product Delivered</p> 
      </div>

      <div className='flex flex-col items-center'>
       <div className='w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border border-pink-600 rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(236,72,153,0.35)]'>
        <FaMapMarkerAlt className='text-pink-600 text-xl sm:text-2xl lg:text-3xl'/> 
       </div>
       <h2 className='text-lg sm:text-xl lg:text-2xl font-semibold mt-2'>100+</h2>
       <p className='text-xs sm:text-sm text-black/50'>Cities and Areas</p>   
      </div>

</div>

      {/* Heroimage */}
      <div className='flex justify-center items-end h-full w-full lg:w-auto mt-auto'>   
       <img src={Heroimage} alt="heroimage" className='object-contain max-h-75 sm:max-h-100 lg:max-h-[125%] 
        translate-y-4 md:translate-y-6 lg:translate-y-6'/>  
      </div>  
    </div> 
  )
}

export default HeroSection 