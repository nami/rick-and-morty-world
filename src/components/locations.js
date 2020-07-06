import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Location from './location'

function Locations() {
	const [ worlds, setWorlds ] = useState([])

	useEffect(() => {
		let url = 'https://rickandmortyapi.com/api/location/'
		axios.get(url)
    .then((res) => {
    	setWorlds(res['data']['results'])
    })
    .catch((error) =>{
      console.log(error)
    })
	}, [])

  return (
    <div>
      <h1 className="title is-2 has-text-centered">Rick & Morty Worlds</h1>
      <div className="locations">
        { worlds.map(e => <Location key={e['id']} name={e['name']} type={e['type']} residents={e['residents']}/>) }
      </div>
    </div>
  );
}

export default Locations;
