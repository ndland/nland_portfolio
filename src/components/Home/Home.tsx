import React from "react";
import { useBoolean } from "@chakra-ui/react";
import "./Home.css";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [flag, setFlag] = useBoolean();

  return (
    <>
      <p>Boolean state: {flag.toString()}</p>
      <button onClick={setFlag.toggle}>
        Click me to toggle the boolean value
      </button>
    </>
  );
};

export default Home;
