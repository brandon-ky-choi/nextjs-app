// import { Link, useParams } from 'react-router-dom';
import Link from "next/link";
import { useRouter } from "next/router";

import FavButton from "../FavButton";

import { ListViewPropType } from "./type";

import "./style.css";

function ListView({ pokemons }: ListViewPropType) {
  // const { keyword } = useParams();
  const keyword = "";
  const router = useRouter();
  console.log(router);
  return (
    <>
      <ul className="pokemon-list">
        {pokemons.map((pokemon) => {
          return (
            <li key={`Pokemon-${pokemon.name}`}>
              <FavButton pokemonId={pokemon.id} />
              <Link
                href={`${keyword ? "/search/" + keyword : ""}/pokemon/${
                  pokemon.id
                }`}
              >
                {pokemon.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default ListView;
