import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import './PlayerCard.css';


function CrewmateGallery() {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    const fetchCrewmates = async () => {
      try {
        const { data, error } = await supabase.from('Posts').select();

        if (error) {
          console.error('Error fetching posts:', error);
        } else {
          // Update the state with the fetched crewmates data
          setCrewmates(data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

   
    fetchCrewmates();
  }, []); 

  return (
    <div>
      <h2>Crewmate Gallery</h2>
      <ul>
        {crewmates.map((crewmate) => (
          <li key={crewmate.id}>
            <h3>{crewmate.name}</h3>
            <p>Height: {crewmate.height}</p>
            <p>Position: {crewmate.position}</p>
            <p>Age: {crewmate.age}</p>
            <p>Number: {crewmate.number}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrewmateGallery;


