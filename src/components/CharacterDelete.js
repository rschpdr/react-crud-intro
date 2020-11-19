import React, { useEffect } from "react";
import axios from "axios";

function CharacterDelete(props) {
  const { id } = props.match.params;

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(id);

        const response = await axios.delete(
          `https://ih-crud-api.herokuapp.com/characters/${id}`
        );

        console.log(response);

        props.history.push("/");
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [id]);

  return <p>Deleting...</p>;
}

export default CharacterDelete;
