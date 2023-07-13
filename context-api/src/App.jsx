import React, { useContext, useState } from 'react'
import Page1 from './componentes/Page1'
import Page2 from './componentes/Page2'
import ColorContext from './context/ColorContext'
import { DataProvider } from './context/DataContext'

const App = () => {

 const {color, changeColor} = useContext(ColorContext)

 const handleChangeColor = () =>{
  const newColor = color === 'white' ? 'blue' : 'white'; //Cambiar el color
  changeColor(newColor)
 }
  
  //------------------------
  // const Datos = {
  //   nombre: "Dany",
  //   edad: 24,
  //   música: "un poco de todo"
  // }
 
  // useState = contiene el dato inicial 
  // data = estado actual 
  // setData = estado que se va a actualizar

  // const [data, setData] = useState(Datos)

  return (
    <div style={{backgroundColor: color}}>

      <button onClick={handleChangeColor}>Cambiar color</button>
<DataProvider>
  <Page1  />
  <Page2  />
</DataProvider>
  
    </div>
  )
}

export default App

