import { LATAM_SEATSMAP } from "../seatsMap/latam.js";

export const CREATE_LA_SEATSMAP = ()=>{
    const json_latam_map = new JSONFormatter(LATAM_SEATSMAP);
    document.querySelector("#latam_response_seats").appendChild(json_latam_map.render());
    json_latam_map.openAtDepth(0);
}