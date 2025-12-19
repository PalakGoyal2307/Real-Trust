import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    // If already on landing page → just scroll
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    } 
    // If on login/admin → navigate first, then scroll
    else {
      navigate("/");

      // wait for landing page to render
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 300);
    }
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-0 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img
            src="/logo.png"
            alt="logo"
            className="h-12 w-12 object-contain"
          />
          <h1 className="text-2xl font-bold text-gray-900">
            Real Trust
          </h1>
        </div>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center space-x-6 font-medium text-gray-700">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-indigo-600"
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-indigo-600"
          >
            Projects
          </button>

          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-indigo-600"
          >
            Services
          </button>

          <button
            onClick={() => scrollToSection("clients")}
            className="hover:text-indigo-600"
          >
            Clients
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-indigo-600"
          >
            Contact
          </button>

          {/* ADMIN PANEL BUTTON */}
          <button
            onClick={() => navigate("/admin")}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Admin Panel
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
