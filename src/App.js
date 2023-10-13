import "./App.css";
import "./General.css";
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { AboutUs } from "./Components/AboutUs";

export default function App() {
  return (
    <div>
      <div className="hero">
        <Header />
        <Hero />
      </div>

      <div className="section-aboutus">
        <AboutUs />
      </div>
    </div>
  );
}
