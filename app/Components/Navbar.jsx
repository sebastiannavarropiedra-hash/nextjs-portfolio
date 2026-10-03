import Link from "next/link";
import "../Styles/Navbar.css";

export default function Navbar({ active }) {

  const Navbar = (props) => {
    const { active } = props;
    const [darkMode, setDarkMode] = useState(() => {
      return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
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
        </ul>
      </nav>
    );
  }
}