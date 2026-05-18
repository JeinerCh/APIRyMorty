import { useEffect, useState } from 'react'
import './PersonajesDetails.css'
import { useNavigate, useParams } from 'react-router-dom'

const PersonajesDetails = () => {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
useEffect(() => {
    setLoading(true);
    setError(null);
    
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
            if (!response.ok) throw new Error('Personaje no encontrado');
            return response.json();
        })
        .then(data => {
            setCharacter(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching character details:', error);
            setError('Se presentó un error al cargar el personaje.');
            setLoading(false);
        });
}, [id]); 

    return (
        <div className='container'>

            {error ? (
                <p className='mensajerror'>{error}</p>

            ) : loading ? (
                <p className='mensajerror'>Cargando detalles del personaje...</p>

            ) : (
                <div className='cartadetalle'>
                    <img src={character.image} alt={character.name} className='imgdetails' />

                    <div className='masinfo'>
                        <h1 className='nombre'>{character.name}</h1>
                        <p><strong>Estado:</strong> {character.status}</p>
                        <p><strong>Especie:</strong> {character.species}</p>
                        <p><strong>Género:</strong> {character.gender}</p>
                        <p><strong>Origen:</strong> {character.origin.name}</p>
                        <p><strong>Última ubicación:</strong> {character.location.name}</p>
                        <p><strong>Episodios:</strong> {character.episode.length}</p>

                        <button className='botton' onClick={() => navigate(-1)}>
                            ⬅️ Volver
                        </button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default PersonajesDetails