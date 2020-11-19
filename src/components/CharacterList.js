import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  // Esse useEffect serve pra garantir que o Axios só vai disparar a requisição depois que o componente for renderizado na tela
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://ih-crud-api.herokuapp.com/characters"
        );
        setCharacters([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Occupation</th>
            <th>Weapon</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => (
            <tr key={character.id}>
              <td>{character.name}</td>
              <td>{character.occupation}</td>
              <td>{character.weapon}</td>
              <td>
                <Link className="mr-2" to={`/character/${character.id}`}>
                  See Details
                </Link>
                <Link className="mr-2" to={`/character/edit/${character.id}`}>
                  Edit
                </Link>
                <Link
                  className="btn btn-danger"
                  to={`/character/delete/${character.id}`}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CharacterList;
