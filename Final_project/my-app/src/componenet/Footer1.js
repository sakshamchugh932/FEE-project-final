import React from 'react'

function Footer1() {
  return (
    <div className='container-fluid'>
        <div className="row footer1">
            <div className="col-sm-1"></div>
            <div className="col-sm-2 pt-2">
                <div className="foot_cont pt-2">
                    <img src={require("../images//call.png")}/>
                    <p>&ensp;Call Now &nbsp; +01 1234567890</p>
                </div>
            </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-2 pt-2">
                <div className="foot_cont pt-2">
                    <img src={require("../images/map.png")}/>
                    <p> &ensp;Location</p>
                </div></div>
            <div className="col-sm-2"></div>
            <div className="col-sm-2 pt-2">
                <div className="foot_cont pt-2">
                    <img src={require("../images/mail.png")}/>
                    <p>&ensp;demo@gmail.com</p>
                </div></div>
            <div className="col-sm-1"></div>
        </div>
    </div>
  )
}

export default Footer1