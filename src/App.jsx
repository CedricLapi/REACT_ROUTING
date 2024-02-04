import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Param from './components/Param'
import MultiParam from './components/MultiParam'
import Pokemon from './components/Pokemon'
import PokemonDetails from './components/PokemonDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>

        <Route path="/home" element={<Home />} />

        <Route path="/pokemons" element={<Pokemon />} />

        <Route path="/pokemons/:name" element={<PokemonDetails />} />

        <Route path="/:param" element={<Param />} />

        <Route path="/:word/:color/:background" element={<MultiParam />} />

      </Routes>
    </>
  )
}

export default App
