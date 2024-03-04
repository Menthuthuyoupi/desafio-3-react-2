import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const PokeCard = ({ide}) => {
    const [posicion, setPosicion] = useState(0)
    const [stat, setStat] = useState([])
    const [tipo, setTipo] = useState('')

    useEffect(()=>{
        datoPokemon()
    })

    const datoPokemon = async () => {
        const urlIde = `https://pokeapi.co/api/v2/pokemon/${ide}`
        const response = await fetch(urlIde)
        const data = await response.json()
        const { id } = data
        setPosicion(id)

        const urlStats = `https://pokeapi.co/api/v2/pokemon/${posicion}`
        const responStats = await fetch(urlStats)
        const dataStats = await responStats.json()
        const { stats , types } = dataStats
        setTipo(types[0].type.name)
        // setStat([stats[0].base_stat,stats[1].base_stat,stats[2].base_stat,stats[3].base_stat,stats[4].base_stat,stats[5].base_stat])
        setStat(stats)
    }  

    return (
        <div className='d-flex border'>
            <div style={{width:'60%'}}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${posicion}.png`} style={{width:'100%'}}/>
            </div>
            <div>
                <h1>{ide}</h1>
                <ul>
                    {
                        stat.map(est =>
                            <li style={{textAlign:'start'}} key={est.base_stat}>{est.stat.name}: {est.base_stat}</li>
                        )
                    }
                    {/* {
                        stat.map(est =>
                                <li key={est}>{est}</li>
                        )
                    } */}
                </ul>
                <p style={{textAlign:'start'}}>{tipo}</p>
            </div>
        </div>
    )
}

PokeCard.propTypes = {}

export default PokeCard