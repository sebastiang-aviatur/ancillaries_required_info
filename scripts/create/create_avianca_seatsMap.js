import { hightLigth } from "../createJsonFormat.js";
import { AVIANCA_SEATSMAP } from "../seatsMap/avianca.js";

const json_avianca_map = new JSONFormatter(AVIANCA_SEATSMAP); 

export const CREATE_AV_SEATSMAP = ()=>{
    document.querySelector("#avianca_response_seats").appendChild(json_avianca_map.render());
    json_avianca_map.openAtDepth(0);
}

const AV_SEATSMAP_REQUIRED_INFO = [
    'PaxSegmentRefID',
    'CabinCompartment',
    'CabinType',
    'CabinTypeCode',
    'SeatRow',
    'RowNumber',
    'Seat',
    'CabinColumnID',
    'OccupationStatusCode',
    'CharacteristicCode',
    'OfferItemRefID',
]

let is_open = false; 
let $btn = document.querySelector("#btn_av_seatsmap");

const showInfo = ()=>{
    if(is_open){
        json_avianca_map.openAtDepth(0);
        $btn.style.display = 'none';
        is_open = false;
    }else{
        json_avianca_map.openAtDepth(10);
        $btn.style.display = 'block';
        is_open = true;
    }
}
$btn.addEventListener("click", ()=> hightLigth(
    document.querySelectorAll("#avianca_response_seats .json-formatter-key"),
    AV_SEATSMAP_REQUIRED_INFO
))

document.querySelector("#avianca_response_seats")
    .addEventListener("click", showInfo)
