import { CREATE_AV_BAGGAGEALACARTEDEFINITIONS } from "./create/create_avianca_baggageaLaCarteDefinitions.js";
import { CREATE_AV_SERVICELISTDEFINITIONS } from "./create/create_avianca_baggageServiceListDefinitions.js";
import { CREATE_AV_SEATSMAP } from "./create/create_avianca_seatsMap.js";
import { CREATE_LA_BAGGAGEALACARTEDEFINITIONS } from "./create/create_latam_baggageaLaCarteDefinitions.js";
import { CREATE_LA_BAGGAGESERVICELISTDEFINITIONS } from "./create/create_latam_baggageServiceListDefinitions.js";
import { CREATE_LA_SEATSMAP } from "./create/create_latam_seatsMap.js";

CREATE_AV_BAGGAGEALACARTEDEFINITIONS();
CREATE_AV_SERVICELISTDEFINITIONS();
CREATE_AV_SEATSMAP();

CREATE_LA_BAGGAGEALACARTEDEFINITIONS();
CREATE_LA_BAGGAGESERVICELISTDEFINITIONS();
CREATE_LA_SEATSMAP();

export const hightLigth = ($spansSelector, REQ_INFO)=>{
    Array.from($spansSelector).map(($span)=>{
        
        REQ_INFO.map((req_info)=>{
            let textFormated = $span.innerText.replace(":","")
            if(textFormated === req_info){
                $span.style.background = 'green';
            }
        })
    })
}