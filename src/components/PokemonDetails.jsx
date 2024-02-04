import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const PokemonDetails = () => {
    const {state} = useLocation();
    const [pokemon, setPokemon] = useState({});
    useEffect(() => {
        console.log('state', state);
        axios
            .get(state)
            .then((res) => {
                console.log(res.data);
                setPokemon(res.data);
            })
            .catch((err) => {
                console.log(err);
        });
    }, []);
  return (
    <div>{pokemon.abilities && pokemon.abilities[0].ability.name}</div>
  )
}

export default PokemonDetails