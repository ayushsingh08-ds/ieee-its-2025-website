import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClickSpark from "./components/ClickSpark";
import Home from "./pages/Home";
import About from "./pages/about";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <ClickSpark sparkColor="#2dd4bf" sparkCount={12} sparkRadius={25}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </ClickSpark>
      </div>
    </Router>
  );
}

export default App;
