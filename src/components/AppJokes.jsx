import { useEffect, useState } from "react"
import JokeList from "./JokeList"
import ButtonJokes from "./ButtonJokes"

const AppJokes = () => {

    const [getJoke, setGetJoke] = useState(null)
    const [categories, setCategories] = useState(["Birds", "Car", "Hipster", "Dad"])
    const [categorySearch, setCategorySearch] = useState("birds")
    const [loading, setLoading] = useState(false)

    const getJokes = async (category) => {
       
        const jokesData = await fetch(`https://icanhazdadjoke.com/search?term=${category}`, {
            headers: {
                "Accept": "application/json"
            }
        })
        const response = await jokesData.json()
        setLoading(false)
        return response.results
        

      
    }

    const handleClick = (category) => {
        setLoading(true)
        setCategorySearch(category)
        
    };

    useEffect(() => {
        getJokes(categorySearch).then((jokes) => setGetJoke(jokes));
        
    }, [categorySearch]);

    return (
        <>
            {loading ? (
                <div className="loading">
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
                
                
            ) : (
                <>
                    <div className="flex">
                        <div className="buttons">
                            {categories.map((category, i) => (
                                <ButtonJokes
                                    key={i}
                                    category={category}
                                    handleClick={handleClick}
                                />
                            ))}
                        </div>

                        <JokeList getJoke={getJoke} categories={categories} />
                    </div>

                </>
            )}
        </>
    );

}

export default AppJokes