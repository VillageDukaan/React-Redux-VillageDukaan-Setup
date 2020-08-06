import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function deliveryBoyReducer(
  state = initialState.deliveryBoys,
  action
) {
  switch (action.type) {
    case types.CREATE_DELIVERY_BOY_SUCCESS:
      return [...state, { ...action.deliveryBoy }];
    case types.UPDATE_DELIVERY_BOY_SUCCESS:
      return state.map((deliveryBoy) =>
        deliveryBoy.id === action.deliveryBoy.id
          ? action.deliveryBoy
          : deliveryBoy
      );
    case types.LOAD_DELIVERY_BOYS_SUCCESS:
      return action.deliveryBoys;
    case types.DELETE_DELIVERY_BOY_OPTIMISTIC:
      return state.filter(
        (deliveryBoy) => deliveryBoy.id !== action.deliveryBoy.id
      );
    default:
      return state;
  }
}
