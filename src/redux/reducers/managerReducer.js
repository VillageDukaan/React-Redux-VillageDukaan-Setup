import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function managerReducer(state = initialState.managers, action) {
  switch (action.type) {
    case types.LOAD_MANAGERS_SUCCESS:
      return action.managers;
    default:
      return state;
  }
}
