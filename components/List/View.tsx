// import { Link, useParams } from 'react-router-dom';
import Link from "next/link";
import { useParams } from "next/navigation";

import FavButton from "../FavButton";

import { ListViewPropType } from "./type";

import "./style.css";

function ListView({ pokemons }: ListViewPropType) {
  const params = useParams();
  const keyword = params?.keyword ?? "";

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
