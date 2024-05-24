import {BrowserRouter as Router, Route, Routes, Link, BrowserRouter} from "react-router-dom";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Transport from "./pages/Transport";
import News from "./pages/News";
import Clients from "./pages/Clients";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/About" element={<Aboutus/>}/>
        <Route path="Transport" element={<Transport/>}/>
        <Route path="/News" element={<News/>}/>
        <Route path="/Clients" element={<Clients/>}/>
        <Route path="/Contact" element={<Contactus/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
