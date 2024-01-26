import React, { useState, useEffect } from 'react';

function Pokemon() {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/250')
      .then((response) => response.json())
      .then((data) => setPokemonData(data));
  }, []);

  return (
    <div className="pokemon">
      <h1>My Pokemon</h1>
      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
          />
        </div>
      )}
    </div>
  );
}

export default Pokemon;


