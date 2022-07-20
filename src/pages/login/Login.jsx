import React, {useRef, useState} from 'react'
import './login.scss';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext'
const Login = () => {

  const emailRef = useRef()
  const passwordRef = useRef()

  const { signup, currentUser } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  //const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()



    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      //history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }
  return (
    <>
    <div className="form">
        
        <div id="login">   
          <h1>Welcome Back!</h1>
          
          {error && <div> {error} </div>}
          {currentUser.email}
          <form onSubmit={handleSubmit}>
          
            <div className="field-wrap">
            <label>
              
            </label>
            <input type="email"placeholder='Email Address'ref={emailRef}required autocomplete="off"/>
          </div>
          
          <div className="field-wrap">
            <label>
              
            </label>
            <input type="password"placeholder='Password'ref={passwordRef}required autocomplete="off"/>
          </div>
          
          <p className="forgot"><a href="#">Forgot Password?</a></p>
          
          <button className="button button-block">Log In</button>
          
          </form>

        </div>
        
      </div>
      
    </>
  )
}

export default Login