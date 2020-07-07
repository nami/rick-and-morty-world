import React from "react";
import axios from 'axios';
import { create } from "react-test-renderer";
import Characters from '../components/characters'

var residents = []

let getResidents = () => {
		let url = 'https://rickandmortyapi.com/api/location/'
		axios.get(url)
    .then((res) => {
    	residents = res['data']['results']['residents']
    })
    .catch((error) =>{
      console.log(error)
    })
  return residents
}

describe("Characters component", () => {
  test("Matches the snapshot", () => {
    const characters = create(<Characters residents={getResidents()}/>);
    expect(characters.toJSON()).toMatchSnapshot();
  });
});