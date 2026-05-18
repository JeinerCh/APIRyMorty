import React from 'react'
import './Header.css'
import image from '../../img/RyM1.png'
import image2 from '../../img/RyM2.png'


const Header = () => {
  return (
    <header>
      <img className='Imagen1' src={image}>
      </img>
      <h1 >Aplicación Web Basada en el Consumo de la API de Rick and Morty</h1>     
      <img className='Imagen2' src={image2}></img>
    </header>
  )
}

export default Header
