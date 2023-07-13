import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const Boton = () => {

    const NewDatos = {
        nombre: "Carlos",
        edad: 30,
        música: "80s y más"
    }
 const {setData} = useContext(DataContext)
  return (
    <div>
      <button onClick={()=> setData(NewDatos)}>Cambiar</button>
    </div>
  )
}

export default Boton
