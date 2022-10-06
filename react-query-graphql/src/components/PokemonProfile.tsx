import { Circle, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export interface IPoke {
    name: string;
    id: number;
  }

interface Props {
  props: IPoke;
}

export default function PokemonProfile({ props }: Props) {
  return (
    <Flex justify={"center"} flex={1}>
      <Stack align={"center"}>
        <Heading color={"yellow"}>{props.id}</Heading>
        <Text fontSize={"2xl"} fontWeight="bold" textTransform={"uppercase"}>
          {props.name}
        </Text>
        <Circle bg={"yellow.200"}>
          <Image
            w={{ base: "100px", sm: "150px", lg: "200px" }}
            h={{ base: "100px", sm: "150px", lg: "200px" }}
            objectFit={"fill"}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${props.id}.gif`}
            alt="pokemon-image"
          />
        </Circle>
      </Stack>
    </Flex>
  );
}