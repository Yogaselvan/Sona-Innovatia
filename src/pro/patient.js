import { useState } from "react";
import "./patient.css";
import FormInput from "../pro/forminput.js";
import { Link } from "react-router-dom";
import { db } from "../firebase";
const usersCollection = db.collection('Patient');
const Patient = () => {
  const [values, setValues] = useState({
    Name: "",
    Phn_No: "",
    DOB: "",
    Blood_Group: "",
    Adhaar: "",
    ConfirmAadhaarNumber: "",
  });

  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
 };
  const handleClick = () =>{
      const currentUser = getUserFromLocalStorage();
      console.log(values);
      const userData = {
        "Name" : values.username,
        "BloodGroup" : values.Blood_Group,
        "Phone_Number" : values.Phn_No        ,
        "email" : currentUser.email ,
        "DOB" : values.birthday,
        "Adhaar" : values.AadhaarNumber
      };
      usersCollection.add(userData)
        .then((docRef) => {
          console.log('Document written with ID:', docRef.id);

        })
        .catch((error) => {
          console.error('Error adding document:', error);
        });
      
  }
  
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      //errorMessage:
        //"Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      required: true,
    },
    {
      id: 2,
      name: "Phn_No",
      type: "number",
      placeholder: "Phn No",
      errorMessage:
        "PhoneNumber should  have Number only!",
      label: "Phone No",
      required: true,
    },
    {
      id: 3,
      name: "Blood_Group",
      type: "text",
      placeholder: "Blood Group",
      //errorMessage:
        //"Username should be 3-16 characters and shouldn't include any special character!",
      label: "Blood Group",
      required: true,
    },
    {
      id: 4,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 5,
      name: "AadhaarNumber",
      type: "AadhaarNumber",
      placeholder: "Aadhaar Number",
      //errorMessage:
        //"AadhaarNumber should  have Number only!",
      label: "Aadhaar Number",
      required: true,
    },
    
    {
      id: 6,
      name: "ConfirmAadhaarNumber",
      type: "AadhaarNumber",
      placeholder: "Confirm Aadhaar Number",
      errorMessage: "AadhaarNumber don't match!",
      label: "Confirm Aadhaar Number",
      pattern: values.AadhaarNumber,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div class="wrapper d-flex align-items-stretch">
			<nav id="sidebar">
				<div class="p-4 pt-5">
		  		<a href="#" class="img logo rounded-circle mb-5"></a>
                  <ul class="list-unstyled components mb-5">
	          <li class="active">

                       <Link to="/DocView">Doctor</Link>
	               <ul class="collapse list-unstyled" id="homeSubmenu">
	            </ul>
	          </li>
	          <li>
	              <Link to="/DocDashboard">Existing Patient</Link>
	          </li>
	          <li>
	              <Link to="/patient">New Patient</Link>
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
                    <a href class="nav-link" to="/medicine">Existing patient</a>
                </li>
                <li class="nav-item">
                    <a href class="nav-link" to="#">New Patient</a>
                </li>
                <li class="nav-item">
                    <a href class="nav-link" to="#">Profile</a>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>

    <div className="appl">
      <form className="yuvi" onSubmit={handleSubmit}>
        <h2>New Patient Register</h2>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="buttons" onClick={handleClick}>Submit</button>
      </form>
    </div>
    </div>
  </div>
  );
};

export default Patient;