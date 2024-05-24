import React from 'react'

function Notice() {
  return (
    <div className="container-fluid">
        <div className=" row news pb-5">
        <div className="col-sm-4"></div>
        <div className="col-sm-4 pt-5 pb-3">
            <h3>LATEST NEWS AND EVENTS</h3>
            <img className="about_left_img" src={require("../images/heading_underline.png")}/>
        </div>
        <div className="col-sm-4"></div>
        <div className="col-sm-4 p-4 pt-1">
            <div className="news2_bg">
                <img className="news_img" src={require("../images/news1.png")}/>
                <div className="news1_bg">
                    <div className="news_step1">
                    <img src={require("../images/news_step.png")}/>
                    <p>01<br/>Step</p>
                </div>
                <div className="pt-3 news1">
                    <h6>LIBERALISATION OF AIR CARGO INDUSTRY</h6>
                    <p className="p-4 pt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet scelerisque felis. Suspendisse potenti. Aenean a risus condimentum, congue magna a, venenatis sem. Praesent tempus, purus sit amet bibendum mollis, urna elit egestas dui,
                    </p>
                </div>
                </div>
                
            </div>
        </div>
        <div className="col-sm-4 p-4 pt-1 ">
            <div className="news2_bg">
                <img className="news_img" src={require("../images/news2.png")}/>
                <div className="news_step1">
                    <img src={require("../images/news_step.png")}/>
                    <p>02<br/>Step</p>
                </div>
                <div className="pt-3 news1">
                    <h6>NEW WAREHOUSE NOW OPERATIONAL</h6>
                    <p className="p-4 pt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet scelerisque felis. Suspendisse potenti. Aenean a risus condimentum, congue magna a, venenatis sem. Praesent tempus, purus sit amet bibendum mollis, urna elit egestas dui,
                    </p>
                </div>
            </div>
        </div>
        <div className="col-sm-4 p-4 pt-1">
            <div className="news2_bg">
                <img className="news_img" src={require("../images/news3.png")}/>
                <div className="news1_bg">
                    <div className="news_step1">
                    <img src={require("../images/news_step.png")}/>
                    <p>03<br/>Step</p>
                </div>
                <div className="pt-3 news1">
                    <h6>NEW TRUCKS ARRIVING</h6>
                    <p className="p-4 pt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet scelerisque felis. Suspendisse potenti. Aenean a risus condimentum, congue magna a, venenatis sem. Praesent tempus, purus sit amet bibendum mollis, urna elit egestas dui,
                    </p>
                </div>
                </div>
                
            </div>
        </div>
        <div className="col-sm-5"></div>
        <div className="col-sm-2">
            <button className="services_but">
                &ensp; Read More &ensp;
            </button>
        </div>
        <div className="col-sm-5"></div>
    </div>
    </div>
  )
}

export default Notice