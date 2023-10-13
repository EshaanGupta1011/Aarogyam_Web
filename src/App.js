import "./App.css";

export default function App() {
  return (
    <div>
      <div className="hero">
        <Header />
        <Hero />
      </div>
      {/* Temporary section */}
      <div className="section-features">
        <Features />
      </div>
    </div>
  );
}

function Header() {
  return <NavLinks />;
}

function NavLinks() {
  return (
    <div className="nav-flex flex">
      <ul className=" flex nav-section">
        <a href="#" className="nav-link">
          <li className="nav-links-text">About us</li>
        </a>

        <a href="#" className="nav-link">
          <li className="nav-links-text">Mental Health</li>
        </a>

        <li className="logo-link">
          <Logo />
        </li>

        <a href="#" className="nav-link">
          <li className="nav-links-text">Aarogyam Connect</li>
        </a>

        <a href="#" className="nav-link">
          <button className="btn header-btn">Sign in</button>
        </a>
      </ul>
    </div>
  );
}

function Logo() {
  return (
    <p className="logo-align">
      <img
        className="aarogyam_logo"
        src="./aarogyam_logo.png"
        alt="Aarogyam logo"
      />
    </p>
  );
}

function Hero() {
  return (
    <>
      <div className="hero-heading">
        <h1 className="primary-heading hero-primary-heading">Aarogyam</h1>
        <h2 className="secondary-heading hero-secondary-heading">
          Your own holistic health app!
        </h2>
      </div>
    </>
  );
}

// Temporary section

function Features() {
  return (
    <>
      <h1>Features</h1>
    </>
  );
}
