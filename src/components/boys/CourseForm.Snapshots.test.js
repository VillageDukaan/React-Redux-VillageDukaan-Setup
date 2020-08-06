import React from "react";
import BoyForm from "./BoyForm";
import renderer from "react-test-renderer";
import { deliveryBoys, managers } from "../../../tools/mockData";

it("sets submit button label 'Saving... when saving is true", () => {
  const tree = renderer.create(
    <BoyForm
      boy={deliveryBoys[0]}
      managers={managers}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving
    />
  );

  expect(tree).toMatchSnapshot();
});

it("sets submit button label 'Save' when saving is false", () => {
  const tree = renderer.create(
    <BoyForm
      boy={deliveryBoys[0]}
      managers={managers}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving={false}
    />
  );

  expect(tree).toMatchSnapshot();
});
