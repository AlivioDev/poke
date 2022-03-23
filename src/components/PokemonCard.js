import React, {useState, useEffect} from 'react';
import './PokemonCard.css';
import axios from "axios";


function PokemonCard({endpoint}) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await
                    axios.get(`${endpoint}`);
                console.log(result.data);
                setPokemon(result.data)
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, [endpoint]);


    return (
        <div>
            {pokemon &&
                <>
                    <div className="card">
                        <h4>{pokemon.name}</h4>
                        <img src={pokemon.sprites.front_default} alt={`${pokemon.name}`}/>
                        <div className="container">
                            <p>Moves: {pokemon.moves.length}</p>
                            <p>Weight: {pokemon.weight}</p>
                            <ul>Abilities:
                                {pokemon.abilities.map((canDo) => {
                                    return(
                                        <li key ={canDo.slot}>
                                            {canDo.ability.name}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </>
            }
        </div>
    );}

export default PokemonCard;