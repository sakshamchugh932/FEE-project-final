import React from 'react'
import Header from '../componenet/Header'
import Navbar from '../componenet/Navbar'
import Home from '../componenet/Home'
import Welcome from '../componenet/Welcome'
import Footer1 from '../componenet/Footer1'
import Footer from '../componenet/Footer'
import Service from '../componenet/Service'
import Notice from '../componenet/Notice'
import About from "../componenet/About"
import Testimonial from "../componenet/Testimonial"
import Contact from "../componenet/Contact"

function Homepage() {
  return (
    <div>
    <Header/>
    <Navbar/>
    <Home/>
    <Welcome/>
    <Service/>
    <About/>
    <Notice/>
    <Testimonial/>
    <Contact/>
    <Footer1/>
    <Footer/>
    </div>
  )
}

export default Homepage