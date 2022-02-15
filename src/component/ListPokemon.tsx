import React, { useState, useEffect } from 'react'
import { axios } from '../javascript/axios.js'
import loading from '../img/loading.gif'
import '../style/ListPokemon.scss'
import IndividualPage from './IndividualPage'
import Popup from './Popup'

interface TypeArray {
    type: {name: string},
    element: {}
}

interface Props {
    name?: string,
}

interface Pokemon {
    id: number,
    sprites: any,
    types: Array<TypeArray>
}

const ListPokemon: React.FC<Props> = ({name}) => {
    const [pokemon, setPokemon] = useState<Pokemon>() //data on a single pokemon
    const [popup, setPopup] = useState(false)

    //fetching data from individual page of pokmeon
    const getPokemon = async() => {
        const res = await axios.get(`pokemon/${name}`)

        setPokemon(res.data);
    }
    
    const popupOpen = () => {
        setPopup(!popup)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    return (
        <>
        {/* ? : to wait for response for the data*/}

        {pokemon ? 
        <div className='pokemon__card'>

            <p className="pokemon__id">#{pokemon.id}</p>

            <div className="pokemon__sprite">
                <img src={pokemon.sprites.front_default} alt='sprite'/>
            </div>

            <h3 className="pokemon__name">{name}</h3>

            <div className="pokemon__type">
            {pokemon.types.map((element : {type: {name: string}}) =>
                <p key={element.type.name} className={element.type.name}>{element.type.name}</p>
                )}
            </div>

            <button className="pokemon__detail" onClick={popupOpen}>More Details</button>

        </div> 
        : <div className="pokemon__load-ctn">
            <div className='pokemon__loading'><img src={loading}  alt="loading" /></div>
        </div>
            } 

        <Popup show={popup}>

        <div className="popup">
            <IndividualPage name={name} show={popup} openPopup={popupOpen} />
        </div>
        </Popup>
        
        </>
    )
}

export default ListPokemon
