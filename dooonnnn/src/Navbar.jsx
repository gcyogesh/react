import React from "react";
import hero from './img/moon.png';
import {Link} from "react-router-dom";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

import './Home.css';


const Navbar = ()=>{
    return(
    <>
    
   <nav class="navbar navbar-expand-lg " id="nav1" >
        <div class="container-fluid" >
        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/356571580_1556564328214360_8484287370675820080_n.png?_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=nTA9C8UfrHwAX--pFac&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTbjbcBFEUOdjunFF3TzfHPpL-oZIl24Z694Y572rfanw&oe=64D494EB" id="photo1" alt="Logo" />
          <button id="don" class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span  class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse  mehe " id="navbarSupportedContent" >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"  id="yg" >
              <li class="nav-item" >
                <a class="nav-link " id="nav2"  href="#" ><Link to="/home"> Home </Link> </a>
              </li>

              <li class="nav-item">
                
                <a class="nav-link " id="nav2"  href="#" ><Link to="/about"> About Me </Link> </a>
              </li>
            
              <li class="nav-item ">
              <a class="nav-link " id="nav2"  href="#" ><Link to="/portfolio"> Portfolio </Link> </a>
               
              </li>
              <li class="nav-item">
              <a class="nav-link " id="nav2"  href="#" ><Link to="/contact"> Contact </Link> </a>
              </li>
              
              <li class="nav-item">
                
              <img src={hero} id="photo2" alt="Logo" />
              <button id="mouse" class="btn" type="button">Lets Connect</button>
              </li>

            </ul>

          </div>
        </div>
      </nav>

      

    </>
)}
export default Navbar;




