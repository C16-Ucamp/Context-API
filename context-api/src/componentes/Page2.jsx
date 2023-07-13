import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import Boton from './Boton'

const Page2 = () => {
 const {data} = useContext(DataContext)
  return (
    <div>
      <h1>Pagina 2 </h1>
      <Boton />
      {JSON.stringify(data,2)}
    </div>
  )
}

export default Page2
