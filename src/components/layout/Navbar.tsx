import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Skills", to: "/skills" },
    { label: "Projects", to: "/projects" },
    { label: "Experience", to: "/experience" },
    { label: "Contact", to: "/contact" },
  ];
  
  return (
    <nav className="stick top-0">
      <div className="max-w-[115rem] mx-auto px-4 py-8 flex items-center justify-between">
        <NavLink
            to="/"
            className="text-secondary font-bold text-2xl tracking-widest uppercase"
        >
            Logo
        </NavLink>

        <ul className="hidden md:flex items-center gap-20">
            {navLinks.map(({ label, to }) => (
                <li key={to}>
                    <NavLink
                        to={to}
                        end={to === "/"}
                        className={({ isActive }) => 
                            `text-sm font-medium tracking-wide transition-colors duration-200
                            ${isActive
                                ? "text-secondary"
                                : "text-text-muted hover:text-text-primary"
                            }`
                        }
                    >
                        {label}
                    </NavLink>
                </li>
            ))}
        </ul>

        <div className="hidden md:block">
            <NavLink
                to="/contact"
                className="bg-secondary hover:bg-secondary-dark text-white text-sm font-semibold px-5 py-2 rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-secondary/30"
            >
                Hire Me
            </NavLink>
        </div>
      </div>
    </nav>
  );
}
