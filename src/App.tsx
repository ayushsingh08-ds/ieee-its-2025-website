import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Team from "./components/Team";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Events />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
