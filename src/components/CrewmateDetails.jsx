
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

function CrewmateDetails() {
  const [crewmate, setCrewmate] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchCrewmate();
  }, []);

  const fetchCrewmate = async () => {
    const { data } = await supabase.from('Posts').select('*').eq('id', id);
    setCrewmate(data[0]);
  };

  const deleteCrewmate = async () => {
    await supabase
      .from('Posts')
      .delete()
      .eq('id', id);

    window.location = "/gallery";
  }

  return (
    <div>
      {crewmate && (
        <>
          <h1>{crewmate.name}</h1>
          <p>Height: {crewmate.height}</p>
          <p>Position: {crewmate.position}</p>
          <p>Age: {crewmate.age}</p>
          <p>Number: {crewmate.number}</p>
          <a href={`/update/${crewmate.id}`}>Update</a>
          <button onClick={deleteCrewmate}>Delete</button>
        </>
      )}
    </div>
  );
}

export default CrewmateDetails;
