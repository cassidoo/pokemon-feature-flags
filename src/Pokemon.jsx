import React, {
  useState,
  useEffect,
} from "react";
import { withLDConsumer } from "launchdarkly-react-client-sdk";

import "./App.css";

const Pokemon = ({ flags }) => {
  const [pokémon, setPokémon] =
    useState("pidgey");
  const [img, setImg] = useState("pidgey");

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
          if (
            isCurrent &&
            isNormal(res.types, flags)
          ) {
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
    <>
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
    </>
  );
};

function isNormal(types, flags) {
  return (
    flags.pokeflag ||
    types
      .map((t) => {
        return t.type.name;
      })
      .some((e) => {
        return e === "normal";
      })
  );
}

export default withLDConsumer()(Pokemon);
