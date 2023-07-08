import { useState } from "react"

const Button = () => {

    const [colorTheme, setColorTheme] = useState(false)

    const handleClick = () => {
        setColorTheme(prev => !prev)
    }

    return <div className={colorTheme ? "dark" : "light"}>
        <h1>DARK&LIGHT</h1>
        <p>Try the dark and the light</p>
        <p>Down here</p>
        <button onClick={handleClick}>{colorTheme ? "Light" : "Dark"}</button>

    </div>
}

export default Button