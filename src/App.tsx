// App.tsx
import React from "react";
import "./styles/global.scss";
import Home from "./pages/Home";
import GradientBubbles from "./components/ui/GradientBubbles/GradientBubbles";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="background">
        <GradientBubbles />
        <Header />
        <div className="home-wrapper">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
