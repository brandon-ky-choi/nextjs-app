"use client";
import { useParams } from "next/navigation";
import DetailsView from "./View";

function Details() {
  const params = useParams();
  const pokemonId = params?.pokemonId;
  if (!pokemonId || typeof pokemonId === "object") {
    return <></>;
  }

  return <DetailsView pokemonId={parseInt(pokemonId, 10)} />;
}

export default Details;
