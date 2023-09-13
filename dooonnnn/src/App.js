// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Portfolio  from './Portfolio';
import Contact  from './Contact';
import { ReactDOM } from 'react';
import { BrowserRouter,  Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>   
      <Routes>
        <Route  path="/" element={<Home />}>
        
          <Route  path="/contact" element={<Contact />} />
          <Route  path="/portfolio" element={<Portfolio />} />
          <Route  path="/portfolio" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
