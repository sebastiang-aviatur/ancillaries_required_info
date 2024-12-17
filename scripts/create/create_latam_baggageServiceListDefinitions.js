import { LATAM_BAGGAGE_SERVICE_LIST_DEFINTIONS } from "../baggages/latam_baggageServiceListDefinitions.js";

export const CREATE_LA_BAGGAGESERVICELISTDEFINITIONS = ()=>{
    const json_latam_response_baggageServiceListDefinitions = new JSONFormatter(LATAM_BAGGAGE_SERVICE_LIST_DEFINTIONS ); 
    document.querySelector("#latam_response_baggageServiceListDefinitions").appendChild(json_latam_response_baggageServiceListDefinitions.render());
    json_latam_response_baggageServiceListDefinitions.openAtDepth(0);
}