import { useState, useEffect } from 'react'
import axios from 'axios'

export default function PokemonApp() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    // Using axios
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then((res) => setPokemon(res.data.results))
      .catch((err) => console.error(err))

    // OR using fetch
    // fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    //   .then(res => res.json())
    //   .then(data => setPokemon(data.results))
  }, []) // Empty array = run once when component mounts

  return (
    <div>
      <h2>Pokémon List</h2>
      <ul>
        {pokemon.map((p, index) => (
          <li key={index}>{p.name}</li>
        ))}
      </ul>
    </div>
  )
}
