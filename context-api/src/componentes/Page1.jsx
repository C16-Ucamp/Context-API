import React, { useContext } from 'react'
import ColorContext from '../context/ColorContext'

const Page1 = ({data}) => {
    
    const {color, changeColor} = useContext(ColorContext)

    const handleChangeColor = () =>{
     const newColor = color === 'white' ? 'orange' : 'white'; //Cambiar el color
     changeColor(newColor)
    }

  return (
    <div style={{backgroundColor: color}}>
      <h1>Pagina 1 </h1>
      <button onClick={handleChangeColor}>Cambiar color</button>
      {JSON.stringify(data,2)}
    </div>
  )
}

export default Page1
