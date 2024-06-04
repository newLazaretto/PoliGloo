// src/components/Communities.js
import React, { useState, useEffect } from 'react';
import { FaPlusSquare } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Communities.css';
import { FaSquareCheck } from "react-icons/fa6";
import CommunityData from './CommunityData';
import { Link } from 'react-router-dom';

const Communities = () => {
  const navigate = useNavigate();
  const [communities, setCommunities] = useState([]);
  const [joinedCommunities, setJoinedCommunities] = useState([]);
  /* se der pegar do backend implementar o useEffect
  useEffect(() => {
    fetch('communities')
      .then(response => response.json())
      .then(data => setCommunities(data))
      .catch(error => console.error('Error fetching communities:', error));
  }, []);
  */
  /*
    useEffect(() => {
      // Simulação de carregamento das comunidades
      const fetchCommunities = async () => {
        // Aqui você pode fazer uma chamada fetch para obter as comunidades do servidor, ou usar dados estáticos
        const data = Object.keys(CommunityData).map(key => ({
          id: key,
          name: CommunityData[key].name,
          members: CommunityData[key].members.map(member => member.username)
        }));
        setCommunities(data);
      };
  
      fetchCommunities();
    }, []);
  */
  
    
  const handleCommunityClick = (community) => {
    navigate(`/${community.id}`);
  };
  /* se der tempo implementar a função handleJoinCommunity
    const handleJoinCommunity = (communityId) => {
      fetch(`http://192.168.0.5:8080/join/${communityId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
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
    */
  const handleJoinCommunity = (communityId) => {
    if (joinedCommunities.includes(communityId)) {
      setJoinedCommunities(joinedCommunities.filter(id => id !== communityId));
    } else {
      setJoinedCommunities([...joinedCommunities, communityId]);
    }
  };

  const getMembersMessage = (members) => {
    const memberNames = members.slice(0, 2).join(', ');
    const additionalCount = members.length - 2;
    return additionalCount > 0
      ? `${memberNames} e outras ${additionalCount} pessoas também participam`
      : memberNames;
  };

  return (
    <div className="communities">
      <ul>
        {Object.keys(CommunityData).map(communityId => (
          <li key={communityId}>
            <button className="communities-button" onClick={() => handleCommunityClick({ id: communityId })}>
              <img className="communities-iglu" src={CommunityData[communityId].image} alt={CommunityData[communityId].name} />
              <div className="button-background">
                <span className="communities-text">{CommunityData[communityId].name}</span>
                <span className="members-text">{getMembersMessage(CommunityData[communityId].members.map(member => member.username))}</span>
              </div>
            </button>
            <button
              className={`join-communities-button ${joinedCommunities.includes(communityId) ? 'joined' : 'not-joined'}`}
              onClick={() => handleJoinCommunity(communityId)}
            >
              {joinedCommunities.includes(communityId)
                ? <FaSquareCheck />
                : <FaPlusSquare />}
            </button>
          </li>
        ))}
      </ul>
      <div className="vertical-line left-line"></div> 
    <div className="vertical-line right-line"></div> 
    </div>
  );
};

export default Communities;
