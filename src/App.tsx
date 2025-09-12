import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Team from "./components/Team";
import Contact from "./components/Contact";
import EventDetails from "./components/EventDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Events />
                <Team />
                <Contact />
              </>
            }
          />
          <Route path="/events/:id" element={<EventDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
