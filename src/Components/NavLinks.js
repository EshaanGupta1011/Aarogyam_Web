import { Logo } from "./Logo";

export function NavLinks() {
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
