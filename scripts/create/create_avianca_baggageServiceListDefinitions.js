import { AVIANCA_BAGGAGE_SERVICE_LIST_DEFINTIIONS } from "../baggages/avianca_baggageServiceListDefinitions.js";
import { hightLigth } from "../createJsonFormat.js";

const json_avianca_response_baggageServiceListDefinitions = new JSONFormatter(AVIANCA_BAGGAGE_SERVICE_LIST_DEFINTIIONS); 

export const CREATE_AV_SERVICELISTDEFINITIONS = ()=>{
    document.querySelector("#avianca_response_baggageServiceListDefinitions").appendChild(json_avianca_response_baggageServiceListDefinitions.render());
    json_avianca_response_baggageServiceListDefinitions.openAtDepth(0);
}

const AV_BAGGAGE_SERVICE_LIST_DEFINTIONS_REQUIRED_INFO = [
    'ServiceDefinitionID',
    'OwnerCode',
    'Name',
    'BookingInstructions',
    'AddlDataMeasure'
]

let is_open = false; 
let $btn = document.querySelector("#btn_av_servicelistdefinitions");

const showInfo = ()=>{
    if(is_open){
        json_avianca_response_baggageServiceListDefinitions.openAtDepth(0);
        $btn.style.display = 'none';
        is_open = false;
    }else{
        json_avianca_response_baggageServiceListDefinitions.openAtDepth(10);
        $btn.style.display = 'block';
        is_open = true;
    }
}

$btn.addEventListener("click", ()=> hightLigth(
    document.querySelectorAll("#avianca_response_baggageServiceListDefinitions .json-formatter-key"),
    AV_BAGGAGE_SERVICE_LIST_DEFINTIONS_REQUIRED_INFO
))

document.querySelector("#avianca_response_baggageServiceListDefinitions")
    .addEventListener("click", showInfo)
