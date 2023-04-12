import React, { Component } from 'react'
import "./Addmedicine.css"
import { Link } from 'react-router-dom';

function Copies() {
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
                    <a href class="nav-link" to="#">View Records</a>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>

       
        <>
         <div class="login-page">
  <div class="form">
    <form class="register-form">
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p class="message">Already registered? <a href="#">Sign In</a></p>
    </form>
    <select className='op'>
        
      <option value="">Scans & Reports</option>
        <option value="Morning">CT</option>
        <option>X-Ray</option>
        <option>MRI</option>
        <option>PET</option>
        <option>ECG</option>
        <option>Ultra Sound</option>
        <option>Angio Graphy</option>
        <option>Anomaly Scan</option>
        <option>Doppler Scan</option>
      </select>
      <input type="file" accept="image/*"></input>
      <button>submit</button>
  </div>
</div></> 
      </div>
		</div>
     );
}

export default Copies;