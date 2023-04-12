// import "./nav.css"
import * as React from 'react';
import "./DocHome.css"
import { Link } from 'react-router-dom';


function DocView() {
    return ( <>
    <div className="wrapper d-flex align-items-stretch">
			<nav id="sidebar">
				<div className="p-4 pt-5">
		  		<a href="#" className="img logo rounded-circle mb-5"></a>
	        <ul className="list-unstyled components mb-5">
	          <li className="active">
              <Link to="/">Doctor</Link>	            
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

	        <div className="footer">
	        	
	        </div>

	      </div>
    	</nav>

        
      <div id="content" className="p-4 p-md-5">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">

            <button type="button" id="sidebarCollapse" className="btn btn-primary">
              <i className="fa fa-bars"></i>
              <span className="sr-only">Toggle Menu</span>
            </button>
            <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Dotors</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Existing Patient</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">New Patient</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Profile</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
        </div>
        <div className="contains">
        <div class="image-area">
		<div class="img-wrapper">
			<img src="https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Atul Prajapati"/>
			<h2>Dr.Arun Kumar-Neuro</h2>
			<ul>
				<li><a href="https://github.com/atuljustano"><i class="fab fa-github"></i></a></li>
				<li><a href="https://www.instagram.com/atulkprajapati2000/"><i class="fab fa-instagram"></i></a></li>
				<li><a href="https://twitter.com/atuljustano"><i class="fab fa-twitter"></i></a></li>
				<li><a href="https://www.youtube.com/channel/UCf-KfxuY8PZBSD_8RW2nYsw"><i class="fab fa-youtube"></i></a></li>
			</ul>
		</div>
	</div>
        <div class="image-areas">
		<div class="img-wrapper">
			<img src="https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Atul Prajapati"/>
			<h2>Dr.Yoga Selvan-Cardio</h2>
			<ul>
				<li><a href="https://github.com/atuljustano"><i class="fab fa-github"></i></a></li>
				<li><a href="https://www.instagram.com/atulkprajapati2000/"><i class="fab fa-instagram"></i></a></li>
				<li><a href="https://twitter.com/atuljustano"><i class="fab fa-twitter"></i></a></li>
				<li><a href="https://www.youtube.com/channel/UCf-KfxuY8PZBSD_8RW2nYsw"><i class="fab fa-youtube"></i></a></li>
			</ul>
		</div>
	</div>
        <div class="image-areass">
		<div class="img-wrapper">
			<img src="https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Atul Prajapati"/>
			<h2>Dr.Vishwa-Ortho</h2>
      
			<ul>
				<li><a href="https://github.com/atuljustano"><i class="fab fa-github"></i></a></li>
				<li><a href="https://www.instagram.com/atulkprajapati2000/"><i class="fab fa-instagram"></i></a></li>
				<li><a href="https://twitter.com/atuljustano"><i class="fab fa-twitter"></i></a></li>
				<li><a href="https://www.youtube.com/channel/UCf-KfxuY8PZBSD_8RW2nYsw"><i class="fab fa-youtube"></i></a></li>
			</ul>
		</div>
	</div>
  </div>
    

    </> );
}

export default DocView;