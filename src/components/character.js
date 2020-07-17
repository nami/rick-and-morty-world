import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function Character(props) {
	const [ character, setCharacter ] = useState({})

	useEffect(() => {
    props.db.version(1).stores({characters: 'id, name, status, species, type, gender, origin, location, image, episode, url, created'})
		let url = props.url
		axios.get(url)
    .then((res) => {
      props.db.transaction('rw', props.db.characters, async () => {
        // get data from the db
        const all = await props.db.characters.toArray()
        if (!all || all.length === 0) await props.db.characters.put(res['data'])
        // check if character exists in db
        let found = all.find(e => e['id'] === res['data']['id'])
        if (!found) await props.db.characters.put(res['data'])
        // set character
        if (!all || all.length === 0) {
          setCharacter(res['data'])
        } else {
          let urlArr = url.split('/'),
          id = urlArr[urlArr.length - 1]
          let character = await props.db.characters.get(Number(id))
          setCharacter(character)
        }
      }).catch(e => {
        console.log(e.stack || e)
      })
    })
    .catch((error) =>{
      console.log(error)
    })
	}, [props])

  return (
    <div className="character box has-background-primary has-text-white">
			<figure className="image is-square icons">
    		<img className="is-rounded" src={character['image']} alt={`${character['name']}`}/>
    	</figure>
      <Link to={`profile/${character['id']}`}>
        <h6 className="title is-5 name">{ character['name'] }</h6>
      </Link>
    	<p className="subtitle is-6 has-text-white">{ character['status'] }</p>
    </div>
  );
}

export default Character;