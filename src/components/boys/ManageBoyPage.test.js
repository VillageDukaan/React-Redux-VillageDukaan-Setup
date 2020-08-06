import React from "react";
import { mount } from "enzyme";
import {
  managers,
  newDeliveryBoy,
  deliveryBoys,
} from "../../../tools/mockData";
import { ManageBoyPage } from "./ManageBoyPage";

function render(args) {
  const defaultProps = {
    managers,
    deliveryBoys,
    history: {},
    saveDeliveryBoy: jest.fn(),
    loadManagers: jest.fn(),
    boy: newDeliveryBoy,
    match: {},
  };
  const props = { ...defaultProps, ...args };

  return mount(<ManageBoyPage {...props} />);
}

it("sets error when attempting to save an empty title field", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Name is required");
});
