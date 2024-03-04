import React from 'react'
import pikachu from '../assets/imgs/Pikachu.png'

const Home = () => {

  return (
    <div>
        <h2>Bienvenido Maestro Pokemón</h2>
        <div>
            <img src={pikachu} style={{width:'50%'}} />
        </div>
    </div>

  )
}

export default Home