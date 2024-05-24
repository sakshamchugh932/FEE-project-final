import React from 'react'

function Home() {
  return (
    <div className="container-fluid">
        <div className="main row p-3">
        <div className="col-sm-12"><br/></div>
        <div className="col-sm-2"></div>
        <div className="col-sm-8 ">
            <div className="row p-2">
                <div className="col-6 p-2">
                    <div className="main_cont mb-2 p-2">
                        <img src={require("../images/main_hz_line.png")}/>
                        <h1 className="mt-3 heading pop">AUTOS &<br/> TRANSPORTATION</h1>
                    </div>
                    <p className="mt-4 mb-4 p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet scelerisque felis. Suspendisse potenti. Aenean a risus condimentum, congue magna a, venenatis sem. </p>
                    &emsp;<button className="main_but mb-3">CONTACT US &emsp;</button>
                </div>
                <div className=" col-sm-6 main_form mb-3 ">
                    <h3 className="p-4 pb-2">Get your transport quote</h3>
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <form>
                                <input className="main_form_inp" type="text" placeholder="Location" required/><br/><br/>
                                <input className="main_form_inp" type="text" placeholder="To destination" required/><br/><br/>
                                <input className="main_form_inp" type="email" placeholder="Email" required/><br/><br/>
                                <input className="main_form_inp" type="number" placeholder="Contact Number" required/><br/><br/>
                                <button className="main_form_but mb-3">GET NOW QUOTE</button>
                            </form>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="col-2"></div>
    </div>
    </div>
  )
}

export default Home;