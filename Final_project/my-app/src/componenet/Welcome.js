import React from 'react'

function Welcome() {
  return (
    <div className="container-fluid"><div className="row welcome p-5">
        <div className="col-sm-12"></div>
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
            <h1>WELCOME TO DENSO TRANSPORT</h1>
            <img src={require("../images/heading_underline.png")} className="welcome_img"/></div>
        <div className="col-sm-4"></div>
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet scelerisque felis. Suspendisse potenti. Aenean a risus condimentum, congue magna a, venenatis sem. Praesent tempus, purus sit amet bibendum mollis, urna elit egestas dui, a finibus elit massa vitae est. Praesent ut elementum justo. Morbi eu lectus et augue commodo cursus id sit amet massa. Vivamus tristique tellus id velit tempor hendrerit. </p>
        </div>
        <div className="col-sm-2"></div>
    </div></div>
  )
}

export default Welcome;