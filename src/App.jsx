import React from 'react'
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection'
import Banner from './Components/Banner'

const App = () => {
  return (
    <div className='h-full'>
      <Navbar/>
      <Herosection/> 
      <Banner/>
    </div>
  )
}

export default App
