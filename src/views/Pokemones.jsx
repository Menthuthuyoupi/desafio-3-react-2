import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

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
        <div>
            {
                id === ':id' ?
                <div>
                    <h2 className='my-2'>Seleccionar un pokemón</h2>
                    <form>
                        <Form.Select style={{width:'60%', margin:'0 auto'}} onChange={(e) => setIde(e.target.value)}>
                            <option value="elegir una opction" disabled selected>Pokemones</option>
                                {
                                    datos.map(poke =>
                                        <>
                                            <option>{poke.pokemon_species.name}</option>
                                        </>
                                    )
                                }
                        </Form.Select>
                        <Button type='submit' variant="primary" className='mt-2' onClick={irAPokemon}>Buscar</Button>
                    </form>        
                </div>
                :   
                <PokeCard ide={ide}/>
            }
        </div>
    )
}

export default Pokemones