import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './About.css';

const About = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const result = await axios('https://pokeapi.co/api/v2/pokemon/250');
      setPokemon(result.data);
    };

    fetchPokemon();
  }, []);

  if (!pokemon) return <div>carga</div>;

  return (
    <div className="pokemon-about">
      <h1>About</h1>
      <p>Type: {pokemon.types.map((typeInfo) => typeInfo.type.name).join(', ')}</p>
      <p>Height: {pokemon.height}</p>

      
      <p>Weight: {pokemon.weight}</p>
      <p>Abilities: {pokemon.abilities.map((abilityInfo) => abilityInfo.ability.name).join(', ')}</p>
    </div>
  );
};

export default About;
