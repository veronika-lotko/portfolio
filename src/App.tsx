// App.tsx
import React from "react";
import "./styles/global.scss";
import Home from "./pages/Home";
import GradientBubbles from "./components/ui/GradientBubbles/GradientBubbles";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="background">
        <GradientBubbles />
        <Header />
        <div className="home-wrapper">
          <Home />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
