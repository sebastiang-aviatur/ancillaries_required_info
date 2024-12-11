import { AVIANCA_SEATSMAP } from "./seatsMap/avianca";
import { LATAM_SEATSMAP } from "./seatsMap/latam";

const json_latam_map = new JSONFormatter(LATAM_SEATSMAP);
const json_avianca_map = new JSONFormatter(AVIANCA_SEATSMAP); document.querySelector("#latam_response_seats").appendChild(json_latam_map.render());

document.querySelector("#avianca_response_seats").appendChild(json_avianca_map.render());