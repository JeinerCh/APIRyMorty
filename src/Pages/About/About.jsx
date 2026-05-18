import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='containerPage about'>

      <section className='titulo'>
        <h1>Sobre este Proyecto</h1>
        <p>Una aplicación web desarrollada con React y JS que consume la API pública de Rick and Morty.</p>
      </section>

      <section className='cards'>

        <div className='card'>
          <h3>🫂La API🫂</h3>
          <p>La Rick and Morty API es una API  pública y gratuita con información de más de 800 personajes, 126 ubicaciones y 51 episodios de la serie, en la cual se consumio para la elaboración de esta aplicación.</p>
          <a href='https://rickandmortyapi.com' >RickandMortyapi.com: ir</a>
        </div>

        <div className='card'>
          <h3>📱Desarrollado con:🧑🏿‍💻</h3>
          <ul>
            <li>React.js</li>
            <li>React Router DOM</li>
            <li>MUI</li>
            <li>CSS</li>
            <li>Vite</li>
          </ul>
        </div>

        <div className='card'>
          <h3>👩🏿‍💻Desarrollador👩🏿‍💻</h3>
          <p>Proyecto desarrollado por: Jeiner Chacon Plaza, estudiante del curso de programación Web (UDLA).</p>
        </div>

      </section>

    </div>
  )
}

export default About