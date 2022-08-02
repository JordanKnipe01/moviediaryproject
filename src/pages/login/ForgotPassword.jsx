
import './forgotpassword.scss'
import React, {useRef, useState} from 'react'
import { useParams } from 'react-router-dom';
import {Link,useHistory} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext'

const ForgotPassword = () => {

    const emailRef = useRef()
    const { resetPassword} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    async function handleSubmit(e) {
      e.preventDefault()
  
  
  
      try {
        setMessage("");
        setError("")
        setLoading(true)
        await resetPassword(emailRef.current.value);
        setMessage("Check your email for further instructions")
      } catch {
        setError("Failed to Reset Password")
      }
  
      setLoading(false)
    }
    return (
      <>
      
      <div className="form">
      <div className='container_before_form'>
          <div id="login">   
            <h1>Password Reset</h1>
            {error}
            {message}
            <form onSubmit={handleSubmit}>
            
              <div className="field-wrap">
              <label>
                
              </label>
              <input type="email"placeholder='Email Address'ref={emailRef}required autoComplete="off"/>
            </div>
            
            

            
            <button className="button button-block">Reset Password</button>

            <p className="loginAccount"><Link to="/login">Login</Link></p>

            
            </form>

          </div>
          <p className='need_account'>Need an account?<p className="signupAccount"><Link to="/signup">Signup</Link></p></p>
        </div>
        </div>
        
       
      </>
    )
  }
  
  export default ForgotPassword