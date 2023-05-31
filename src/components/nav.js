import React from "react";
import img from "../images/logo 1.png"

function Nav() {

    return (
      <>
          <div className="container-fluid p-4" style={{"backgroundColor":"white"}}>
            <div className="container ">
                <div className=" row d-flex justify-content-between ">  
                    <div className="col-lg-2 col-md-2 col-sm-12 p-0 m-0 ">
                        <img src={img} style={{"cursor": "pointer" }} />
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-12 p-0 m-0">
                        <ul className=" d-flex justify-content-around align-items-center  h-100 list-unstyled ">
                            <li  style={{"cursor": "pointer","color":"#86BE3F","font-weight":"bold","fontSize":"22px" }}> <ion-icon name="call-outline"></ion-icon></li>
                            <li className="" style={{"cursor": "pointer","color":"#8A8888","font-weight":"bold" }}>03070451883</li>
                            <li className=" rounded" style={{"font-weight":"bold","cursor": "pointer","color":"#86BE3F","fontSize":"22px"}}><ion-icon name="mail-open-outline"></ion-icon></li>
                            <li className=" rounded" style={{"color":"#8A8888","font-weight":"bold","cursor": "pointer"}}>faizaliabdulhameed</li>
                            <li className="text-white rounded py-2 px-4" style={{"backgroundColor":"#86BE3F","cursor": "pointer","font-weight":"bold"}}>Contact</li>
                        </ul>
                    </div>
                </div>
               
            </div>
          </div>
          <div className="container-fluid border">  
            <div className="container ">
                <div className=" row ">  
                    <div className="col-lg-12 col-md-12 col-sm-12 p-0 m-0 ">
                        <ul className=" d-flex flex-wrap justify-content-between align-items-center  h-100 list-unstyled ">
                            <li className="col-md-2 col-sm-4" style={{"color":"#86BE3F"}}>Home</li>
                            <li className="col-md-2 col-sm-4">Chi Siamo</li>
                            <li className="col-md-2 col-sm-4">S.I.R.E</li>
                            <li className="col-md-2 col-sm-4">SIRE Features</li>                            
                            <li className="col-md-2 col-sm-4">Why SIRE?</li>
                            <li className="col-md-2 col-sm-4">SIRE Product</li>
                        </ul>
                    </div>
                </div>
            </div>

          </div>
          
      </>
  
    );
  }
  
  export default Nav;