import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


// Componentes
import Header from './Components/Header/Header.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'


//pages
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Personajes from './Pages/Personajes/Personajes.jsx'
import Error from './Pages/Error/Error.jsx'
import PersonajesDetails from './Pages/PersonajesDetails/PersonajesDetails.jsx'


function App() {

  return (

    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Personajes' element={<Personajes />} />
        <Route path='/About' element={<About />} />
        <Route path='/characters/:id' element={<PersonajesDetails />} />
        <Route path= '*' element={<Error />} />
      </Routes>
      <Footer/>
    </Router>

  )
}

export default App
