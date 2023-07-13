import React, { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [userData, setUserdata] = useState({})

    const logout = () => {
      setUserdata(null)
    }

    return(
        <UserContext.Provider value={{userData,setUserdata,logout}}>
          {children}
        </UserContext.Provider>
    )
}