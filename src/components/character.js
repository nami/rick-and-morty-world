import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Character(props) {
	const [ character, setCharacter ] = useState({})

	useEffect(() => {
		let url = props.url
		axios.get(url)
    .then((res) => {
    	setCharacter(res['data'])
    })
    .catch((error) =>{
      console.log(error)
    })
	}, [props.url])

  return (
    <div className="character box has-background-primary has-text-white">
			<figure className="image is-square icons">
    		<img className="is-rounded" src={character['image']} alt={`${character['name']}`}/>
    	</figure>
    	<h6 className="title is-5 has-text-white">{ character['name'] }</h6>
    	<p className="subtitle is-6 has-text-white">{ character['status'] }</p>
    </div>
  );
}

export default Character;