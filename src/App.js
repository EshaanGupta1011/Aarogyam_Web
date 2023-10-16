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
      <div className="section-features">
        <Features />
      </div>
    </div>
  );
}

function Features() {
  const content = [
    {
      imgUrl: "./run.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,.",
      colour: "#ffe3e3",
    },
    {
      imgUrl: "./med.png",
      colour: "#d3f9d8",

      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,.",
    },
    {
      imgUrl: "./yoga.png",
      colour: "#ffe8cc",

      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,.",
    },
    {
      imgUrl: "./connect.png",
      colour: "#c5f6fa",

      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,.",
    },
  ];

  return (
    <div>
      <h1 className="secondary-heading features-secondary-heading">
        How does Aarogyam helps you?
      </h1>

      <div className="grid features-grid">
        {content.map((s) => (
          <FeaturesList imgUrl={s.imgUrl} text={s.text} colour={s.colour} />
        ))}
      </div>
    </div>
  );
}

function FeaturesList({ imgUrl, text, colour }) {
  return (
    <div className="flex features-flex">
      <img
        src={imgUrl}
        alt={text}
        className="features-img"
        style={{ backgroundColor: colour }}
      />
      <p className="features-text">{text}</p>
    </div>
  );
}
