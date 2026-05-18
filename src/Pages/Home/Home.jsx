import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <section className='containerPage home'>

    <article className='Info'>
        <h2>¿Qué es Rick and Morty?</h2>
        <p>
          Rick and Morty es una serie animada de ciencia ficción creada por Justin Roiland 
          y Dan Harmon. Sigue las aventuras de Rick Sanchez, un científico brillante pero 
          excéntrico, además de su nieto Morty Smith a través del universo, dimensiones paralelas 
          y mundos alternativos.
        </p>
      </article>

      <article className='curiosidades'>
        <h2>Datos Curiosos 🏹</h2>
        <ul>
          <li>🎥 La serie tiene más de 100 episodios y 7 temporadas.</li>
          <li>🫂 Existen más de 800 personajes registrados en la API.</li>
          <li>🕳️ El portal verde de Rick funciona con fluido de Megaseed.</li>
          <li>🗺️Hay más de 126 ubicaciones distintas en el universo de la serie.</li>
          <li>📺 La primera vez que se estreno fue en diciembre de 2013.</li>
        </ul>
      </article>

      <article className='App'>
        <h2>🧶Sobre esta App:</h2>
        <p>
          Esta aplicación consume la API de Rick and Morty,
          en donde se extrae información basica de cada personaje, 
          asi mismo un poco mas detallada junto a con la imagen de referencia. 
        </p>
      </article>
    
    
    
    </section>
  )
}

export default Home
