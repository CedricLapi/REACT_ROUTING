import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon?=limit807')
            .then((res) => {
                console.log(res.data.results);
                setPokemons(res.data.results);
            })
            .catch((err) => {
                console.log(err);
        });
    }, []);

    return (
    <div>
        {pokemons.map((pokemon) => {
            <Link
             style={{ display: 'block'}} 
             to={"/pokemons/${pokemon.name}"} 
             state={pokemon} 
             key={pokemon.name}>
            {pokemon.name}
            </Link>
        })}
        </div>
    );
};
export default Pokemon;