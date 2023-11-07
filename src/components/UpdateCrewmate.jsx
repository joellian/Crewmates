
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

function UpdateCrewmate() {
  const [crewmate, setCrewmate] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchCrewmate();
  }, []);

  const fetchCrewmate = async () => {
    const { data } = await supabase.from('Crewmates').select('*').eq('id', id);
    setCrewmate(data[0]);
  };

  const updateCrewmate = async (event) => {
    event.preventDefault();

    await supabase
  .from('Posts')
  .update({
    name: crewmate.name,
    height: crewmate.height,
    position: crewmate.position,
    age: crewmate.age,
    number: crewmate.number
  })
  .eq('id', id);


      window.location = `/crewmate/${id}`;

  }

  return (
    <form onSubmit={updateCrewmate}>
      <label>
        Name:
        <input type="text" value={crewmate?.name} onChange={e => setCrewmate({ ...crewmate, name: e.target.value })} />
      </label>
      <label>
        Height:
        <input type="text" value={crewmate?.height} onChange={e => setCrewmate({ ...crewmate, height: e.target.value })} />
      </label>
      <label>
        Position:
        <input type="text" value={crewmate?.position} onChange={e => setCrewmate({ ...crewmate, position: e.target.value })} />
      </label>
      <label>
        Age:
        <input type="text" value={crewmate?.age} onChange={e => setCrewmate({ ...crewmate, age: e.target.value })} />
      </label>
      <label>
        Number:
        <input type="text" value={crewmate?.number} onChange={e => setCrewmate({ ...crewmate, number: e.target.value })} />
      </label>
      <input type="submit" value="Update Player" />
    </form>
  );
}

export default UpdateCrewmate;
