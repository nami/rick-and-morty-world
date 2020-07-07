import React from 'react';
import Character from './character'
import Dexie from 'dexie'
import Skeleton from 'react-loading-skeleton';
import LazyLoad from 'react-lazyload';

function Characters(props) {
  return (
    <div className="characters">
    	{ props.residents.map((e, i) => 
    		<LazyLoad key={e['id']} placeholder={<Skeleton circle={true} height={100} width={100}/>}>
    			<Character url={e} key={i} db={new Dexie('CharactersDatabase')} />
    		</LazyLoad>)}
    </div>
  );
}

export default Characters;