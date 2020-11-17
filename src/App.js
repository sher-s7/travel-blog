import headshot from "./images/headshot.jpg";
import heroBackground from "./images/hero-background.jpg";
import "./App.scss";
import Header from "./components/Header";
import Background from "./components/Background";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Background img={heroBackground} />
      <About headshot={headshot} />
      <Footer />
    </div>
  );
}

export default App;
