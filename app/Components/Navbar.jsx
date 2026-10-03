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
    <nav className="nav-container">
      <ul className="nav-list">
        <li className={active === "Home" ? "nav-item active" : "nav-item"}>
          <Link href="/">Home</Link>
        </li>
        <li className={active === "Aboutme" ? "nav-item active" : "nav-item"}>
          <Link href="/about">About</Link>
        </li>
        <li className={active === "Projects" ? "nav-item active" : "nav-item"}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={active === "Contact" ? "nav-item active" : "nav-item"}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className="theme-toggle">
          <button
            type="button"
            className="btn"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
          </button>
        </li>
      </ul>
    </nav>
  );
}