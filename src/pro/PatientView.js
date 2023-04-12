import { Link } from "react-router-dom"
import "./PatBio.css"
import { useEffect, useState } from "react";
// import Pat from "./Addpat";


function PatientView() {
    const [patient,setPatient] = useState("");
    useEffect(() => {
        const patient = localStorage.getItem('patient');
        setPatient(JSON.parse(patient));
    },[])
    console.log(patient);
    return ( <>
  
    <div class="wrapper d-flex align-items-stretch">
			
      
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
                    <a href="#" class="nav-link">Home</a>
                </li>
                <li class="nav-item" style={{padding : 5}}>
                    <Link to="/ViewMedicine">View Medicine</Link>
                </li>
                <li class="nav-item" style={{padding : 5}}>
                    <Link to="/ViewPrescription">View Prescreption</Link>
                </li>
                <li class="nav-item" style={{padding : 5}}>
                    <Link to="/ViewMedicine">View Operation</Link>
                    {/* <a href="#" class="nav-link" to="#">View Opreations</a> */}
                </li>
                <li class="nav-item" style={{padding : 5}}>
                    <Link to="/ViewMedicine">View Records</Link>
                    {/* <a href="#" class="nav-link" to="#">View Records</a> */}
                </li>
                
              </ul>
            </div>
          </div>
        </nav>

        
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>



<div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                            
                                    </h5>
                                    <h6>
                                        Actor
                                    </h6>
                
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Patient Details</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>First Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{patient.Name}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Last Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>A</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Aadhar</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{patient.Adhaar}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Blood Group</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{patient.BloodGroup}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Gender</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Female</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>DOB</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{patient.DOB}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Ph.No</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{patient.Phone_Number}</p>
                                            </div>
                                        </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            </form>
                            </div>
      </div>
		</div>
        
    </> );
}

export default PatientView;