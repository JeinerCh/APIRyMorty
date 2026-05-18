import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navegador'>
            <ul>
                <Link to="/Home">Home</Link>
                <Link to="/Personajes">Personajes de Ricky And Morty</Link>
                <Link to="/About">About</Link>
            </ul>
        </nav>
    )
}

export default Navbar
