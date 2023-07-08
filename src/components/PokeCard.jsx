

const PokeCard = ({ id, name, img, handleClick}) => {

 
    return <div className={id % 2 === 0 ? "even" : "odd"}>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>{id}</p>
            <button onClick={() => handleClick(id)}>Delete</button>
        </div>







}

export default PokeCard