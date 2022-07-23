import React, {useRef, useState} from 'react'
import './login.scss';
import {Link,useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext'
const Login = () => {

  const emailRef = useRef()
  const passwordRef = useRef()

  const { login, currentUser } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()



    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/Dashboard")
    } catch {
      setError("Failed to Login")
    }

    setLoading(false)
  }
  return (
    <>
    <div className="form">
        
        <div id="login">   
          <h1>Welcome Back!</h1>
          {error}
          <form onSubmit={handleSubmit}>
          
            <div className="field-wrap">
            <label>
              
            </label>
            <input type="email"placeholder='Email Address'ref={emailRef}required autoComplete="off"/>
          </div>
          
          <div className="field-wrap">
            <label>
              
            </label>
            <input type="password"placeholder='Password'ref={passwordRef}required autoComplete="off"/>
          </div>
          <p className="signupAccount"><Link to="/signup">Signup</Link></p>
          <p className="forgot"><Link to="/forgot-password">Forgot Password?</Link></p>
          
          <button className="button button-block">Log In</button>
          
          </form>

        </div>
        
      </div>
      
    </>
  )
}

export default Login