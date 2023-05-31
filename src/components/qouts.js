import React from "react";
import {ImQuotesLeft} from "react-icons/im"
import {ImQuotesRight} from "react-icons/im"


function Qout() {
    return(
        <>
        <div className="container-fluid mt-5 mb-5" >
            <div className="container " style={{"height":"100%"}}>
                <div className="row text-center">
                    <ImQuotesLeft className="col-md-2" style={{"fontSize":"20px"}}/>
                    <h1 className="col-md-7" style={{"fontFamily":"pop","fontSize":"20px" }}>Non sviluppiamo pannelli fotovoltaici. Il pannello è solo una componente
                    di una soluzione ingegneristica più completa che comprende
                    sensoristiche avanzate e l'integrazione con i sistemi domotici di casa.</h1>                        
                    <ImQuotesRight className="col-md-2" style={{"fontSize":"20px"}}/>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default Qout