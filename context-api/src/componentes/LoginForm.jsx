import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import axios from 'axios'
const LoginForm = () => {
  
  const {userData, setUserdata} = useContext(UserContext)

  const url = "http://localhost:4003/api/v1/auth/login"
  const url2 = "http://localhost:4003/api/v1/users/me"
  const url3 = "http://localhost:4003/api/v1/admin/yo"
  const navigation = useNavigate()

  // const handleSubmit = () =>{
  //   console.log(userData)
  //   axios.post(url, setUserdata)
  //   .then(res => {
  //     console.log(res.data)
  //     return (
  //       axios.get(url2, {
  //         headers: {
  //           'Access-Control-Allow-Origin': '*',
  //           Authorization: `Bearer ${res.data.token}`
  //         }
  //       }).then(response => {
  //         setUserdata(response.data)
  //         navigation('/profile')
  //       })
  //     )
  //   })
  // }

  const handleSubmit = () => {
    console.log(userData)
    axios.post(url, userData)
      .then(res => {
        console.log(res.data)

        const token = res.data.token
        const isAdmin = res.data.role === "admin"
        return (
          axios.get(isAdmin ? url3 : url2, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              Authorization: `Bearer ${token}`
            }
          }).then(response => {
            console.log(response.data)
            setUserdata(response.data)

            if(isAdmin){
              navigation('/admin')
            } else {
              navigation('/profile')
            }
          })
        )
      })
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setUserdata({
      ...userData,
      [name]: value
    })
    console.log(userData)
  }

  return (
    <div>
      <h1>Login</h1>

      
      <input type='email' name='email' placeholder='Correo' onChange={handleChange}/>
      <input type='text' name='password' placeholder='Password' onChange={handleChange}/>
      <button onClick={() => handleSubmit()}>Enviar</button>

    </div>
  )
}

export default LoginForm
