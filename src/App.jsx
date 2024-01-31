import React from "react";
import "./App.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";

const App = () => {
  return (
    <>
      <Header />
      <HeroSlider />
    </>
  );
};

export default App;
