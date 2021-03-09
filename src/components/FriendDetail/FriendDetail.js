import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {id} = useParams()
    const [friend, setFriend] = useState({}) 
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    return (
        <div>
            <p>{id} friend detail</p>
            <h3>{friend.name}</h3>
            <p>{friend.email}</p>
            <p>Phone: {friend.phone}</p>
            <p>website: {friend.website}</p>
        </div>
    );
};

export default FriendDetail;