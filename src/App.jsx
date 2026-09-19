import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import CourseCard from "./components/CourseCard";
import TeacherCard from "./components/TeacherCard";
import FeatureSection from "./components/FeatureSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import TestimonialCard from "./components/TestimonialCard";
import RegistrationForm from "./components/RegistrationForm";
import ContactForm from "./components/ContactForm";
import coursesData from "./components/data/coursesData";
import teachersData from "./components/data/teachersData";
import testimonialsData from "./components/data/testimonialsData";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  const handleNavigate = (page) => {
    setActivePage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderHome = () => (
    <>
      <Hero />

      <FeatureSection />

      <section
        className="min-h-screen bg-[#b1f5ff] bg-[linear-gradient(rgba(59,130,246,0.08)_2px,transparent_2px),linear-gradient(90deg,rgba(59,130,246,0.27)_1px,transparent_2px),radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.28),transparent_45%)] bg-[size:36px_36px,36px_36px,100%_100%] py-16 sm:py-20 lg:py-24"
        aria-labelledby="courses-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="OUR COURSES"
            title="Featured Courses"
            description="Explore our carefully designed ICT courses for students."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coursesData.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => handleNavigate("courses")}
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              View All Courses
            </button>
          </div>
        </div>
      </section>

      <section
        className="min-h-screen bg-[#b1f5ff] bg-[linear-gradient(rgba(59,130,246,0.08)_2px,transparent_2px),linear-gradient(90deg,rgba(59,130,246,0.27)_1px,transparent_2px),radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.28),transparent_45%)] bg-[size:36px_36px,36px_36px,100%_100%] py-16 sm:py-20 lg:py-24"
        aria-labelledby="teachers-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="OUR TEACHERS"
            title="Meet Our Teachers"
            description="Learn from experienced and dedicated instructors."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teachersData.slice(0, 3).map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => handleNavigate("teachers")}
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-blue-600 px-6 py-3 text-sm font-bold text-blue-600 transition-all duration-200 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              View All Teachers
            </button>
          </div>
        </div>
      </section>

      <section
        className="min-h-screen bg-[#b1fcff] bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px),radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.18),transparent_45%)] bg-[size:36px_36px,36px_36px,100%_100%] bg-fixed py-16 sm:py-20 lg:py-24"
        aria-labelledby="testimonials-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="STUDENT REVIEWS"
            title="What Our Students Say"
            description="Hear from students about their learning experience."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonialsData.slice(0, 3).map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );

  const renderCourses = () => (
    <>
      <section className="min-h-screen bg-[#b1fcff] bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px),radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.18),transparent_45%)] bg-[size:36px_36px,36px_36px,100%_100%] bg-fixed py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <SectionTitle
            badge="OUR COURSES"
            title="All Courses"
            description="Explore our available learning programs for students."
          />

          <div className="mt-10 grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
            {coursesData.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );

  const renderTeachers = () => (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="OUR TEACHERS"
          title="Our Teachers"
          description="Meet the teachers who guide our students throughout their learning journey."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teachersData.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
    </section>
  );

  const renderRegister = () => (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <RegistrationForm />
    </section>
  );

  const renderContact = () => (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <ContactForm />
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
      />

      {activePage === "home" && renderHome()}

      {activePage === "courses" && renderCourses()}

      {activePage === "teachers" && renderTeachers()}

      {activePage === "register" && renderRegister()}

      {activePage === "contact" && renderContact()}

      <Footer />
    </div>
  );
}