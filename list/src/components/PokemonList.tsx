import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface Pokemon {
  name: string
  url: string
}

const PokemonList = () => {
  const [pkmns, setPkmns] = useState<Pokemon[]>([])

  useEffect(() => {
    const execute = async () => {
      try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon')
        setPkmns(res.data.results)
      } catch (e) {}
    }

    execute()
  }, [])

  return (
    <div className='text-center'>
      <h1 className='text-4xl'>Pokemon List</h1>
      <div>
        {pkmns.length > 0 &&
          pkmns.map(pkmn => (
            <p className='text-white' key={pkmn.name}>
              {pkmn.name}
            </p>
          ))}
      </div>
    </div>
  )
}

export default PokemonList
