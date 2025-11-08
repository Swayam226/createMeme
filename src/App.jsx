import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full bg-[url('/bg_comic.jpg')] bg-cover bg-center bg-no-repeat backdrop-blur-3xl">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
