import React from 'react'

function Footer() {
  return (
    <div className="container-fluid">
        <div className="row footer">
        <div className="col-sm-12"><br/></div>
        <div className="col-sm-1"></div>
        <div className="col-sm-5 p-2 footer_left">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8 footer_left_head">
                    <h1>
                        DENSO
                    </h1>
                </div>
                <div className="col-sm-2"></div>
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet scelerisque felis. Suspendisse potenti. Aenean a risus condimentum, congue magna a, venenatis sem. Praesent tempus, purus sit amet bibendum mollis, urna elit egestas dui, a finibus elit massa vitae est. Praesent ut elementum justo. Morbi eu lectus et augue commodo cursus id sit amet massa. Vivamus tristique tellus id velit tempor hendrerit.
            </p>
                </div>
                <div className="col-sm-2"></div>
            </div>
            
            <div className="footer_icon pt-1 pb-1 p-5">
                <ul>
                    <li>
                        <a href="#">
                            <img src={require("../images/fb-icon.png")}/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={require("../images/twitter.png")}/>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={require("../images/linkedin-icon.png")}/>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={require("../images/instagram-icon.png")}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="col-sm-2 footer_icon_right footer_right">
            <ul>
                <li>
                    <h4>Information</h4>
                </li>
                <li>There are many</li>
                <li>varitions of pos-</li>
                <li>sages of Lorem</li>
                <li>Ipsum available.</li>
                <li>but the majority</li>
            </ul>
        </div>
        <div className="col-sm-2 footer_icon_right">
            <ul>
                <li>
                    <h4>Helpful Links</h4>
                </li>
                <li>There are many</li>
                <li>varitions of pos-</li>
                <li>sages of Lorem</li>
                <li>Ipsum available.</li>
                <li>but the majority</li>
            </ul>
        </div>
        <div className="col-sm-2 footer_icon_right">
            <ul>
                <li>
                    <h4>Supported</h4>
                </li>
                <li>There are many</li>
                <li>varitions of pos-</li>
                <li>sages of Lorem</li>
                <li>Ipsum available.</li>
                <li>but the majority</li>
            </ul>
        </div>
        <div className="col-sm-12"><br/></div>
        <div className="col-sm-12 end p-3 pb-1">
            <p>
                &copy;2019 All Rights Reserved. Free html Templates
            </p>
        </div>
    </div>
    </div>
  )
}

export default Footer