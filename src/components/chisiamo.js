import React from "react";
import img3 from "../images/Testoni Cristian.png"
import img4 from "../images/Gavioli.png"
import img5 from "../images/Massimo Fabi_ direttore commerciale.png"


function Chi() {

    return (
      <>
          <div className="container-fluid " >
            <div className="container ">
                <div className=" row ">  
                    <div className="pt-5 d-flex flex-column justify-content-center align-items-center text-center"style={{"height":"100%"}} >
                        <h1 className="" style={{"fontSize":"40px","fontWeight":"200px","fontFamily":"Poppins"}}>Chi Siamo</h1>
                        <div className="" style={{"width":"10%","height":"2px","backgroundColor":"#86BE3F"}}></div>
                        <p className="pt-3">Solar Innovatio è una PMI innovativa italiana specializzata nella progettazione e realizzazione di sistemi fotovoltaici intelligenti.
                        <br/> Solar Innovatio unisce alla decennale esperienza maturata nel panorama italiano nell'ambito delle soluzioni fotovoltaiche un
                        <br/> approccio ingegneristico, innovativo, digitale alla principale fonte di energia rinnovabile.</p>
                        <div className="col-md-12 col-sm-12 pt-2 d-flex flex-wrap justify-content-between" style={{"height":"100%"}}>
                            <div className="col-md-4 col-sm-12" style={{"height":"auto"}}>
                                <img src={img3} style={{"height":"25vh" ,"width":"50%"}}/>
                                <h1 className="pt-3" style={{"fontSize":"25px","fontFamily":"Poppins"}}>Cristian Testoni</h1>
                                <p style={{"fontSize":"17px","fontFamily":"Poppins"}}>Ingegnere Meccanico, MBA. Ho ricoperto <br/> cariche di consulente e progettista in aziende
                                <br/> meccaniche. Ho avviato come imprenditore <br/> svariate iniziative in ambito Automotive e<br/> mobilità. </p>
                            </div>
                            <div className="col-md-4 col-sm-12" style={{"height":"auto"}}>
                                <img src={img4} style={{"height":"25vh" ,"width":"50%"}}/>
                                <h1 className="pt-3" style={{"fontSize":"25px","fontFamily":"Poppins"}}>Francesco Gavioli</h1>
                                <p style={{"fontSize":"17px","fontFamily":"Poppins"}}>Ingegnere Meccanico, MBA. Ho ricoperto <br/> cariche di consulente e progettista in aziende
                                <br/> meccaniche. Ho avviato come imprenditore <br/> svariate iniziative in ambito Automotive e<br/> mobilità elettrica svariate . </p>
                            </div>
                            <div className="col-md-4 col-sm-12" style={{"height":"auto"}}>
                                <img src={img5} style={{"height":"25vh" ,"width":"50%"}}/>
                                <h1 className="pt-3" style={{"fontSize":"25px","fontFamily":"Poppins"}}>Massimo Fabi</h1>
                                <p style={{"fontSize":"17px","fontFamily":"Poppins"}}>Ingegnere Meccanico, MBA. Ho ricoperto <br/> cariche di consulente e progettista in aziende
                                <br/> meccaniche. Ho avviato come imprenditore <br/> svariate iniziative in ambito  </p>
                            </div>
                        </div>
                    </div>
                   

                </div>
               
            </div>
          </div>
         
    </>
    )
}
export default Chi        