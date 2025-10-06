import Header from "./components/Header";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import UpcomingEvents from "./components/UpcomingEvents";
import EventHighlight from "./components/EventHighlight";
import BlogNews from "./components/BlogNews";
import ClickSpark from "./components/ClickSpark";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ClickSpark sparkColor="#ff0" sparkCount={10} sparkRadius={20}>
        <Header />
        <main>
          <Hero />
          <Introduction />
          <UpcomingEvents />
          <EventHighlight />
          <BlogNews />
        </main>
      </ClickSpark>
    </div>
  );
}

export default App;
