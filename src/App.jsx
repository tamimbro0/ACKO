import React from 'react'
import './App.css'

import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import Trust from './Components/Trust/Trust'
import Founder from './Components/Founder/Founder';

import Footer from './Components/Footer/Footer'

import AppsLink from './Components/AppsLink/AppsLink';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      <Trust />

      <Founder />

      <AppsLink />

      <Footer />
      
    </div>
  )
}

export default App
