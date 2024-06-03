// src/components/Communities.js
import React, { useState, useEffect } from 'react';
import { FaPlusSquare } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import communityData from './communityData';
import '../assets/styles/Communities.css';
import { FaSquareCheck } from "react-icons/fa6";

const Communities = () => {
  const navigate = useNavigate();
  const [communities, setCommunities] = useState([]);
  const [joinedCommunities, setJoinedCommunities] = useState([]);

  const handleCommunityClick = (community) => {
    navigate(`/${community.id}`);
  };

  const handleJoinCommunity = (communityId) => {
    fetch(`http://192.168.0.5:8080/join/${communityId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          setJoinedCommunities([...joinedCommunities, communityId]);
        } else {
          console.error('Error joining community:', response.statusText);
        }
      })
      .catch(error => console.error('Error joining community:', error));
  };

  return (
    <div className="communities">
      <ul>
        {communityData.map((community) => (
          <li key={community.id}>
            <button className="communities-button" onClick={() => handleCommunityClick(community)}>
              <img src={community.image} alt={''}></img>
              {community.name} ({community.members})
            </button>
              <button className="join-communities-button"onClick={() => handleJoinCommunity(community.id)}>
                {joinedCommunities.includes(community.id)
                  ? <FaSquareCheck />
                  : <FaPlusSquare onClick={() => handleJoinCommunity(community.id)} />}
              </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Communities;

