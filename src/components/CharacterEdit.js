import React, { useState, useEffect } from "react";
import axios from "axios";

function CharacterEdit(props) {
  const [state, setState] = useState({ name: "", occupation: "", weapon: "" });
  const { id } = props.match.params;

  // Esse useEffect é praticamente igual o do CharacterDetail, pois estamos fazendo a mesma coisa
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://ih-crud-api.herokuapp.com/characters/${id}`
        );

        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [id]);

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    // Disparar a requisição com os dados para a API
    event.preventDefault();

    const response = await axios.put(
      `https://ih-crud-api.herokuapp.com/characters/${id}`,
      state
    );

    console.log(response);

    // O history é injetado automaticamente pelo component Route
    props.history.push("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Character</h1>
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

export default CharacterEdit;
