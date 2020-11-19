import React, { useState, useEffect } from "react";
import axios from "axios";

function CharacterDetail(props) {
  // O state inicial é baseado no formato do objeto de resposta da API
  const [character, setCharacter] = useState({
    id: "",
    debt: false,
    name: "",
    occupation: "",
    weapon: "",
  });

  // Esse useEffect serve pra garantir que o Axios só vai disparar a requisição depois que o componente for renderizado na tela
  useEffect(() => {
    async function fetchData() {
      try {
        const { id } = props.match.params;

        console.log(id);

        const response = await axios.get(
          `https://ih-crud-api.herokuapp.com/characters/${id}`
        );

        setCharacter({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [props.match.params]);

  return (
    <div>
      <h1>Character Details</h1>

      <p>
        <strong>Name: </strong>
        {character.name}
      </p>
      <p>
        <strong>ID: </strong>
        {character.id}
      </p>
      <p>
        <strong>Occupation: </strong>
        {character.occupation}
      </p>
      <p>
        <strong>Is in debt?: </strong>
        {character.debt ? "Yes" : "No"}
      </p>
      <p>
        <strong>Weapon: </strong>
        {character.weapon}
      </p>
    </div>
  );
}

export default CharacterDetail;
