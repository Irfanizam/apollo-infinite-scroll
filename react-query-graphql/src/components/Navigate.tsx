import { Link, HStack } from "@chakra-ui/react";

interface Props {
  setPage: any;
}

export default function Navigate({ setPage }: Props) {
  return (
    <HStack
      textAlign={"center"}
      align={"center"}
      color="white"
      fontFamily="mono"
    >
      <Link
        onClick={() => setPage("pokemons")}
        fontSize={{ base: "13px", sm: "14px", md: "15px", lg: "16px" }}
      >
        Home
      </Link>
      <Link
        onClick={() => setPage("pokemons")}
        fontSize={{ base: "13px", sm: "14px", md: "15px", lg: "16px" }}
      >
        Gallery
      </Link>
    </HStack>
  );
}