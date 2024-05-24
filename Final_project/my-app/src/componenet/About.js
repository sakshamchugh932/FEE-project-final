import React from 'react'

function About() {
  return (
    <div className="container-fluid">
        <div className="row about">
        <div className="col-sm-12"><br/></div>
        <div className="col-sm-6 p-5 pt-3 pb-3 about_left">
            <br/><br/>
            <h3 className="">ABOUT TRANSPORT</h3>
            <img className="about_left_img" src={require("../images/heading_underline.png")}/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet scelerisque felis. Suspendisse potenti. Aenean a risus condimentum, congue magna a, venenatis sem. Praesent tempus, purus sit amet bibendum mollis.
            </p>
            <button className="services_but p-5 pt-2 pb-2">READ MORE</button>
        </div>
        <div className="col-sm-5 p-5 pt-1 pb-1 about_right">&emsp;<br/></div>
        <div className='col-sm-1'></div>
        <div className="col-sm-12"><br/></div>
    </div>
    </div>
  )
}

export default About