import React from "react";




function Contact() {

    return (
      <>
          <div className="container-fluid " >
            <div className="container pt-5 pb-5">
                <div className="row  d-flex justify-content-around ">  
                    <div className="text-center  d-flex flex-column justify-content-center align-items-center">
                        <h1>CONTATTACI</h1>
                        <div style={{"borderRadius":"50px","height":"5px" ,"width":"15%","backgroundColor":"#86BE3F"   }}></div>


                    </div>
                    <div className="d-flex flex-wrap justify-content-between ">
                      <div className=" col-lg-4 col-md-5 border  col-sm-12 d-flex flex-column p-3 mt-5 justify-content-between " style={{"borderRadius":"15px"}}>
                        <div className="d-flex justify-content-between col-md-12 col-sm-12 ">
                            <div >
                                <p style={{"fontSize":"30px"}}><ion-icon name="location-outline"></ion-icon></p>
                                <p style={{"fontSize":"30px"}}><ion-icon name="mail-open-outline"></ion-icon></p>
                                <p style={{"fontSize":"30px"}}><ion-icon name="call-outline"></ion-icon></p>
                            </div>   
                            <div className="d-flex flex-column justify-content-around" style={{"fontWeight":"bold"}}>
                                <h1 style={{"fontSize":"17px"}}>Leo dui fermentum tristique urna <br/> tellus eget amet aliquam. Id <br/>vitae orci </h1>
                                <h1 style={{"fontSize":"17px"}}>faizaliabdulhameed</h1>
                                <h1 style={{"fontSize":"17px"}}>0307 0451883</h1>
                            </div>
                        </div>
                        <div  style={{"height":"1px" ,"width":"100%"}}></div>
                        <h1 className="mt-3" style={{"fontSize":"16px"}}>We Will get back to you within<br/>24 hours. Or Call us Now</h1>

                       </div>



                       <div className=" col-md-6 col-lg-7  col-sm-12 d-flex flex-column p-3 mt-5 justify-content-around  " style={{"borderRadius":"15px"}}>
                            <div className=" d-flex justify-content-between ">
                                <input className="col-md-5 p-2" placeholder="First Name" style={{"borderRadius":"5px"}}/>
                                <input className="col-md-5 p-2" placeholder="Last Name" style={{"borderRadius":"5px"}}/>
                            </div>   
                            <div className="d-flex flex-column justify-content-around align-items-center" style={{"fontWeight":"bold","height":"100%"}}>
                                <input className="col-md-12 col-sm-12 p-2" placeholder="Email" style={{"borderRadius":"5px"}}/>
                                <input className="col-md-12 col-sm-12 p-2" placeholder="Message" style={{"height":"100px" , "borderRadius":"5px"}}/>

                                <div className="col-12 d-flex justify-content-between">
                                    <div></div>
                                    <button className="px-4 py-1" style={{"backgroundColor":"#86BE3F","borderRadius":"15px"}}>Send</button>
                                </div>
                            </div>
                       </div>

                    </div>
                        
                        
                </div>
             </div>
            </div>
      </>
  
    )
  }
  
  export default Contact;