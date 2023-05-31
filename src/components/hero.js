import React from "react";


function Hero() {

    return (
      <>
          <div className="hero container-fluid " >
            <div className="container " style={{"height":"100%"}}>
                <div className=" row " style={{"height":"100%"}}>  
                    <div className="d-flex flex-column justify-content-center text-center" >
                        <h1 className="text-white" style={{"fontSize":"80px","fontWeight":"300px","fontFamily":"Poppins"}}>Il tuo accesso al sole</h1>
                        <p className="text-white">Sistemi fotovoltaici intelligenti ad uso residenziale, anche in assenza di tetto.
                        <br/> La tua fonte d'energia, gratuita e sostenibile</p>
                    </div>
                </div>
            </div>
          </div>
    </>
    )
}
export default Hero        