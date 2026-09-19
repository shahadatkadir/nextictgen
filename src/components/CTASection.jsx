
function CTASection() {
  return (
    <section
      id="cta"
      className=" py-16 sm:py-20 lg:py-24"
      aria-labelledby="cta-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-blue-600 px-6 py-12 text-center shadow-xl shadow-blue-100 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div className="mx-auto max-w-3xl">
            <h2
              id="cta-title"
              className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Ready to Start Your Preparation?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-50 sm:text-base sm:leading-8 lg:text-lg">
              Join Next ICT Gen and build your academic foundation with
              structured classes, expert guidance, quality study materials,
              and regular practice.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#register"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-blue-600 shadow-sm transition-all duration-200 hover:bg-blue-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 sm:w-auto"
              >
                Enroll Now
              </a>

              <a
                href="#courses"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-blue-300 bg-blue-600 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 sm:w-auto"
              >
                Explore Courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;

