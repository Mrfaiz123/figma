import React from "react";
import logo from "../images/logo 1.png"
import img5 from "../images/image 1.png"

function Footer() {

    return (
      <>
        <div className="container-fluid "style={{"backgroundColor":"black"}} >
            <div className="container">
                <div className="row  d-flex justify-content-between text-white ">  
                  <div className="col-lg-3 col-md-4 col-sm-5 p-0 m-0 p-3" >
                    <h4 style={{"fontWeight":"bold"}}>
                      <img src={logo} />
                    </h4>
                    <p className=" mt-4 ">Leo dui fermentum tristique urna <br/> tellus eget amet aliquam. Id vitae <br/> orci maecenas tortor odio Leo dui <br/> fermentum tristique urna tellus <br/> eget amet aliquam.</p>
                   <div className="d-flex flex-wrap">
                      <img src={img5}/>
                      <img src={img5}/>
                      <img src={img5}/>
                      <img src={img5}/>
                      <img src={img5}/>
                      <img src={img5}/>
                   </div>
                    
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-5 p-3 m-0 " >
                    <h4 style={{"fontWeight":"bold","fontFamily":"pop"}}>Quick Links</h4>
                    <p className="mt-4">Home</p>
                    <p>Chi Siamo</p>
                    <p>S.I.R.E</p>
                    <p>SIRE Features</p>
                    <p>Why SIRE?</p>
                    <p>SIRE Product</p>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-5 p-3 m-0 " >
                    <h4 style={{"fontWeight":"bold","fontFamily":"pop"}}>Useful Links</h4>
                    <p className=" mt-4">Help Center</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Condition</p>
                    <p>FAQ</p>
                    <p>Documents</p>
                    <p>Lindked Here</p>
                

                  </div>
                  
                  <div className="footer col-lg-4 col-md-6 col-sm-6 p-3 m-0 " >
                      <h5 style={{"fontWeight":"bold","fontFamily":"pop"}}>Contact Us</h5>
                      <div className="mt-4">
                        <div className="d-flex justify-content-between"style={{"width":"95%"}}>
                          <p style={{"fontSize":"30px"}}><ion-icon name="location-outline"></ion-icon></p>
                          <h1 style={{"fontSize":"17px"}}>Leo dui fermentum tristique urna <br/> tellus eget amet aliquam. Id <br/> vitae orci</h1>
                        </div>
                        <div className="d-flex justify-content-between" style={{"width":"62%"}}>
                          <p style={{"fontSize":"30px"}}><ion-icon name="mail-open-outline"></ion-icon></p>
                          <h1 style={{"fontSize":"17px"}}>faizaliabdulhameed</h1>
                        </div>
                        <div className="d-flex justify-content-between " style={{"width":"50%"}}>
                          <p style={{"fontSize":"30px"}}><ion-icon name="call-outline"></ion-icon></p>
                          <h1 style={{"fontSize":"17px"}}>0307 0451883</h1>
                        </div>
                      </div>
                  </div>
                </div>
             </div>
        </div> 
      </>
    );
  }
  
  export default Footer;