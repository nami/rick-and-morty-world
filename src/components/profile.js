import React from 'react';

function Profile(props) {
	const {id} = props.match.params

  return (
    <div className="profile">
    	{ id }
    </div>
  );
}

export default Profile;