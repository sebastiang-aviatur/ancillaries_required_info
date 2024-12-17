import { LATAM_BAGGAGEALACARTEDEFINITIONS } from "../baggages/latam_baggageaLaCarteDefinitions.js";

export const CREATE_LA_BAGGAGEALACARTEDEFINITIONS = ()=>{
    const json_latam_baggageaLaCarteDefinitions = new JSONFormatter(LATAM_BAGGAGEALACARTEDEFINITIONS); 
    document.querySelector("#latam_response_baggageaLaCarteDefinitions").appendChild(json_latam_baggageaLaCarteDefinitions.render());
    json_latam_baggageaLaCarteDefinitions.openAtDepth(0);
}