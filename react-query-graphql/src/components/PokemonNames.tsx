import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { Link } from "@tanstack/react-location";
import { Pokemon } from "../graphQL/GetPokemonList";

interface Props {
  pokemons: Pokemon[];
}

export default function PokemonNames({ pokemons }: Props) {
  return (
    <SimpleGrid
      minChildWidth="160px"
      spacing="40px"
      justifyItems={"center"}
      p={10}
    >
      {pokemons.map((p: Pokemon, i: number) => {
        return (
          <Link key={i} to={`/details?name=${p.name}`}>
            <Box
              bg={"yellow.200"}
              rounded={50}
              _hover={{
                background: "blue.500",
                color: "red",
              }}
            >
              <Box
                maxW={"120px"}
                height="170px"
                p={4}
                textTransform="capitalize"
                fontWeight={"bold"}
                fontFamily="mono"
              >
                {p.id}
                <br />
                {p.name}

                <Image
                  w={{ base: "80px", sm: "90px", lg: "150px" }}
                  h={{ base: "80px", sm: "90px", lg: "150px" }}
                  objectFit={"fill"}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
                  alt="pokemon_image"
                />
              </Box>
            </Box>
          </Link>
        );
      })}
    </SimpleGrid>
  );
}