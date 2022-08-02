import React, {useState} from 'react'
import './dashboard.scss';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import MovieGrid from '../../components/movie-grid/MovieGrid';
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
    <h1>Profile</h1>
    <div className='profile_title'></div>
    <p className='email_result'><strong className='email_title'>Email:</strong> {currentUser.email}</p>
    <br>
    </br>
    <p className='first_name'><strong className='fn_title'>First Name:</strong> </p>
    <br/>
   
    <br>
    </br>
    <div className='button_box'>
      <Link to="/update-profile" className='button-primary'><h2>Update Profile</h2></Link>
      <button variant="link" onClick={handleLogout} className="button button-block">Log Out</button>
    </div>
    </div>

    <div>
    <div className="container">
                <div className="section mb-3">

                </div>
            </div>
    </div>
    </>
  )
}
