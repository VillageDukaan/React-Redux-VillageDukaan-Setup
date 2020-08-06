import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/managers/";

export function getManagers() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
