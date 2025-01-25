import React, { useEffect } from "react";
import "./App.scss";
import NavigationBar from "./components/molecules/nav-bar";
import AboutMeSection from "./components/molecules/about-section";

function App() {
  useEffect(() => {
    const interBubble = document.querySelector<HTMLDivElement>(".interactive")!;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      // interBubble.style.transform = `scale(${Math.round(curX)}px, ${Math.round(curY)}px)`;

      requestAnimationFrame(() => {
        move();
      });
    }

    window.addEventListener("mousemove", (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
      });
    };
  }, []);

  return (
    <>
      <div className="gradient-bg">
        <NavigationBar />
        <AboutMeSection />
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
    </>
  );
}

export default App;
