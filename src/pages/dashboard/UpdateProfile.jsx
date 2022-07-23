import React, {useRef, useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './updateprofile.scss';
import { useAuth } from '../../contexts/AuthContext';
const UpdateProfile = () => {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

   function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

const promises = []
setLoading(true)
setError("")
if(emailRef.current.value !== currentUser.email){
    promises.push(updateEmail(emailRef.current.value))
}
if(passwordRef.current.value){
    promises.push(updatePassword(passwordRef.current.value))
}

Promise.all(promises).then(() => {
    history.push('/dashboard')
}).catch(()=> setError('Failed to update account')
).finally(()=>{
    setLoading(false)
})

  }
  return (
    <>
    <div className="form">
      <div className="tab-content">
        <div id="updateprofile">   
          <h1>Update Profile</h1>
          {error}
          <form onSubmit={handleSubmit}>
          
          

          <div className="field-wrap">
            <label>
              
            </label>
            <input type="email"placeholder='Email Address' ref={emailRef}required defaultValue={currentUser.email}/>
          </div>
          
          <div className="field-wrap">
            <label>
              
            </label>
            <input type="password" ref={passwordRef} placeholder="Leave blank to keep the same"/>
          </div>
          <div className="field-wrap">
            <label>
              
            </label>
            <input type="password"ref={passwordConfirmRef} placeholder="Leave blank to keep the same"/>
          </div>
          <button type="update" disabled={loading} className="button button-block">Update</button>
          
          </form>
          <p className="cancelUpdate"><Link to="/dashboard">Cancel</Link></p>
        </div>
        
        <div id="login">   
         
          
          

        </div>
        
      </div>
      
    </div>
    </>
  )
}

export default UpdateProfile