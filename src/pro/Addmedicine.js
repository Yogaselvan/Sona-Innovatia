import React, { Component, useState } from 'react'
import "./Addmedicine.css"
import { Link } from 'react-router-dom';
import { db } from "../firebase";
const usersCollection = db.collection('Medicine');
function Medicine() {
  const [medicine,setMedicine] = useState();
  const [DoctorName,setDoctorName] = useState();
  const [days,setDays] = useState();
  const [timing,setTiming] = useState();
  const [Hospitalname,setHospitalName] = useState();
  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
 };
  const handleClick = () =>{
    const currentUser = getUserFromLocalStorage();
    const details = {
      medicine : medicine,
      "email" : currentUser.email ,
      doctorName  :DoctorName,
      days : days,
      
      Hospitalname : Hospitalname
    }
    console.log(details);
    usersCollection.add(details)
        .then((docRef) => {
          console.log('Document written with ID:', docRef.id);

        })
        .catch((error) => {
          console.error('Error adding document:', error);
        });
  }
    return ( 
      <div class="wrapper d-flex align-items-stretch">
			<nav id="sidebar">
				<div class="p-4 pt-5">
		  		<a href="#" class="img logo rounded-circle mb-5"></a>
	        <ul class="list-unstyled components mb-5">
	          <li class="active">

                       <Link to="/Dashboard">Home</Link>
	               <ul class="collapse list-unstyled" id="homeSubmenu">
	            </ul>
	          </li>
	          <li>
              <Link to="/Addmedicine">Add Prescreption +</Link>
	          </li>
	          <li>
              <Link to="/AddOperations">Add Opreations +</Link>
	          </li>
	          <li>
              <Link to="/AddPrescription">Add Consoltation +</Link>
	          </li>
	          <li>
              <Link to="/AddCopies">Add Reports +</Link>
	          </li>
	        </ul>

	      </div>
    	</nav>

      
      <div id="content" class="p-4 p-md-5">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">

            <button type="button" id="sidebarCollapse" class="btn btn-primary">
              <i class="fa fa-bars"></i>
              <span class="sr-only">Toggle Menu</span>
            </button>
            <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="nav navbar-nav ml-auto">
                <li class="nav-item active">
                    <a href to="/ " class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href class="nav-link" to="/medicine">View Prescreption</a>
                </li>
                <li class="nav-item">
                    <a href class="nav-link" to="#">View Consoltation</a>
                </li>
                <li class="nav-item">
                    <a href class="nav-link" to="#">View Opreations</a>
                </li>
                <li class="nav-item">
                    <a href class="nav-link" to="#">View Reports</a>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>

       
        <>
         <div class="login-page">
  <div class="form">
    
    <form class="login-form">
      <input type="text" value={medicine} onChange={(e) => {setMedicine(e.target.value)}} placeholder="Medicine"/>
      <input type="text" value={DoctorName} onChange={(e) => {setDoctorName(e.target.value)}} placeholder="Doctorname"/>
      <input type="number" value={days} onChange={(e) => {setDays(e.target.value)}} placeholder="Days"/>
        
      <select className='op'>
        
      <option value={timing} >Timing</option>
        <option onClick={(e) => {setTiming("Morning")}}>Morning</option>
        <option onClick={(e) => {setTiming("Afternoon") }}>Afternoon</option>
        <option onClick={(e) => {setTiming("Night")}}>Night</option>
      </select>
        
      <input type="text" value={Hospitalname} onChange={(e) => {setHospitalName(e.target.value)}} placeholder="Hospitalname"/>
     
       
   
      {/* <input type="password" placeholder="password"/> */}
      <input type="button" onClick={handleClick} value="Submit"></input>
      {/* <p class="message">Not registered? <a href="#">Create an account</a></p> */}
    </form>
  </div>
</div></> 
      </div>
		</div>
      
     );
}

export default Medicine;