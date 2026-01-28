import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Programs from "./Components/Programs";
import Trainers from "./Components/Trainers";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Programs />
      <Trainers />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
