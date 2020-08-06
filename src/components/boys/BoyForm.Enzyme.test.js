import React from "react";
import BoyForm from "./BoyForm";
import { shallow } from "enzyme";

function renderBoyForm(args) {
  const defaultProps = {
    managers: [],
    boy: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return shallow(<BoyForm {...props} />);
}

// Enzyme Shollow Rendering. With Shallow, no DOM is created, hence no child components are rendered

it("renders form and header", () => {
  const wrapper = renderBoyForm();
  //   console.log(wrapper.debug());
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add Delivery Boy");
});

it('lables save buttons as "Save" when not saving', () => {
  const wrapper = renderBoyForm();
  expect(wrapper.find("button").text()).toBe("Save");
});

it('lables save buttons as "Saving..." when saving', () => {
  const wrapper = renderBoyForm({ saving: true });
  expect(wrapper.find("button").text()).toBe("Saving...");
});
