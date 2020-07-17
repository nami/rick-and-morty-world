import React from "react";
import { create } from "react-test-renderer";
import Location from '../components/location'

describe("Location component", () => {
  test("Matches the snapshot", () => {
    const location = create(<Location />);
    expect(location.toJSON()).toMatchSnapshot();
  });
});