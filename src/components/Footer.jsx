import logo from "../assets/small-logo.svg";

export default function Footer() {
  return (
    <footer className="footer fade-in">
      <img src={logo} alt="logo"></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
