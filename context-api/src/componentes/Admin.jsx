import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { ProductContext } from '../context/ProductContext'
import axios from 'axios'
const Admin = () => {
    const {userData, logout} = useContext(UserContext)
    const handleOut = () => {
        logout()
        navigation('/')
    }
    const {product,setProduct,formProduct,setFormProduct} = useContext(ProductContext)
    
    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormProduct({
            ...formProduct,
            [name]: value
        })
        console.log(formProduct)
    }

    // obtener products 
    const getProducts = async() =>{
        const url = "http://localhost:4003/api/v1/products"
        const response = await axios.get(url)
        setProduct(response.data)
    }

    // Prublicar productos
    const PostProduct = async() =>{
        const productData = {
            name: formProduct.name,
            description: formProduct.description,
            price: formProduct.price,
            image: formProduct.image
        }

        const url = "http://localhost:4003/api/v1/products"
        const response = await axios.post(url, productData)
        console.log(response.data)
        getProducts()
    }

    //Editar 

    const EditProduct = async(id) =>{
     const url = `http://localhost:4003/api/v1/products/${id}`
     const response = await axios.get(url)
     const productEdit = response.data

     setFormProduct({
        name: productEdit.name,
        description: productEdit.description,
        price: productEdit.price,
        image: productEdit.image
     })

     const newProductEdit = {
        name: formProduct.name,
        description:formProduct.description,
        price: formProduct.price,
        image: formProduct.image
     }
     axios.put(url, newProductEdit)
     getProducts()
    }

    const deleteProduct = async(id) =>{
        const url = `http://localhost:4003/api/v1/products/${id}`
        const response = await axios.delete(url)
        console.log("borrado",response.data)
        getProducts()
    }

    useEffect(()=>{
        getProducts()
    }, []); 

  return (
    <div>
        {userData ? (
            <>
            <h1>Bienvenid@ admin {userData.name} </h1>
            <button onClick={handleOut}>Cerrar sesión</button>

            <input type="text" placeholder='Nombre' name="name" onChange={handleChange}/>
            <input type="text" placeholder='Descripción' name="description" onChange={handleChange}/>
            <input type="number" placeholder='Precio' name="price" onChange={handleChange}/>
            <input type="text" placeholder='Imagen' name="image" onChange={handleChange}/>
            <button onClick={() => PostProduct()}>Enviar</button>

            <table>
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Imagen</th>
                    <th>Opciones</th>
                </tr>
                </thead>
                {
                    product.map(producto => (
                        <tbody key={producto._id}>
                            <tr>
                                <td><h1></h1>{producto.name}</td>
                                <td>{producto.description}</td>
                                <td>{producto.price}</td>
                                <td><img src={producto.image} style={{width: "2rem"}}/></td>
                                <td>
                                    <button>Editar</button>
                                    <button>Borrar</button>
                                </td>
                            </tr>

                        </tbody>
                    ))
                }
           
            </table>

            </>
        ) : (
            <h1>No estas logueadx, sorry</h1>
        )}
      
    </div>
  )
}

export default Admin
