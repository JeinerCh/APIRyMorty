import { useEffect, useState } from 'react'
import './Personajes.css'
import CardCharacters from '../../Components/CardCharacters/CardCharacters';
import { Link } from 'react-router-dom';

const Personajes = () => {

  const [characters, setCharacters] = useState([]);
  const [filtrarespe, setFiltrarespe] = useState('Todas');
  const [loading, setLoading] = useState(true);
  const [consultar, setConsultar] = useState('');

  useEffect(() => {
    const fetchAllPersonajes = async () => {
      try {
        let allPersonajes = [];
        let url = 'https://rickandmortyapi.com/api/character';

        while (url) {
          const response = await fetch(url);
          const data = await response.json();
          allPersonajes = [...allPersonajes, ...data.results];
          url = data.info.next;
        }

        setCharacters(allPersonajes);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching characters:', error);
        setLoading(false);
      }
    };

    fetchAllPersonajes();
  }, []);

  const charactersFiltrados = characters
  .filter(c => filtrarespe === 'Todas' || c.species === filtrarespe)
  .filter(c => c.name.toLowerCase().includes(consultar.toLowerCase()));

  return (
    <div className='containerPage persons'>

      <div className='filtro-container'>

        <select className='selecionarFilt'
          value={filtrarespe}
          onChange={(e) => setFiltrarespe(e.target.value)}
        >
          <option value="Todas">Todas las especies/Pjs</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
          <option value="Robot">Robot</option>
          <option value="Mythological Creature">Mythological Creature</option>
          <option value="Animal">Animal</option>
          <option value="unknown">Unknown</option>
        </select>

        
        <input className='buscar' type='text'
          placeholder='Buscar personaje por nombre...'
          value={consultar}
          onChange={(e) => setConsultar(e.target.value)}
        />
      </div>

      {loading ? (
        <p className='noresults'>Cargando personajes de RyM...</p>
      ) : charactersFiltrados.length === 0 ? (
        <p className='noresults'>No hay personajes de esa especie.</p>
      ) : (
        charactersFiltrados.map(character => (
          <Link key={character.id} to={`/characters/${character.id}`} style={{ textDecoration: 'none' }}>
            <CardCharacters name={character.name} image={character.image} status={character.status} species={character.species} gender={character.gender} />
          </Link>
        ))
      )
      }

    </div>
  )
}

export default Personajes
