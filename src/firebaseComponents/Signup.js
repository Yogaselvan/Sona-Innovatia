import React, { useState } from 'react';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import "../firebaseComponents/style.css";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [role, setRole] = useState('patient');
    const history = useNavigate();
    const handleSubmit = async (event) => {
       event.preventDefault();
 
       if (password !== confirmPassword) {
          setError('Passwords do not match');
          return;
       }
 
       try {
          await auth.createUserWithEmailAndPassword(email, password);
          const user = auth.currentUser;
            localStorage.setItem('user', JSON.stringify(user));
            if(role === "patient"){
                history('/PatientView');
            }
            else{
                history('/DocDashboard');
            }

       } catch (error) {
          setError(error.message);
       }
    };
 
    return (
//        <form onSubmit={handleSubmit}>
//           <label>
//              Email:
//              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//           </label>
//           <label>
//              Password:
//              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//           </label>
//           <label>
//              Confirm Password:
//              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//           </label>
//           {error && <div>{error}</div>}
//           <label>
//   <input type="radio" name="role" value="doctor" checked={role === 'doctor'} onChange={(e) => setRole(e.target.value)} />
//   Doctor
// </label>
// <label>
//   <input type="radio" name="role" value="patient" checked={role === 'patient'} onChange={(e) => setRole(e.target.value)} />
//   Patient
// </label>

//           <button type="submit">Sign Up</button>
//           <div> Already have an account ? <Link to="/Login">Login</Link></div>
//        </form>
<div className="Contentee">
<div class="login-forms-bds">
<div class="forms-wrappers">
  <div class="forms-containers">
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit}>
      <div class="forms-controls">
      <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        {/* <label> Email</label> */}
      </div>

      <div class="forms-controls">
      <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        {/* <label> Password</label> */}
      </div>

      <div class="forms-controls">
      {/* <label>
             Confirm Password:
           </label> */}
              <input type="password" placeholder='Confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      <label>
 <input type="radio" name="role" value="doctor" checked={role === 'doctor'} onChange={(e) => setRole(e.target.value)} />
 Doctor
</label>
<label>
 <input type="radio" name="role" value="patient" checked={role === 'patient'} onChange={(e) => setRole(e.target.value)} />
 Patient
</label>
      <button class="login-btn bt" type="submit">Sign up</button>
      <p class="text">Don't have an account?  <Link to="/Login">Login</Link></p>
    </form>
  </div>
</div>
</div>

</div>
    );
 };
 
 export default SignUp;
