import React from "react";
import Home from "./pages/Home";

const App = () => {
  const createParticles = () => {
    const particles = [];
    const colors = ["#ff6b6b", "#f0e130", "#4a90e2", "#50e3c2", "#bd10e0"];
    for (let i = 0; i < 50; i++) {
      const size = Math.random() * 10 + 5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const style = {
        width: `${size}px`,
        height: `${size}px`,
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        backgroundColor: color,
        animationDuration: `${Math.random() * 10 + 5}s`,
        animationDelay: `${Math.random() * 5}s`,
      };
      particles.push(<div key={i} className="particle" style={style}></div>);
    }
    return particles;
  };

  return (
    <div>
      <div className="particles">{createParticles()}</div>
      <div className="background-shape shape1"></div>
      <div className="background-shape shape2"></div>
      <div className="background-shape shape3"></div>
      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <h1>Recipe Finder</h1>
        <Home />
      </div>
    </div>
  );
};

export default App;