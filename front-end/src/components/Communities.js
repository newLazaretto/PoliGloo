// src/components/Communities.js
import React, { useState } from 'react';
import { FaPlusSquare } from "react-icons/fa";
import { FaSquareCheck } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import communityData from './communityData';
import '../assets/styles/Communities.css';

const Communities = () => {
  const navigate = useNavigate();
  const [joinedCommunities, setJoinedCommunities] = useState([]);

  const handleCommunityClick = (community) => {
    navigate(`/${community.id}`);
  };

  const handleJoinCommunity = (communityId) => {
    if (joinedCommunities.includes(communityId)) {
      setJoinedCommunities(joinedCommunities.filter(id => id !== communityId));
    } else {
      setJoinedCommunities([...joinedCommunities, communityId]);
    }
  };

  return (
    <div className="communities">
      <ul>
        {communityData.map((community) => (
          <li key={community.id}>
            <button className="communities-button" onClick={() => handleCommunityClick(community)}>
              <img className="communities-iglu" src={community.image} alt={''}></img>
              <div className="button-background">
                <span className="communities-text">{community.name} ({community.members})</span>
              </div>
            </button>
            <button
              className={`join-communities-button ${joinedCommunities.includes(community.id) ? 'joined' : 'not-joined'}`}
              onClick={() => handleJoinCommunity(community.id)}
            >
              {joinedCommunities.includes(community.id)
                ? <FaSquareCheck />
                : <FaPlusSquare />}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Communities;
