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
        <Header />
        <Home />
        <GradientBubbles />
      </div>
    </>
  );
}

export default App;
