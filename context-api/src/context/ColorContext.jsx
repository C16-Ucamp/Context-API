// Context API

// 1.- Contexto: createContext() -> Provider y Consumer
// Provider: envuelve el contexto que necesitan o que proporciona los valores a los componentes 
// Consumer: acceder a los valores del contexto dentro de los componentes secundarios

import React, { createContext, useState } from 'react'

const ColorContext = createContext()

export const ColorProvider = ({children}) => {

    const [color, setColor] = useState('white')

    const changeColor = (newColor) =>{
        setColor(newColor)
    }

    return (
 <ColorContext.Provider value={{color, changeColor}}>
    {children}
 </ColorContext.Provider>
    )
}

export default ColorContext

