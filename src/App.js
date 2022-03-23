import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import PokemonCard from "./components/PokemonCard";


function App() {

    const [pokemon, setPokemon] = useState(null);
    const [endpoint, setEndpoint] = useState(`https://pokeapi.co/api/v2/pokemon`)

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`${endpoint}`);
                console.log(result.data);
                setPokemon(result.data)
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();

        // if ()
    }, [endpoint]);


    return (
        <>
            <header>
                {pokemon && <>
                <button
                    disabled={!pokemon.previous}
                    type = "button"
                    onClick={() => setEndpoint([pokemon.previous])}
                >
                    Previous
                </button>

                <button
                    disabled={!pokemon.next}
                    type="button"
                    onClick={() => setEndpoint([pokemon.next])}
                >
                    Next
                </button>
                </>}
            </header>


            <div className="pokemon-card">
                {pokemon && pokemon.results.map((card) => {
                    return <PokemonCard endpoint={card.url}/>
                })}
            </div>
        </>
    )
}

export default App;
