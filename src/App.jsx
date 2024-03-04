import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState , useEffect } from 'react'
import NavBar from './components/NavBar'

import Home from './views/Home'
import Pokemones from './views/Pokemones'

function App() {
    const [datos, setDatos] = useState([])

    useEffect(()=>{
      datosPokemones()
    },[])

    const datosPokemones = async () => {
      const url = 'https://pokeapi.co/api/v2/pokedex/1/'
      const response = await fetch(url)
      const data = await response.json()
      const { pokemon_entries } = data
      setDatos(pokemon_entries)
    }

    return (
      <>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemones/:id' element={<Pokemones datos={datos} />} />
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
