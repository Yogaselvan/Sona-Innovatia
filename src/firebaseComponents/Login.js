import { auth } from "../firebase";
import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import "../firebaseComponents/style.css";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [role, setRole] = useState('patient');
    const history = useNavigate();
    const handleSubmit = async (event) => {
       event.preventDefault();
       try {
          await auth.signInWithEmailAndPassword(email, password);
          const user = auth.currentUser;
          user.role = role;
          console.log(user);
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
//           {error && <div>{error}</div>}
//           <button type="submit">Log In</button>
//           <label>
//   <input type="radio" name="role" value="doctor" checked={role === 'doctor'} onChange={(e) => setRole(e.target.value)} />
//   Doctor
// </label>
// <label>
//   <input type="radio" name="role" value="patient" checked={role === 'patient'} onChange={(e) => setRole(e.target.value)} />
//   Patient
// </label>
// <div> Didn't have an account ? <Link to="/">SignUp</Link></div>
//        </form>

<div class="login-forms-bds">
  <div class="forms-wrappers">
    <div class="forms-containers">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div class="forms-controls">
        <input type="email"  placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        
          {/* <label> Email</label> */}
        </div>

        <div class="forms-controls">
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {/* <label> Password</label> */}
        </div>
        <label>
   <input type="radio" name="role" value="doctor" checked={role === 'doctor'} onChange={(e) => setRole(e.target.value)} />
   Doctor
 </label>
 <label>
   <input type="radio" name="role" value="patient" checked={role === 'patient'} onChange={(e) => setRole(e.target.value)} />
   Patient
 </label>
        <button class="login-btn bt">Login</button>
        <p class="text">Don't have an account?  <Link to="/">SignUp</Link></p>
      </form>
    </div>
  </div>
</div>
    );
 };
 
 export default Login;