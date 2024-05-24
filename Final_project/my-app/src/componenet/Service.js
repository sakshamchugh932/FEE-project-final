import React from 'react'

function Service() {
  return (
    <div className="container-fluid">
        <div className="row services p-5">
        <div className="col-sm-12"></div>
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
            <h1>SERVICES</h1>
            <img src={require("../images/heading_underline.png" )}className="welcome_img"/>
        </div>
        <div className="col-sm-4"></div>
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet scelerisque felis. Suspendisse potenti. Aenean a risus condimentum, congue magna a, venenatis sem.
            </p>
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
            <div className="row">
                <div className="col-sm-2 p-1 m-3"><img src={require("../images/services1.png")}/><br/>FLY ANYWHERE</div>
                <div className="col-sm-2 p-1 m-3"><img src={require("../images/services2.png")}/><br/>CARGO SERVICE</div>
                <div className="col-sm-2 p-1 m-3"><img src={require("../images/services3.png")}/><br/>COURIER SERVICES</div>
                <div className="col-sm-2 p-1 m-3"><img src={require("../images/services4.png")}/><br/>BOX STORAGE</div>
                <div className="col-sm-2 p-1 m-3"><img src={require("../images/services5.png")}/><br/>100% SAFE</div>
            </div>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-12 mb-3"></div>
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
            <button className="services_but p-5 pt-2 pb-2">READ MORE</button>
        </div>
        <div className="col-sm-4"></div>
    </div>
    </div>
  )
}

export default Service;