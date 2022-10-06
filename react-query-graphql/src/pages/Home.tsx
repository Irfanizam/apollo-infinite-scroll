import { useQuery } from "@apollo/client";
import { Box, Heading, HStack, Img, Stack } from "@chakra-ui/react";
import { GET_POKEMON_LIST, PokemonQuery } from "../graphQL/GetPokemonList"
// import { InView } from "react-intersection-observer";
import PokemonCards from "../components/PokemonNames";
import ShowLoading from "../components/ShowLoading";
import ShowError from "../components/ShowError";
import InfiniteScroll from "react-infinite-scroll-component";
import PokemonNames from "../components/PokemonNames";

export default function Home() {
  const { data, error, fetchMore } = useQuery<PokemonQuery>(GET_POKEMON_LIST, {
    variables: { offset: 0, limit: 10 },
  });

  const loadMore = () => {
    fetchMore({ variables: { offset: data!.pokemons.results.length } });
  };

  console.log(data);

  const currentLength = data ? data.pokemons.results.length : 0;
  const hasMore = data ? data.pokemons.count > currentLength : true;

  return (
    <Box maxW={"full"} alignContent={"center"} bg="blue.200">

      <Stack alignItems={"center"}>
        <Heading p={4}>
          <HStack>
            <Img src="./image/poke_logo.png" alt="./image/poke_logo.png"
            h={{ base: "100px", sm: "100px", md: "80px", lg: "100px" }}
            w={{ base: "160px", sm: "160px", md: "180px", lg: "130px" }}
            />
          </HStack>
          <Stack>
            
          </Stack>
        </Heading>
        {error && <ShowError />}
      </Stack>

      <InfiniteScroll
        dataLength={currentLength}
        next={loadMore}
        hasMore={hasMore}
        scrollThreshold={0.7}
        loader={<ShowLoading />}
      >
        {data && <PokemonNames pokemons={data!.pokemons.results} />}
      </InfiniteScroll>
      
    </Box>
  );
}