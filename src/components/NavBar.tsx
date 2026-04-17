import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav>
      <ul className="flex gap-4 justify-center py-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
      </ul>
    </nav>
  );
}
