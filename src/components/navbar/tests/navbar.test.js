import React from "react";
import renderer from "react-test-renderer";
import Navbar from "../navbar";

describe("Navbar", () => {
  const component = renderer.create(<Navbar totalCount={4} />);
  expect(component.toJSON()).toMatchSnapshot();
});
