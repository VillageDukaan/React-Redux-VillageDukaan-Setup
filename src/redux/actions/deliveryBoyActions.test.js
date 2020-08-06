import * as deliveryBoyActions from "./deliverBoyActions";
import * as types from "./actionTypes";
import { deliveryBoys } from "../../../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });
});

describe("Load Courses Thunk", () => {
  it("should create BEGIN_API_CALL and LOAD_DELIVERY_BOY_SUCCESS when loading courses", () => {
    fetchMock.mock("*", {
      body: deliveryBoys,
      headers: { "content-type": "application/json" },
    });

    const expectedActions = [
      { type: types.BEGIN_API_CALL },
      { type: types.LOAD_DELIVERY_BOYS_SUCCESS, deliveryBoys },
    ];

    const store = mockStore({ deliveryBoys: [] });
    return store.dispatch(deliveryBoyActions.loadDeliveryBoys()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("createDeliveryBoySuccess", () => {
  it("should create a CREATE_DELIVERY_BOY_SUCCESS action", () => {
    const deliveryBoy = deliveryBoys[0];
    const expectedAction = {
      type: types.CREATE_DELIVERY_BOY_SUCCESS,
      deliveryBoy,
    };

    const action = deliveryBoyActions.createDeliveryBoySuccess(deliveryBoy);

    expect(action).toEqual(expectedAction);
  });
});
