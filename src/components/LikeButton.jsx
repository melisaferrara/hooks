import { useState } from "react"

const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

const LikeButton = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [color, setColor] = useState(colors[Math.floor(Math.random() * colors.length)]);
    const [color2, setColor2] = useState(colors[Math.floor(Math.random() * colors.length)]);
  
    const handleClickButton1 = () => {
      setCount(prev => prev + 1);
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
    }
  
    const handleClickButton2 = () => {
      setCount2(prev => prev + 1);
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor2(randomColor);
    }
  


    return (
        <div className="flex gap-3 justify-center">
            <button className="p-3 font-bold" style={{ backgroundColor: color }} onClick={handleClickButton1}>{`${count + " likes"}`}</button>
            <button className="p-3 font-bold" style={{ backgroundColor: color2 }} onClick={handleClickButton2}>{`${count2 + " likes"}`}</button>
        </div>


    )
}

export default LikeButton