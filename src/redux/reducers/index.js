import { combineReducers } from "redux";
import deliveryBoys from "./deliverBoyReducer";
import managers from "./managerReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  deliveryBoys,
  managers,
  apiCallsInProgress,
});

export default rootReducer;
