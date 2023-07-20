import React, { createContext, useState } from 'react'


export const ProductContext =  createContext()

export const ProductProvider = ({children}) =>{
    const [formProduct, setFormProduct] = useState({
        name:"",
        description: "",
        price: 0,
        image:""
    })

    const [product, setProduct] = useState([])

    return(
        <ProductContext.Provider value={{product,setProduct,formProduct,setFormProduct}}>
            {children}
        </ProductContext.Provider>
    )
}


