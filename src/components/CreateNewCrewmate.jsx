import React, { useState } from 'react';
import { supabase } from '../client';
import './CreateNewCrewmate.css'; // Import your CSS file

function CreateNewCrewmate() {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [position, setPosition] = useState('');
  const [age, setAge] = useState('');
  const [number, setNumber] = useState('');

  const createCrewmate = async (event) => {
    event.preventDefault();

    await supabase
      .from('Posts')
      .insert({
        name,
        height,
        position,
        age,
        number,
      })
      .select();

    window.location = '/gallery';
  };

  return (
    <div className="create-new-crewmate">
      <h2>Create New Crewmate</h2>
      <form onSubmit={createCrewmate}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="height">Height (cm):</label>
          <input
            type="text"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="number">Number:</label>
          <input
            type="text"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        <button type="submit">Create Player</button>
      </form>
    </div>
  );
}

export default CreateNewCrewmate;


