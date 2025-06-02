

import React,{useState} from "react"
import Navbar from "./Navbar";
import "./style.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from "./components/Home/Home"
import Projects from "./components/Projects/Projects"
import Resume from "./components/Resume/Resume"
import About from "./components/About/About"
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";


function App(){
  const [load, upadateLoad] = useState(false);
  

  return (
    <Router>
      <div className="App" id={load? "no-scroll":"scroll"}>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/project" element={<Projects/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>

      </div>
    </Router>

  )
}


export default App;
