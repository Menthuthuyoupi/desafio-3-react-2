import React from 'react'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import PokeCard from '../components/PokeCard'

const Pokemones = ({datos}) => {
    const { id } = useParams()

    const [ide, setIde] = useState('')
    const navigate = useNavigate()

    const irAPokemon = () => {
        navigate(`/pokemones/${ide}`)
    }

    return (
        <div style={{border:'1px solid black',borderRadius:'0 0 10px 10px'}}>
            {
                id === ':id' ?
                <div>
                    <h2 className='my-2'>Seleccionar un pokemón</h2>
                    <form>
                        <Form.Select style={{width:'60%', margin:'0 auto'}} defaultValue={'Default'} onChange={(e) => setIde(e.target.value)}>
                            <option value="Default" disabled>Pokemones</option>
                                {
                                    datos.map(poke =>
                                        <>
                                            <option label={`${poke.entry_number}-${poke.pokemon_species.name}`} >{poke.pokemon_species.name}</option>
                                        </>
                                    )
                                }
                        </Form.Select>
                        <Button type='submit' variant="primary" className='mt-2 my-2' onClick={irAPokemon}>Buscar</Button>
                    </form>        
                </div>
                :   
                <PokeCard ide={ide}/>
            }
        </div>
    )
}

export default Pokemones