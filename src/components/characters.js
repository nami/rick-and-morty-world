import React from 'react';
import Character from './character'
import Dexie from 'dexie'

function Characters(props) {
  return (
    <div className="characters">
    	{ props.residents.map((e, i) => <Character url={e} key={i} db={new Dexie('CharactersDatabase')} />)}
    </div>
  );
}

export default Characters;