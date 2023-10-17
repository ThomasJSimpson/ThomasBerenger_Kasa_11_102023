import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { GetPath } from "../utils/Functions";

export default function Header() {
  const path = GetPath();
  return (
    <div className="navLogo fade-in">
      <img src={logo} alt="logo" />
      <nav>
        <Link className={`link-style ${path === "/" ? "active" : null}`} to="/">
          Accueil
        </Link>
        <Link className={`link-style ${path === "/about" ? "active" : null}`} to="/about">
          À propos
        </Link>
      </nav>
    </div>
  );
}
