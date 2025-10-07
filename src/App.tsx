import Header from "./components/Header";
import Hero from "./components/Hero";
import JoinCommunity from "./components/JoinCommunity";
import WhatWeDo from "./components/WhatWeDo";
import Footer from "./components/Footer";
import ClickSpark from "./components/ClickSpark";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ClickSpark sparkColor="#1A56DB" sparkCount={8} sparkRadius={15}>
        <Header />
        <main>
          <Hero />
          <JoinCommunity />
          <WhatWeDo />
        </main>
        <Footer />
      </ClickSpark>
    </div>
  );
}

export default App;
