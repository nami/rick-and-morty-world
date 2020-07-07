import React from "react";
import { create } from "react-test-renderer";
import Locations from '../components/locations'

describe("Locations component", () => {
  test("Matches the snapshot", () => {
    const locations = create(<Locations />);
    expect(locations.toJSON()).toMatchSnapshot();
  });
});