import { useState } from "react";

const navLinks = [
  { name: "Home", page: "home" },
  { name: "Courses", page: "courses" },
  { name: "Teachers", page: "teachers" },
  { name: "About", page: "home", section: "about" },
  { name: "Contact", page: "contact" },
];

function Navbar({ activePage, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (link) => {
    if (link.section) {
      onNavigate(link.page);

      setTimeout(() => {
        const section = document.getElementById(link.section);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);

      setIsMenuOpen(false);
      return;
    }

    onNavigate(link.page);
    setIsMenuOpen(false);
  };

  const handleRegister = () => {
    onNavigate("register");
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-100 border-b border-slate-200  bg-[#c851ff] bg-[linear-gradient(rgba(59,130,246,0.08)_2px,transparent_2px),linear-gradient(90deg,rgba(59,130,246,0.27)_1px,transparent_2px),radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.28),transparent_45%)] bg-[size:36px_36px,36px_36px,100%_100%] shadow-sm backdrop-contrast-75">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <button
          type="button"
          onClick={() => handleNavigation({ page: "home" })}
          className="group flex shrink-0 items-center gap-2"
          aria-label="Next ICT Gen - Home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-extrabold text-white shadow-sm transition-colors duration-200 group-hover:bg-blue-700">
            N
          </span>

          <span className="text-lg font-extrabold tracking-tight text-slate-50 sm:text-xl">
            Next <span className="text-white"><span className="text-2xl text-blue-700 font-serif">ICT</span> Gen</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.page === activePage &&
              !link.section;

            return (
              <button
                key={`${link.name}-${link.page}`}
                type="button"
                onClick={() => handleNavigation(link)}
                className={`relative rounded-lg px-4 py-2.5 text-xl font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-100 hover:bg-slate-50 hover:text-blue-600"
                }`}
              >
                {link.name}

                {isActive && (
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-blue-600" />
                )}
              </button>
            );
          })}
        </div>

        {/* Desktop Register Button */}
        <div className="hidden lg:block">
          <button
            type="button"
            onClick={handleRegister}
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Register Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white lg:hidden"
        >
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.page === activePage &&
                  !link.section;

                return (
                  <button
                    key={`mobile-${link.name}-${link.page}`}
                    type="button"
                    onClick={() => handleNavigation(link)}
                    className={`flex min-h-11 items-center rounded-lg px-4 py-3 text-left text-sm font-semibold transition-colors duration-200 ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={handleRegister}
                className="mt-2 flex min-h-11 items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;