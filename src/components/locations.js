import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Location from './location'

function Locations({db}) {
	const [ worlds, setWorlds ] = useState([])

	useEffect(() => {
    // create db store
    db.version(1).stores({locationsData: 'id, name, type, dimension, residents, url, created'})

		let url = 'https://rickandmortyapi.com/api/location/'
		axios.get(url)
    .then((res) => {
      var results = res['data']['results']
      db.transaction('rw', db.locationsData, async () => {
        // get data from the db
        let all = await db.locationsData.toArray()
        if (!all || all.length === 0) await db.locationsData.bulkAdd(results)
        !all || all.length === 0 ? setWorlds(results) : setWorlds(all)
      }).catch(e => {
        console.log(e.stack || e)
      })
    })
    .catch((error) =>{
      console.log(error)
    })
	}, [db])

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
