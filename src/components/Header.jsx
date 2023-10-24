import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <div className="navLogo fade-in">
      <img src={logo} alt="logo" />
      <nav>
        <NavLink className="link-style" to="/">
          Accueil
        </NavLink>
        <NavLink className="link-style" to="/about">
          À propos
        </NavLink>
      </nav>
    </div>
  );
}
