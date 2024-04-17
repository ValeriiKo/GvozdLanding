import React, { useState, useEffect } from "react";
import { Header } from "./components/header";
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
    </div>
  );
};

export default App;
