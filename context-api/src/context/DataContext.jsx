import React, { createContext, useState } from "react";

export const DataContext = createContext()

const Datos = {
       nombre: "Dany",
       edad: 24,
       música: "un poco de todo"
     }

export const DataProvider = ({children}) =>{
    const [data, setData] = useState(Datos)

    return(
        <DataContext.Provider value={{data,setData}}>
        {children}
        </DataContext.Provider>
    )
} 
