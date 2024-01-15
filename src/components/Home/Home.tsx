import React from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center dark:bg-neutral-600">
        <div className="absolute right-8 top-8 text-green-500">
          <div className="flex space-x-8 font-roboto">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Projects</a>
          </div>
        </div>
        <div className="flex items-center justify-center font-roboto-slab text-4xl font-bold text-orange-500 dark:text-white md:text-8xl">
          <div className="flex flex-col items-center space-y-8">
            <div>Hello! I'm Nick</div>
            <div className="text-xl md:text-3xl">I build for the web</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
