// src/components/Communities.js
import React from 'react';
import { FaPlusSquare } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import communityData from './communityData';
import '../assets/styles/Communities.css';


const Communities = () => {
  const navigate = useNavigate();

  const handleCommunityClick = (community) => {
    navigate(`/${community.id}`);
  };

  return (
    <div className="communities">
      <ul>
        {communityData.map((community) => (
          <li key={community.id}>
            <button onClick={() => handleCommunityClick(community)}>
              <img src={community.image} alt ={''}></img>
              {community.name} ({community.members}) <FaPlusSquare />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Communities;
