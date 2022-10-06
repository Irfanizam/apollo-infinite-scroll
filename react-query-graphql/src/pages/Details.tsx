import { Link } from "@tanstack/react-location";
import { useQuery } from '@apollo/client';
import { Button, Stack } from "@chakra-ui/react";
import PokemonMoves from "../components/PokemonMoves";
import PokemonProfile from "../components/PokemonProfile";
import ShowLoading from "../components/ShowLoading";
import ShowError from "../components/ShowError";
import { GET_POKEMON_DETAIL, PokemonDetailQuery } from "../graphQL/GetPokemonDetail";


export default function Details() {
  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get("name");
  const gqlVariables = {
    variables: { name },
  };

  const { loading, error, data } = useQuery<PokemonDetailQuery>(
    GET_POKEMON_DETAIL,
    gqlVariables
  );

  return (
    <Stack bg={"blue.200"} padding={4} >
      <Link to="/" >
        <Button left={1270} colorScheme={"blue"}>Go back to Home</Button>
      </Link>

      {error && <ShowError />}
      {loading && <ShowLoading />}
      {data && (
        <>
          <PokemonProfile props={data!.pokemon} />
          <PokemonMoves pokeMoves={data!.pokemon.moves} />
        </>
      )}
    </Stack>
  );
}