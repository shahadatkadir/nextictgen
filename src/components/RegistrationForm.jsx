import { useState } from "react";

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  studentClass: "",
  course: "",
  password: "",
  confirmPassword: "",
  message: "",
};

function RegistrationForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));

    setSuccessMessage("");
  };

  const validateForm = () => {
    const newErrors = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.studentClass) {
      newErrors.studentClass = "Please select your class.";
    }

    if (!form.course) {
      newErrors.course = "Please select a subject or course.";
    }

    if (!form.password) {
      newErrors.password = "Please enter a password.";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSuccessMessage("");

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Frontend-only submission test.
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Registration form submitted successfully.");
      setForm(initialForm);
    }, 500);
  };

  const inputClass = (fieldName) =>
    `mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 ${
      errors[fieldName]
        ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
        : "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
    }`;

  return (
    <section
      className="bg-[#b1f5ff] bg-[linear-gradient(rgba(59,130,246,0.08)_2px,transparent_2px),linear-gradient(90deg,rgba(59,130,246,0.27)_1px,transparent_2px),radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.28),transparent_45%)] bg-[size:36px_36px,36px_36px,100%_100%] py-16 sm:py-20 lg:py-24"
      aria-labelledby="registration-form-title"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {/* Header */}
          <div className="border-b border-slate-100 px-6 py-8 sm:px-8 sm:py-10">
            <h2
              id="registration-form-title"
              className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl"
            >
              Student Registration
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Fill in the form below to provide your information for course
              registration.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="px-6 py-8 sm:px-8 sm:py-10"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="text-sm font-semibold text-slate-800"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={
                    errors.fullName ? "fullName-error" : undefined
                  }
                  className={inputClass("fullName")}
                />

                {errors.fullName && (
                  <p
                    id="fullName-error"
                    className="mt-2 text-sm font-medium text-red-600"
                  >
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-semibold text-slate-800"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="01XXXXXXXXX"
                  autoComplete="tel"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  className={inputClass("phone")}
                />

                {errors.phone && (
                  <p
                    id="phone-error"
                    className="mt-2 text-sm font-medium text-red-600"
                  >
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-800"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={inputClass("email")}
                />

                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-2 text-sm font-medium text-red-600"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Student Class */}
              <div>
                <label
                  htmlFor="studentClass"
                  className="text-sm font-semibold text-slate-800"
                >
                  Student Class <span className="text-red-500">*</span>
                </label>

                <select
                  id="studentClass"
                  name="studentClass"
                  value={form.studentClass}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.studentClass)}
                  aria-describedby={
                    errors.studentClass ? "studentClass-error" : undefined
                  }
                  className={inputClass("studentClass")}
                >
                  <option value="">Select your class</option>
                  <option value="SSC">SSC</option>
                  <option value="HSC">HSC</option>
                  <option value="Other">Other</option>
                </select>

                {errors.studentClass && (
                  <p
                    id="studentClass-error"
                    className="mt-2 text-sm font-medium text-red-600"
                  >
                    {errors.studentClass}
                  </p>
                )}
              </div>

              {/* Course */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="course"
                  className="text-sm font-semibold text-slate-800"
                >
                  Preferred Subject / Course{" "}
                  <span className="text-red-500">*</span>
                </label>

                <select
                  id="course"
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.course)}
                  aria-describedby={errors.course ? "course-error" : undefined}
                  className={inputClass("course")}
                >
                  <option value="">Select a subject or course</option>
                  <option value="ICT">ICT</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Biology">Biology</option>
                  <option value="English">English</option>
                  <option value="Programming">Programming</option>
                </select>

                {errors.course && (
                  <p
                    id="course-error"
                    className="mt-2 text-sm font-medium text-red-600"
                  >
                    {errors.course}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-slate-800"
                >
                  Password <span className="text-red-500">*</span>
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="At least 6 characters"
                  autoComplete="new-password"
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={
                    errors.password ? "password-error" : undefined
                  }
                  className={inputClass("password")}
                />

                {errors.password && (
                  <p
                    id="password-error"
                    className="mt-2 text-sm font-medium text-red-600"
                  >
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-semibold text-slate-800"
                >
                  Confirm Password <span className="text-red-500">*</span>
                </label>

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  autoComplete="new-password"
                  aria-invalid={Boolean(errors.confirmPassword)}
                  aria-describedby={
                    errors.confirmPassword
                      ? "confirmPassword-error"
                      : undefined
                  }
                  className={inputClass("confirmPassword")}
                />

                {errors.confirmPassword && (
                  <p
                    id="confirmPassword-error"
                    className="mt-2 text-sm font-medium text-red-600"
                  >
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Additional Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-slate-800"
                >
                  Message / Additional Information{" "}
                  <span className="font-normal text-slate-400">
                    (Optional)
                  </span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Write any additional information..."
                  className="mt-2 block w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Success Message */}
            {successMessage && (
              <div
                className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
                role="status"
                aria-live="polite"
              >
                {successMessage}
              </div>
            )}

            {/* Submit */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? "Submitting..." : "Register Now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegistrationForm;