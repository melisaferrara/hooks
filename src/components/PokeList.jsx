import { useEffect, useState } from "react"
import PokeCard from "./PokeCard"




const PokeList = () => {

    const [pokemon, setPokemon] = useState(null)
    const [pikachu, setPikachu] = useState(null)
    const [offset, SetOffset] = useState(20)
    const [loading, setLoading] = useState(false)
 
    const morePokemons = async () => {

        SetOffset(prev => prev + 10)
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`)
        const response = await data.json()

        const promise = await Promise.all(
            response.results.map(async (newPokemons) => {
                const newData = await fetch(newPokemons.url)
                const response = await newData.json()
                setLoading(false)
                return response

            })
        )
        return promise

    }

    const handleClickMore = async () => {
        setLoading(true)
        const data = await morePokemons();
        setPokemon((prev) =>  [...prev, ...data]);
    };


    const getPikachu = async () => {
        const dataPikachu = await fetch(`https://pokeapi.co/api/v2/pokemon/25/`)
        const response = await dataPikachu.json()
       
        return response

    }


    const getPokemon = async () => {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon`)
        const response = await data.json()

        const promise = await Promise.all(
            response.results.map(async (pokemon) => {
                const data = await fetch(pokemon.url)
                const response = await data.json()
                return response
            })
        )
        return promise
    }



    const handleClick = (id) => {
        setPokemon(prev => prev.filter(poke => poke.id != id))
        

    }

    useEffect(() => {
        getPokemon().then(data => setPokemon(data))
        getPikachu().then(data => setPikachu(data))
    }, [])



    return (
        <>
        
          {loading ? (
            <div className="loading"> 
                <div className="lds-dual-ring"></div>
            </div>
                
            ) : ( 
                <>
            <button onClick={handleClickMore} className='buttonMore'>Give me more!</button>
            <div className="flex justify-center">
                {pikachu && (
                    <PokeCard
                        name={pikachu.name}
                        id={pikachu.id}
                        img={pikachu.sprites.front_default}
                        handleClick={handleClick}
                    />
                )}

            </div>
           
            <br />


            <div className="card">
                {pokemon?.sort((a,b) => b.id-a.id).map((pokemon, i) => {
                    return <PokeCard
                        key={i}
                        name={pokemon.name}
                        id={pokemon.id}
                        img={pokemon.sprites.front_default}
                        handleClick={handleClick}

                    />
                })}
            </div>
            </>
            )}
          
        </>




    )

}

export default PokeList