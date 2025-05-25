import React from 'react'
import Sidebar from './Components/Sidebar'
import Hero from './Components/Hero'

const App = () => {
  return (
    <div className='h-screen w-full flex'>
      <Sidebar/>
      <Hero/>
    </div>
  )
}

export default App
