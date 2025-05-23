import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Herobanner from "./Components/Herobanner";
import Postsec from "./Components/Postsec";
import Hilightsec from "./Components/Hilightsec";
import YellowBox from "./Components/YellowBox";
import FeatureProduct from "./Components/FeatureProduct";
import Contact from "./Components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Herobanner />
      <Postsec />
      <YellowBox />
      <Hilightsec />
      <FeatureProduct />
      <Contact />
    </>
  );
}

export default App;
