
const ButtonJokes = ({category, handleClick}) => {
    
  
    return <div className="button"> <button onClick={() => (handleClick(category))}>{category}</button></div>
   
}

export default ButtonJokes