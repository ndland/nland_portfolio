import React from "react";
import "./Home.css";

interface HomeProps {
  name: string;
}

const Home: React.FC<HomeProps> = ({ name }) => {
  return (
    <div className="home-container">
      <h1>Welcome, {name}!</h1>
    </div>
  );
};

export default Home;
