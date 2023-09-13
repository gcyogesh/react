import React from "react"
import gc from './img/hero.png.png'
import Navbar from "./Navbar"
import './Home.css'

const Home =()=>{
    return(
        <>
        <div class="container-fluid" id="nav3">
        <div class="row">
          <div class="col-md-6">
       <h1 id="goru" >HI  I'm <span id="yogesh">Yogesh</span>  G.C.</h1>
       <p id="results">This is my official portfolio website to  showcase my all works  related to  web  development.</p>
       <button class="glow-on-hover" type="button">Download CV</button>
        <div class="icon">
       <i id="icon1" class="bi bi-linkedin"></i>
       <i id="icon2" class="bi bi-facebook"></i>
       <i id="icon3" class="bi bi-envelope"></i>
      </div>
    </div>
     <div id="kkk" class="col-md-6">
       <img id="chitra" src={gc} alt=""/>
       
      </div>


      
    </div>
      
      </div>
        </>
    )
}
export default Home;