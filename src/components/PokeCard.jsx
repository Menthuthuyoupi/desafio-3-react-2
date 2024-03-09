import React from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image'

const PokeCard = ({ide}) => {
    const [posicion, setPosicion] = useState(0)
    const [stat, setStat] = useState([])
    const [tipo, setTipo] = useState('')

    useEffect(()=>{
        datoPokemon()
        datoStats()
    },[posicion])

    const datoPokemon = async () => {
        try {
            const urlIde = `https://pokeapi.co/api/v2/pokemon/${ide}`
            const response = await fetch(urlIde)
            const data = await response.json()
            const { id } = await data
            setPosicion(id)
        } catch (error) {
            alert(error.message)
        }
    }
    
    const datoStats = async () => {
        try {
            if(posicion > 0){
                const urlStats = `https://pokeapi.co/api/v2/pokemon/${posicion}`
                const responStats = await fetch(urlStats)
                const dataStats = await responStats.json()
                const { stats , types } = dataStats
                setTipo(types[0].type.name)
                // setStat([stats[0].base_stat,stats[1].base_stat,stats[2].base_stat,stats[3].base_stat,stats[4].base_stat,stats[5].base_stat])
                setStat(stats)
            }
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className='d-flex'>
            <div style={{width:'60%'}}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${posicion}.png`} style={{width:'100%'}}/>
            </div>
            <div>
                <h1>{ide}</h1>
                <ul>
                    {
                        stat.map(est =>
                            <li style={{textAlign:'start'}} key={est.stat.name}>{est.stat.name}: {est.base_stat}</li>
                        )
                    }

                </ul>
                <p style={{textAlign:'start'}}>{tipo}</p>
            </div>
        </div>
    )
}

PokeCard.propTypes = {
    ide: PropTypes.string
}

export default PokeCard