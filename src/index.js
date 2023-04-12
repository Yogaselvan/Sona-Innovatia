import React,{StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Operation from './pro/AddOperations';
import Medicine from './pro/Addmedicine';
import DocDashboard from './pro/DocDashboard';
import DocView from './pro/DocHome';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Dash from './pro/PatBio';
import Prescreption from './pro/AddPrescription';
import Patient from './pro/patient';
import Copies from './pro/AddCopies';
import SignUp from './firebaseComponents/Signup';
import Login from './firebaseComponents/Login';
import ViewMedicine from './pro/ViewMedicine';
import ViewPrescription from './pro/ViewPrescription';
import PatientView from './pro/PatientView';
//import DocDash from './pro/search';
//import Patient from './pro/patient';
//import Hospital from './pro/hospital';
//import Hospital from './pro/hospital';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
      <BrowserRouter>
    <Routes>
      
      <Route path="/DocView" element={<DocView/>}/>
      <Route path="/PatientView" element={<PatientView/>}/>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/DocDashboard" element={<DocDashboard/>}/>
      <Route path="/PatBio" element={<Dash/>}/>
     <Route path="/patient" element={<Patient/>}/> 
     <Route path="/ViewMedicine" element={<ViewMedicine/>}/> 
     <Route path="/ViewPrescription" element={<ViewPrescription/>}/> 


      <Route path="/Dashboard" element={<Dash/>}/>
      <Route path="/Addmedicine" element={<Medicine/>}/>
      <Route path="/AddOperations" element={<Operation/>}/>
      <Route path="/AddPrescription" element={<Prescreption/>}/>
      <Route path="/AddCopies" element={<Copies/>}/>
    </Routes>
    </BrowserRouter>  
    {/* <ViewMedicine/> */}
  </StrictMode>
);


