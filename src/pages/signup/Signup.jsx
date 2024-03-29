import React, {useRef, useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './signup.scss';
import {useAuth} from '../../contexts/AuthContext'
const Signup = () => {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup, currentUser } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("Dashboard")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }
  return (
    <>
    <div className="form">
      <div className="tab-content">
        <div id="signup">   
          <h1>Sign Up!</h1>
          {error}
          <form onSubmit={handleSubmit}>
          
          

          <div className="field-wrap">
            <label>
              
            </label>
            <input type="email"placeholder='Email Address' ref={emailRef}required autoComplete="off"/>
          </div>
          
          <div className="field-wrap">
            <label>
              
            </label>
            <input type="password"placeholder='Set Password' ref={passwordRef}required autoComplete="off"/>
          </div>
          <div className="field-wrap">
            <label>
              
            </label>
            <input type="password"placeholder='Confirm Password' ref={passwordConfirmRef}required autoComplete="off"/>
          </div>
          <button type="submit" disabled={loading} className="button button-block">Submit</button>
          
          </form>
          <p className="loginAccount"><Link to="/login">Login</Link></p>
        </div>
        
        <div id="login">   
         
          
          

        </div>
        
      </div>
      
    </div>
    </>
  )
}

export default Signup