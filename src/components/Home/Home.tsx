import React from "react";

interface HomeProps {
  onClick?: () => void;
}

const Home: React.FC<HomeProps> = ({ onClick }) => {
  return (
    <div className="flex h-screen items-center justify-center dark:bg-gray-500">
      <div className="flex items-center justify-center font-bold text-gray-500 dark:text-white md:text-8xl">
        <div className="flex flex-col items-center space-y-9">
          <div className="text-4xl font-semibold md:text-8xl">
            Hello! I'm Nick
          </div>
          <div className="text-2xl font-light md:text-4xl md:font-normal">
            I build for the web
          </div>
          <div
            data-testid="arrow"
            className="absolute bottom-0 animate-bounce"
            onClick={onClick}
          >
            <svg
              className="h-6 w-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 9-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
