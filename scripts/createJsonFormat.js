import { AV_BAGGAGEALACARTEDEFINITIONS_REQUIRED_INFO, AVIANCA_BAGGAGEALACARTEDEFINITIONS } from "./baggages/avianca_baggageaLaCarteDefinitions.js";
import { AV_BAGGAGE_SERVICE_LIST_DEFINTIONS_REQUIRED_INFO, AVIANCA_BAGGAGE_SERVICE_LIST_DEFINTIIONS } from "./baggages/avianca_baggageServiceListDefinitions.js";
import { LATAM_BAGGAGEALACARTEDEFINITIONS } from "./baggages/latam_baggageaLaCarteDefinitions.js.js";
import { LATAM_BAGGAGE_SERVICE_LIST_DEFINTIONS } from "./baggages/latam_baggageServiceListDefinitions copy.js";
import { AV_SEATSMAP_REQUIRED_INFO, AVIANCA_SEATSMAP } from "./seatsMap/avianca.js";
import { LATAM_SEATSMAP } from "./seatsMap/latam.js";

const json_latam_map = new JSONFormatter(LATAM_SEATSMAP);
const json_avianca_map = new JSONFormatter(AVIANCA_SEATSMAP); 

const json_avianca_baggageaLaCarteDefinitions = new JSONFormatter(AVIANCA_BAGGAGEALACARTEDEFINITIONS); 
const json_latam_baggageaLaCarteDefinitions = new JSONFormatter(LATAM_BAGGAGEALACARTEDEFINITIONS); 

const json_avianca_response_baggageServiceListDefinitions = new JSONFormatter(AVIANCA_BAGGAGE_SERVICE_LIST_DEFINTIIONS); 
const json_latam_response_baggageServiceListDefinitions = new JSONFormatter(LATAM_BAGGAGE_SERVICE_LIST_DEFINTIONS); 

document.querySelector("#latam_response_seats").appendChild(json_latam_map.render());
document.querySelector("#avianca_response_seats").appendChild(json_avianca_map.render());

document.querySelector("#avianca_response_baggageaLaCarteDefinitions").appendChild(json_avianca_baggageaLaCarteDefinitions.render());
document.querySelector("#latam_response_baggageaLaCarteDefinitions").appendChild(json_latam_baggageaLaCarteDefinitions.render());

document.querySelector("#avianca_response_baggageServiceListDefinitions").appendChild(json_avianca_response_baggageServiceListDefinitions.render());
document.querySelector("#latam_response_baggageServiceListDefinitions").appendChild(json_latam_response_baggageServiceListDefinitions.render());


json_latam_map.openAtDepth(10);
json_avianca_map.openAtDepth(10);
json_avianca_baggageaLaCarteDefinitions.openAtDepth(10);
json_latam_baggageaLaCarteDefinitions.openAtDepth(10);
json_avianca_response_baggageServiceListDefinitions.openAtDepth(10);
json_latam_response_baggageServiceListDefinitions.openAtDepth(10);

const showInfo = ()=>{
    console.log('ex');
    
    let $av_spans = document.querySelectorAll("#avianca_response_seats .json-formatter-key");
    let $av_baggagealacartedefinitinos_spans = document.querySelectorAll("#avianca_response_baggageaLaCarteDefinitions .json-formatter-key");
    let $av_baggagealacarteservicelistdefinitions_spans = document.querySelectorAll("#avianca_response_baggageServiceListDefinitions .json-formatter-key");
    hightLigth($av_spans, AV_SEATSMAP_REQUIRED_INFO);
    hightLigth($av_baggagealacartedefinitinos_spans, AV_BAGGAGEALACARTEDEFINITIONS_REQUIRED_INFO);
    hightLigth($av_baggagealacarteservicelistdefinitions_spans, AV_BAGGAGE_SERVICE_LIST_DEFINTIONS_REQUIRED_INFO);
}

const hightLigth = ($spansSelector, REQ_INFO)=>{
    Array.from($spansSelector).map(($span)=>{
        REQ_INFO.map((req_info)=>{
            let textFormated = $span.innerText.replace(":","")
            console.log(textFormated, req_info);
            
            if(textFormated === req_info){
                $span.style.background = 'green';
            }
        })
    })
}

document.addEventListener("DOMContentLoaded", ()=> {
    showInfo()
})
document.addEventListener("click", showInfo)