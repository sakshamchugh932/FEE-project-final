import React from 'react'

function Contact() {
  return (
    <div className="container-fluid">
        <div className="row contact">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
            <h1>
                REQUEST A CALLBACK
            </h1>
            <img className="about_left_img" src={require("../images/heading_underline.png")}/>
        </div>
        <div className="col-sm-3"></div>
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
            <form className="callback_form">
                <input type="text" placeholder="Name" required/><br/><br/>
                <input type="email" placeholder="Email" required/><br/><br/>
                <input type="number" placeholder="Phone Number" required/><br/><br/>
                <textarea type="textarea" className="callback_msg" placeholder="Message" required></textarea><br/><br/>
                <button>SEND</button>
            </form>
        </div>
        <div className="col-sm-3"></div>
        <div className="col-sm-12"><br/><br/></div>
    </div>
    </div>
  )
}

export default Contact