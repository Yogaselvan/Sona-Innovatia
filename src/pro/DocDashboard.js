import { useState } from "react";
import "../pro/DocDashboard.css"
import "./search.css"
import { Link } from 'react-router-dom';
import { db } from "../firebase";
import { useNavigate } from 'react-router-dom';
function DocDashboard() {
  const [Adhaar,setAdhaar] = useState();
  const [Patient,setPatient] = useState({"Name" : "",
  "BloodGroup" : "",
  "Phone_Number" : ""        ,
  "email" :"" ,
  "DOB" : "",
  "Adhaar" : ""});
  const history = useNavigate();
  const handleClick = () => {
    console.log(Adhaar);
    db.collection("Patient").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // Adhaar == doc.data().Adhaar ? setPatient(doc.data()) : console.log(false);;
            // console.log(Patient);

          if(Adhaar == doc.data().Adhaar){
            localStorage.setItem('patient', JSON.stringify(doc.data()));
            history("/Dashboard");
          }
        });
    })
    .catch((error) => {
      console.error('Error getting documents: ', error);
    });
    document.getElementById("para").innerHTML = "Error getting documents.Enter valid Adhaar"
  }
    return ( <>
    <div class="wrapper d-flex align-items-stretch">
			<nav id="sidebar">
				<div class="p-4 pt-5">
		  		<a href="#" class="img logo rounded-circle mb-5"></a>
	        <ul class="list-unstyled components mb-5">
	          <li class="active">
              <Link to="/DocView">Doctor</Link>
	          </li>
	          <li>
              <Link to="/DocDashboard">Existing Patient</Link>
	          </li>
	          <li>
            <Link to="/patient">New Patient</Link>
	          </li>
	          {/* <li>
              <a href="#">Portfolio</a>
	          </li>
	          <li>
              <a href="#">Contact</a>
	          </li> */}
	        </ul>

	        <div class="footer">
	        	
	        </div>

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
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="containere">

<div class="row height d-flex justify-content-center align-items-center">

  <div class="col-md-8">

    <div class="search">
      
      <input type="text" value={Adhaar} onChange={(e) => {setAdhaar(e.target.value)}} class="formee-control" placeholder="Please Enter Patient Aadhar No"/>
      <button class="btn txts" onClick={handleClick} value="Search">Search</button>
    </div>
    
  </div>
  
</div>
</div>
        </div>
        </div>
    {/* <form class="search-container">
    <input type="text" value={Adhaar} onChange={(e) => {setAdhaar(e.target.value)}} id="search-bar" placeholder="Please Enter Patient Aadhar No"/>
    <input type="button" onClick={handleClick} value="Search..."></input>
    <p id="para"></p>
  </form> */}

  

  
  
    </> );
}

export default DocDashboard;