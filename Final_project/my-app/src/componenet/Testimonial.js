import React from 'react'

function Testimonial() {
  return (
    <div className='container-fluid'>
        <div className=" row testimonial">
        <div className="colsm-12">
            <div className="row testimonial_main">
            <div className="col-sm-4"></div>
            <div className="col-sm-4 pt-5">
                <h3>Testimonial</h3>
                <img className="welcome_img" src={require("../images/testi_underline.png")}/>
            </div>
            <div className="col-sm-4"></div>
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <div className="owl-carousel owl-theme">
                  <div className="item">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="testi_user"><img src={require("../images/testi_user.png")}/></div>
                        <div className="testi_head"><br/><h4>Consectetur</h4></div>
                        </div>
                        <div className="col-sm-12 testi_para">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet scelerisque felis.
                        </p>
                        </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="testi_user"><img src={require("../images/testi_user.png")}/></div>
                        <div className="testi_head"><br/><h4>Consectetur</h4></div>
                        </div>
                        <div className="col-sm-12 testi_para">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet scelerisque felis.
                        </p>
                        </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="testi_user"><img src={require("../images/testi_user.png")}/></div>
                        <div className="testi_head"><br/><h4>Consectetur</h4></div>
                        </div>
                        <div className="col-sm-12 testi_para">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet scelerisque felis.
                        </p>
                        </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="testi_user"><img src={require("../images/testi_user.png")}/></div>
                        <div className="testi_head"><br/><h4>Consectetur</h4></div>
                        </div>
                        <div className="col-sm-12 testi_para">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet scelerisque felis.
                        </p>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div> 
        </div>
        
    </div>
    </div>
  )
}

export default Testimonial