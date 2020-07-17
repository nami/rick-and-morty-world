import React from 'react';
import Character from './character'

function Characters(props) {
  return (
    <div className="characters">
    	{ props.residents.map((e, i) => <Character url={e} key={i} />)}
    </div>
  );
}

export default Characters;