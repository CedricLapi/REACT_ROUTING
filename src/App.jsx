import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Param from './components/Param'
import MultiParam from './components/MultiParam'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:param" element={<Param />} />
        <Route path="/:word/:color/:background" element={<MultiParam />} />
      </Routes>
    </>
  )
}

export default App
