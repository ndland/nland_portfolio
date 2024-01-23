import About from "./components/About/About.tsx";
import Home from "./components/Home/Home.tsx";

const handleClick = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
};

function App() {
  return (
    <>
      <Home onClick={handleClick} />
      <About />
    </>
  );
}

export default App;
