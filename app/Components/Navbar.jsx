import Link from "next/link";
import "../Styles/Navbar.css";

export default function Navbar({ active }) {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className={active === "Home" ? "nav-item active" : "nav-item"}>
          <Link href="/">Home</Link>
        </li>
        <li className={active === "Aboutme" ? "nav-item active" : "nav-item"}>
          <Link href="/Aboutme">About</Link>
        </li>
        <li className={active === "Projects" ? "nav-item active" : "nav-item"}>
          <Link href="/Projects">Projects</Link>
        </li>
        <li className={active === "Contact" ? "nav-item active" : "nav-item"}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
