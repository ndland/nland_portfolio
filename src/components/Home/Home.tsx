import React from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center dark:bg-gray-500">
        <div className="absolute right-9 top-9 text-green-400">
          <div className="invisible flex space-x-8 md:visible md:text-2xl">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Projects</a>
          </div>
        </div>
        <div className="flex items-center justify-center font-bold text-gray-500 dark:text-white md:text-8xl">
          <div className="flex flex-col items-center space-y-9">
            <div className="text-4xl font-semibold md:text-8xl">
              Hello! I'm Nick
            </div>
            <div className="text-2xl font-light md:text-4xl md:font-normal">
              I build for the web
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
