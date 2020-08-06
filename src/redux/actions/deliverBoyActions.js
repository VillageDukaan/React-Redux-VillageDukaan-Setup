import * as types from "./actionTypes";
import * as deliveryBoyApi from "../../api/deliveryBoyApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadDeliveryBoySuccess(deliveryBoys) {
  return { type: types.LOAD_DELIVERY_BOYS_SUCCESS, deliveryBoys };
}

export function createDeliveryBoySuccess(deliveryBoy) {
  return { type: types.CREATE_DELIVERY_BOY_SUCCESS, deliveryBoy };
}

export function updateDeliveryBoySuccess(deliveryBoy) {
  return { type: types.UPDATE_DELIVERY_BOY_SUCCESS, deliveryBoy };
}

export function deleteDeliveryBoyOptimistic(deliveryBoy) {
  return { type: types.DELETE_DELIVERY_BOY_OPTIMISTIC, deliveryBoy };
}

export function loadDeliveryBoys() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return deliveryBoyApi
      .getDeliveryBoys()
      .then((deliveryBoys) => {
        dispatch(loadDeliveryBoySuccess(deliveryBoys));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveDeliveryBoy(deliveryBoy) {
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return deliveryBoyApi
      .saveDeliveryBoy(deliveryBoy)
      .then((savedDeliveryBoy) => {
        deliveryBoy.id
          ? dispatch(updateDeliveryBoySuccess(savedDeliveryBoy))
          : dispatch(createDeliveryBoySuccess(savedDeliveryBoy));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteDeliveryBoy(deliveryBoy) {
  return function (dispatch) {
    dispatch(deleteDeliveryBoyOptimistic(deliveryBoy));
    return deliveryBoyApi.deleteDeliveryBoy(deliveryBoy.id);
  };
}
