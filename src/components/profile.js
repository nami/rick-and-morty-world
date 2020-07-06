import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

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
    <div className="profile columns is-centered">
    	<div className="profile-box box has-background-danger	is-primary is-bold column is-half">
    		<h3 className="title is-3 has-text-centered has-text-white">{ character['name'] }</h3>
    		<div className="profile-content">
    			<div className="profile-img has-text-centered">
		    		<img src={ character['image'] } alt={ character['name'] } />
    			</div>
    			<div className="profile-desc has-text-white">
    				<div className="left-title">
    					<p>Status:</p>
    					<p>Species:</p>
    					<p>Type:</p>
    					<p>Gender:</p>
    					<p>Origin:</p>
    					<p>Location:</p>
    				</div>
    				<div className="right-desc">
    					<p>{ character['status'] ? character['status'] : 'Unknown' }</p>
    					<p>{ character['species'] ? character['species'] : 'Unknown' }</p>
    					<p>{ character['type'] ? character['origin']['name'] : 'Unknown' }</p>
    					<p>{ character['gender'] ? character['gender'] : 'Unknown' }</p>
    					<p>{ origin ? origin : 'Unknown' }</p>
    					<p>{ location ? location : 'Unknown' }</p>
    				</div> 
    			</div>
    		</div>
    		<div className="go-back has-text-centered">
    			<Link to={`/`}>
    				<h4>Back</h4>
    			</Link>
    		</div>
    	</div>
    </div>
  );
}

export default Profile;