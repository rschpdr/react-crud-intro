import React, { useState } from "react";
import axios from "axios";

function CharacterForm(props) {
  const [state, setState] = useState({ name: "", occupation: "", weapon: "" });

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    // Disparar a requisição com os dados para a API
    event.preventDefault();

    const response = await axios.post(
      "https://ih-crud-api.herokuapp.com/characters",
      state
    );

    console.log(response);

    // O history é injetado automaticamente pelo component Route
    props.history.push("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Character</h1>
      {/* Name */}
      <div className="form-group">
        <label htmlFor="newCharacterName">Name</label>
        <input
          name="name"
          type="text"
          className="form-control"
          id="newCharacterName"
          onChange={handleChange}
          value={state.name}
        />
      </div>

      {/* Occupation */}
      <div className="form-group">
        <label htmlFor="newCharacterOccupation">Occupation</label>
        <input
          type="text"
          className="form-control"
          id="newCharacterOccupation"
          name="occupation"
          onChange={handleChange}
          value={state.occupation}
        />
      </div>

      {/* Weapon */}
      <div className="form-group">
        <label htmlFor="newCharacterWeapon">Weapon</label>
        <input
          type="text"
          className="form-control"
          id="newCharacterWeapon"
          name="weapon"
          onChange={handleChange}
          value={state.weapon}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CharacterForm;
