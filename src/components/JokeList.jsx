import JokeCard from "./JokeCard"


const JokeList = ({ getJoke }) => {

    return (
        <div className="jokes">
            {
                getJoke?.map((joke, i) => {
                    return <JokeCard
                       key={i}
                      joke={joke.joke}
                    />
                })
            }
        </div>
    )
}

export default JokeList