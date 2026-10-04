"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "../Styles/Navbar.css";

export default function Navbar({ active }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem("theme");
    const enabled = savedTheme === "dark";
    setDarkMode(enabled);
    document.documentElement.classList.toggle("dark-mode", enabled);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    document.documentElement.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="nav-background">
          <ul className="nav-list">
            <li className={active === "Home" ? "nav-item active" : "nav-item"}>
              <Link href="/"><i className="fa-solid fa-house" aria-hidden="true"></i>Home</Link>
            </li>
            <li className={active === "Aboutme" ? "nav-item active" : "nav-item"}>
              <Link href="/Aboutme"><i className="fa-solid fa-user" aria-hidden="true"></i>About</Link>
            </li>
            <li className={active === "Projects" ? "nav-item active" : "nav-item"}>
              <Link href="/Projects"><i className="fa-solid fa-briefcase" aria-hidden="true"></i>Projects</Link>
            </li>
            <li className={active === "Contact" ? "nav-item active" : "nav-item"}>
              <Link href="/contact"><i className="fa-solid fa-envelope" aria-hidden="true"></i>Contact</Link>
            </li>
            <li className="theme-toggle">
              <button type="button" className="btn" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <i className="fa-solid fa-sun" aria-hidden="true"></i> : <i className="fa-solid fa-moon" aria-hidden="true"></i>}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}