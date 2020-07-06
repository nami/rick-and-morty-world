import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile(props) {
	const { id } = props.match.params,
	[ character, setCharacter ] = useState({}),
	[ origin, setOrigin ] = useState(''),
	[ location, setLocation ] = useState('')

	useEffect(() => {
		let url = `https://rickandmortyapi.com/api/character/${id}`
		axios.get(url)
    .then((res) => {
    	setCharacter(res['data'])
    	setOrigin(res['data']['origin']['name'])
    	setLocation(res['data']['location']['name'])
    })
    .catch((error) =>{
      console.log(error)
    })
	}, [id])

  return (
    <div className="profile">
    	<div className="container hero is-medium is-primary is-bold">
    		<h3 className="title is-3 has-text-centered">{ character['name'] }</h3>
				<figure className="image is-128x128 character-img">	
    			<img src={ character['image'] } alt={ character['name'] } />
    		</figure>
    		<p>Status: { character['status'] ? character['status'] : 'Unknown' }</p>
    		<p>Species: { character['species'] ? character['species'] : 'Unknown' }</p>
    		<p>Type: { character['type'] ? character['origin']['name'] : 'Unknown' }</p>
    		<p>Gender: { character['gender'] ? character['gender'] : 'Unknown' }</p>
    		<p>Origin: { origin ? origin : 'Unknown' }</p>
    		<p>Location: { location ? location : 'Unknown' }</p>
    	</div>
    </div>
  );
}

export default Profile;