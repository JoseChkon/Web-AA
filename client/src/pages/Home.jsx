import React from 'react'
import Header from '../layouts/General/Header'
import Info from '../layouts/Home/Info'
import JoinUs from '../components/JoinUs'
import Carrusel from '../layouts/Home/Carrusel'
import Footer from '../layouts/General/Footer'

export default function Home() {
  return (
    <div className='h-screen'>
      <Header/>
      <Info/>
      <JoinUs/>
     
      <Footer/>
    </div>
  )
}
