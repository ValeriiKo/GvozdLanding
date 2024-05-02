import React, { useState, useEffect } from "react";
import { Header } from "./components/header";
import { CarouselAuto } from "./components/carousel";
import './App.css';
import JsonData from "./data/data.json";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Header data={landingPageData.Header} />
      <CarouselAuto data={landingPageData.Carousel} />
    </div>
  );
};

export default App;
