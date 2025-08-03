import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Characters from "../components/Characters";

// Función para obtener personajes
const listCharacters = () =>
  fetch("https://swapi.tech/api/people")
    .then(res => res.json())
    .then(data => data.results);

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    listCharacters()
      .then(data => setPersonajes(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <div className="d-flex overflow-auto gap-3 p-3">
        {personajes.map((p) => (
          <div key={p.uid} className="flex-shrink-0">
            <Characters
              uid={p.uid}
              nombre={p.name}
              url={p.url}
              gender={p.gender}
            />
          </div>
        ))}
      </div>
    </div>

  );
};
