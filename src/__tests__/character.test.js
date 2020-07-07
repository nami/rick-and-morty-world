import React from "react";
import { create } from "react-test-renderer";
import Character from '../components/character'
import { BrowserRouter as Router } from "react-router-dom";

describe("Character component", () => {
  test("Matches the snapshot", () => {
  		const character = create(<Router><Character /></Router>); 
    	expect(character.toJSON()).toMatchSnapshot();
  });
});