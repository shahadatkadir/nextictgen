function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Courses", href: "#courses" },
    { label: "Teachers", href: "#teachers" },
    { label: "Register", href: "#register" },
    { label: "Contact", href: "#contact" },
  ];

  const learningLinks = [
    { label: "SSC Preparation", href: "#courses" },
    { label: "HSC Preparation", href: "#courses" },
    { label: "ICT", href: "#courses" },
    { label: "Mathematics", href: "#courses" },
    { label: "Physics", href: "#courses" },
  ];

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand / About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              className="inline-flex items-center text-2xl font-extrabold tracking-tight text-white transition-colors hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Next ICT Gen
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Next ICT Gen is an educational coaching platform focused on
              structured learning, quality preparation, and academic support
              for students.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://fb.com/shahadat313k"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-sm font-bold text-slate-300 transition-all duration-200 hover:border-blue-500 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                f
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-sm font-bold text-slate-300 transition-all duration-200 hover:border-blue-500 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                ▶
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-sm font-bold text-slate-300 transition-all duration-200 hover:border-blue-500 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                ◎
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-labelledby="footer-quick-links">
            <h2
              id="footer-quick-links"
              className="text-sm font-bold uppercase tracking-wider text-white"
            >
              Quick Links
            </h2>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-8 items-center text-sm text-slate-400 transition-colors duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Courses / Learning */}
          <nav aria-labelledby="footer-learning-links">
            <h2
              id="footer-learning-links"
              className="text-sm font-bold uppercase tracking-wider text-white"
            >
              Learning
            </h2>

            <ul className="mt-5 space-y-3">
              {learningLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-8 items-center text-sm text-slate-400 transition-colors duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Information */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h2>

            <address className="mt-5 not-italic">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-sm"
                    aria-hidden="true"
                  >
                    ☎
                  </span>

                  <div>
                    <p className="text-xs font-medium text-slate-500">
                      Phone
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      +880 1307171926
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-sm"
                    aria-hidden="true"
                  >
                    ✉
                  </span>

                  <div className="min-w-0">
                    <p className="text-xs font-medium text-slate-500">
                      Email
                    </p>
                    <p className="mt-1 break-all text-sm text-slate-400">
                      w3shaha@gmail.com
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-sm"
                    aria-hidden="true"
                  >
                    📍
                  </span>

                  <div>
                    <p className="text-xs font-medium text-slate-500">
                      Location
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Rajshahi
                    </p>
                  </div>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* Bottom Copyright Area */}
        <div className="mt-12 border-t border-slate-800 pt-6">
          <div className="flex flex-col gap-3 text-center text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p>
              © {currentYear} Next ICT Gen. All rights reserved.
            </p>

            <p>Learn. Practice. Prepare.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;