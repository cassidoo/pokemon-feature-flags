import React, {
  useState,
  useEffect,
} from "react";
import "./App.css";

function App() {
  const [pokémon, setPokémon] =
    useState("pikachu");
  const [img, setImg] = useState("pikachu");

  useEffect(() => {
    document.title = "Hello, " + pokémon;
  }, [pokémon]);

  useEffect(() => {
    let isCurrent = true;

    if (pokémon.length >= 4) {
      fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokémon}/`
      )
        .then((res) => res.json())
        .then((res) => {
          if (isCurrent && isNormal(res.types)) {
            setPokémon(
              res.name.replace(/^\w/, (c) =>
                c.toUpperCase()
              )
            ); // capitalizing name
            setImg(res.sprites.front_default);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

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

function isNormal(types) {
  return types
    .map((t) => {
      return t.type.name;
    })
    .some((e) => {
      return e === "normal";
    });
}

export default App;
