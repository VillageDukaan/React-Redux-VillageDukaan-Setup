import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/deliveryBoys/";

export function getDeliveryBoys() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveDeliveryBoy(deliveryBoy) {
  return fetch(baseUrl + (deliveryBoy.id || ""), {
    method: deliveryBoy.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(deliveryBoy),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteDeliveryBoy(deliveryBoyId) {
  return fetch(baseUrl + deliveryBoyId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
