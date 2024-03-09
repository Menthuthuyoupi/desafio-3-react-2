import React from 'react'
import pikachu from '../assets/imgs/Pikachu.png'

const Home = () => {

  return (
    <div style={{border:'1px solid black',borderRadius:'0 0 10px 10px'}}>
        <h2 style={{margin:'0', borderBottom:'1px solid black'}}>Bienvenido Maestro Pokemón</h2>
        <div>
            <img src={pikachu} style={{width:'50%'}} />
        </div>
    </div>

  )
}

export default Home