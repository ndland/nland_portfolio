import React from "react";
import { Button } from "@chakra-ui/react";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Button colorScheme="teal" size="xs">
        Button
      </Button>
    </>
  );
};

export default Home;
