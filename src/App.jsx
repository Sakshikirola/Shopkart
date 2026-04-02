import React from 'react'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Shop from './Components/Shop' 
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='h-full'> 
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        {/* <Route path='/men' element={<Men/>}/>  
        <Route path='/women' element={<Women/>}/>
        <Route path='/kids' element={<Kids/>}/> */}
        {/* <Route path='/cart' element={<Cart/>}/> */} 
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
