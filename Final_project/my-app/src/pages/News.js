import React from 'react'
import Header from '../componenet/Header'
import Navbar from '../componenet/Navbar'
import Notice from '../componenet/Notice'
import Footer1 from '../componenet/Footer1'
import Footer from '../componenet/Footer'

function News() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Notice/>
        <Footer1/>
        <Footer/>
    </div>
  )
}

export default News