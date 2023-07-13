import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const {userData, setUserdata, logout} = useContext(UserContext)
    const navigation = useNavigate()

    const handleOut = () => {
        logout()
        navigation('/')
    }
  return (
    <div>
      <h1>Perfil</h1>
      {
        userData ? (
            <div>   
                <h1>Bienvenid@!</h1>
                <h1>{userData.name}</h1>
                <button onClick={handleOut}>Cerrar sesión</button>
            </div>
        ) : (
            <h1>No estas logueado :(</h1>
        )
      }
    </div>
  )
}

export default Profile
