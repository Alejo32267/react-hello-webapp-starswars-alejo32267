import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const CharacterDetails = () => {
  const { uid } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    if (!uid) return;

    fetch(`https://www.swapi.tech/api/people/${uid}`)
      .then(res => res.json())
      .then(data => setCharacter(data.result.properties))
      .catch(err => console.error(err));
  }, [uid]);

  return (
    <div className="card-details" style={{ width: "18rem" }}>
      <img src="/src/assets/img/rigo-baby.jpg" className="card-img-top" alt={character.name} />
      <div className="card-body">
        <h5 className="card-title">Name: {character.name}</h5>
        <p className="card-text">
          Gender: {character.gender} <br />
          Skin Color: {character.skin_color} <br />
          Hair Color: {character.hair_color} <br />
          Height: {character.height} <br />
          Eye Color: {character.eye_color} <br />
          Birth Year: {character.birth_year}
        </p>
      </div>
    </div>
  );
};

export default CharacterDetails;
