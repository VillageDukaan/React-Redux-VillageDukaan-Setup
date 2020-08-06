import * as types from "./actionTypes";
import * as managerApi from "../../api/managerApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadManagersSuccess(managers) {
  return { type: types.LOAD_MANAGERS_SUCCESS, managers };
}

export function loadManagers() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return managerApi
      .getManagers()
      .then((managers) => {
        dispatch(loadManagersSuccess(managers));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
