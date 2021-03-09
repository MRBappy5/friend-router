import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory()
    const handleClick = (id) => {
        const url = `/friend/${id}`
        history.push(url)
    }
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '4px'
    }
    return (
        <div style={friendStyle}>
            <h2>{name}</h2>
            <h3>{email}</h3>
            {/* <p>Id: <Link to={`/friend/${id}`}>show detail of {id}</Link></p> */}
            <button onClick={() => handleClick(id)}>click me</button>
        </div>
    );
};

export default Friend;