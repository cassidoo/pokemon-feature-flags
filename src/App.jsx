import React, {
  useState,
  useEffect,
} from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [pokémon, setPokémon] =
    useState("pikachu");
  const [img, setImg] = useState("pikachu");
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Hello, " + pokémon;
  }, [pokémon]);

  useEffect(() => {
    let isCurrent = true;
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokémon}/`
    )
      .then((res) => res.json())
      .then((res) => {
        if (isCurrent) {
          setPokémon(
            res.name.replace(/^\w/, (c) =>
              c.toUpperCase()
            )
          ); // capitalizing name
          setImg(res.sprites.front_default);
        }
      })
      .catch((error) => {
        setError(error);
      });
    return () => {
      isCurrent = false;
    };
  }, [pokémon]);

  return (
    <div className="pokemon">
      <div>
        <input
          onChange={(e) =>
            setPokémon(e.target.value)
          }
          defaultValue={pokémon}
          type="text"
        />
      </div>
      Hello, {pokémon}!
      <img src={img} />
    </div>
  );
}

export default App;
