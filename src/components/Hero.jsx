

const stats = [
{ value: "10K+", label: "Students" },
{ value: "25+", label: "Courses" },
{ value: "95%", label: "Success Rate" },
];

function Hero() {
return ( <section
   id="home"
   className="relative overflow-hidden min-h-screen bg-[#b1f5ff] bg-[linear-gradient(rgba(59,130,246,0.08)_2px,transparent_2px),linear-gradient(90deg,rgba(59,130,246,0.27)_1px,transparent_2px),radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.28),transparent_45%)] bg-[size:36px_36px,36px_36px,100%_100%] bg-fixed"
 >
{/* Soft Background Decorations */} <div
     className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-blue-50 blur-3xl"
     aria-hidden="true"
   />

  <div
    className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sky-50 blur-3xl"
    aria-hidden="true"
  />

  <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20 xl:py-24">
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      {/* Hero Content */}
      <div className="max-w-2xl">
        {/* Badge */}
        <div className="mb-6 inline-flex animate-pulse items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-purple-700">
          <span aria-hidden="true">🚀</span>
          <span>Learn ICT. Build Your Future.</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-purple-900 sm:text-5xl lg:text-6xl">
          Master ICT.
          <br />
          <span className="text-purple-500">Build Your Future.</span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-xl text-base leading-7 text-slate-900 sm:text-lg sm:leading-8">
          Learn ICT with expert guidance, structured courses, and practical
          learning designed to help you achieve your academic goals.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#courses"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:px-7"
          >
            Explore Courses
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="ml-2 h-4 w-4"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </a>

          <a
            href="#register"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:px-7"
          >
            Register Now
          </a>
        </div>

        {/* Statistics */}
        <div className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-slate-200 border-t border-slate-200 pt-7">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="px-3 first:pl-0 last:pr-0 sm:px-5"
            >
              <p className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Educational Visual */}
      <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
        {/* Decorative Circle */}
        <div
          className="absolute -right-4 -top-5 h-20 w-20 rounded-full border-8 border-blue-50 sm:-right-6 sm:-top-6 sm:h-24 sm:w-24"
          aria-hidden="true"
        />

        {/* Main Visual Card */}
        <div className="relative rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-xl shadow-slate-200/60 sm:p-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {/* Browser / Learning Platform Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 sm:px-5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              </div>

              <div className="rounded-md bg-slate-100 px-3 py-1 text-[10px] font-semibold text-slate-500 sm:text-xs">
                Next ICT Gen
              </div>
            </div>

            {/* Learning Dashboard */}
            <div className="p-5 sm:p-7">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <rect
                      width="18"
                      height="12"
                      x="3"
                      y="4"
                      rx="2"
                    />
                    <path d="M8 20h8M12 16v4" />
                    <path d="m8 10 2.5 2L16 8" />
                  </svg>
                </div>

                <div>
                  <p className="text-xs font-semibold text-blue-600">
                    ONLINE LEARNING
                  </p>
                  <h2 className="mt-1 text-base font-bold text-slate-900 sm:text-lg">
                    ICT Masterclass
                  </h2>
                </div>
              </div>

              {/* Progress */}
              <div className="mt-7">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600">
                    Course Progress
                  </span>
                  <span className="text-xs font-bold text-blue-600">
                    75%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-3/4 rounded-full bg-blue-600" />
                </div>
              </div>

              {/* Course Modules */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="m8 9 3 3-3 3M13 15h3" />
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="3"
                          rx="2"
                        />
                      </svg>
                    </span>

                    <span className="text-[10px] font-bold text-blue-600">
                      COMPLETED
                    </span>
                  </div>

                  <p className="mt-3 text-sm font-bold text-slate-800">
                    Programming
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Logic &amp; Coding
                  </p>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
                      </svg>
                    </span>

                    <span className="text-[10px] font-bold text-sky-600">
                      LEARNING
                    </span>
                  </div>

                  <p className="mt-3 text-sm font-bold text-slate-800">
                    Web Technology
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    HTML, CSS &amp; JS
                  </p>
                </div>
              </div>

              {/* Bottom Learning Indicator */}
              <div className="mt-5 flex items-center justify-between rounded-xl bg-blue-50 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M12 6v6l4 2" />
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </span>

                  <span className="text-xs font-semibold text-slate-600">
                    Keep learning
                  </span>
                </div>

                <span className="text-xs font-bold text-blue-600">
                  +25%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Badge */}
        <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg shadow-slate-200/70 sm:-left-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-lg">
            🎓
          </div>

          <div>
            <p className="text-xs font-bold text-slate-900">
              Learn Smarter
            </p>
            <p className="mt-0.5 text-[11px] text-slate-500">
              Grow with confidence
            </p>
          </div>
        </div>

        {/* Decorative Dot Pattern */}
        <div
          className="absolute -bottom-8 -right-5 grid grid-cols-4 gap-1.5 opacity-60 sm:-right-8"
          aria-hidden="true"
        >
          {Array.from({ length: 16 }).map((_, index) => (
            <span
              key={index}
              className="h-1.5 w-1.5 rounded-full bg-blue-300"
            />
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


);
}

export default Hero;
