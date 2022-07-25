import React, {useState} from 'react'
import './dashboard.scss';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
  
    async function handleLogout() {
      setError("")
  
      try {
        await logout()
        history.push("/login")
      } catch {
        setError("Failed to log out")
      }
    }
  
    return (
    <>
<div className="form">
    <div className='t'>Profile</div>
    <strong>Email:</strong> {currentUser.email}
    
    <br/>
    <Link to="/update-profile" className='button-primary'>Update Profile</Link>
    <br>
    </br>
    <button variant="link" onClick={handleLogout} className="button button-block">Log Out</button>
    </div>
    </>
  )
}
