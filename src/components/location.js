import React, { useState } from 'react';
import Characters from './characters'
import 'animate.css'

// images
import one from '../images/1.jpg'
import two from '../images/2.jpg'
import three from '../images/3.jpg'
import four from '../images/4.jpg'

function Location(props) {
    const imgArr = [one, two, three, four]
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
    	setClicked(!clicked)
    }

  return (
    <div className="location box has-background-dark has-text-white animate__animated animate__slideInUp" onClick={handleClick}>
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
