import React, { useState } from 'react';
import Characters from './characters'

// images
import one from '../images/1.jpg'
import two from '../images/2.jpg'
import three from '../images/3.jpg'
import four from '../images/4.jpg'
import five from '../images/5.jpg'
import six from '../images/6.jpg'
import seven from '../images/7.jpg'
import eight from '../images/8.jpg'
import nine from '../images/9.jpg'
import ten from '../images/10.jpg'

function Location(props) {
	const imgArr = [one, two, three, four, five, six, seven, eight, nine, ten]
	const [clicked, setClicked] = useState(false)

	const handleClick = () => {
		setClicked(!clicked)
	}

  return (
    <div className="location box has-background-link has-text-white" onClick={handleClick}>
    	<img src={imgArr[Math.floor(Math.random() * imgArr.length)]} alt="a rick and morty world"/>
    	<div className="desc">
    		<p>{ props.name }</p>
    		<p>{ props.type }</p>
    	</div>
    	{ clicked ? <Characters residents={props.residents}/> : null}
    </div>
  );
}

export default Location;
