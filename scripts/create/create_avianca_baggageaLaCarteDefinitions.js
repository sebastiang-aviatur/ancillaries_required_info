import { AVIANCA_BAGGAGEALACARTEDEFINITIONS } from "../baggages/avianca_baggageaLaCarteDefinitions.js"
import { hightLigth } from "../createJsonFormat.js";

const json_avianca_baggageaLaCarteDefinitions = new JSONFormatter(AVIANCA_BAGGAGEALACARTEDEFINITIONS); 

export const CREATE_AV_BAGGAGEALACARTEDEFINITIONS = ()=>{
    document.querySelector("#avianca_response_baggageaLaCarteDefinitions").appendChild(json_avianca_baggageaLaCarteDefinitions.render());
    json_avianca_baggageaLaCarteDefinitions.openAtDepth(0);
}

const AV_BAGGAGEALACARTEDEFINITIONS_REQUIRED_INFO = [
    'OfferItemID',
    'UnitPrice',
    'TotalAmount',
    'BaseAmount',
    'CorrelationID',
    'Service',
    'ServiceID',
    'ServiceDefinitionRefID',
    'Eligibility',
    'PaxRefID',
    'FlightAssociations',
    'PaxSegmentRefID',
]

let is_open = false; 
let $btn = document.querySelector("#btn_av_baggagealacarteldefintions");

const showInfo = ()=>{
    if(is_open){
        json_avianca_baggageaLaCarteDefinitions.openAtDepth(0);
        $btn.style.display = 'none';
        is_open = false;
    }else{
        json_avianca_baggageaLaCarteDefinitions.openAtDepth(10);
        $btn.style.display = 'block';
        is_open = true;
    }
}

$btn.addEventListener("click", ()=> hightLigth(
        document.querySelectorAll("#avianca_response_baggageaLaCarteDefinitions .json-formatter-key"), 
        AV_BAGGAGEALACARTEDEFINITIONS_REQUIRED_INFO
))
document.querySelector("#avianca_response_baggageaLaCarteDefinitions")
    .addEventListener("click", showInfo)