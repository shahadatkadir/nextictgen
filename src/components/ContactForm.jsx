import { useState } from "react";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function ContactForm() {
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

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please enter your message.";
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
      setSuccessMessage(
        "Your message has been received successfully. Thank you for contacting us."
      );
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
      className="min-h-screen bg-[#b1fcff] bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px),radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.18),transparent_45%)] bg-[size:36px_36px,36px_36px,100%_100%] bg-fixed py-16 sm:py-20 lg:py-24"
      aria-labelledby="contact-form-title"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {/* Header */}
          <div className="border-b border-slate-100 px-6 py-8 sm:px-8 sm:py-10">
            <h2
              id="contact-form-title"
              className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl"
            >
              Get in Touch
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Have a question about our courses or learning programs? Send us
              a message and we will get back to you.
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
                  htmlFor="contact-fullName"
                  className="text-sm font-semibold text-slate-800"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>

                <input
                  id="contact-fullName"
                  name="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={
                    errors.fullName ? "contact-fullName-error" : undefined
                  }
                  className={inputClass("fullName")}
                />

                {errors.fullName && (
                  <p
                    id="contact-fullName-error"
                    className="mt-2 text-sm font-medium text-red-600"
                  >
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="text-sm font-semibold text-slate-800"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? "contact-email-error" : undefined
                  }
                  className={inputClass("email")}
                />

                {errors.email && (
                  <p
                    id="contact-email-error"
                    className="mt-2 text-sm font-medium text-red-600"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="contact-phone"
                  className="text-sm font-semibold text-slate-800"
                >
                  Phone Number{" "}
                  <span className="font-normal text-slate-400">
                    (Optional)
                  </span>
                </label>

                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="01XXXXXXXXX"
                  autoComplete="tel"
                  className={inputClass("phone")}
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="text-sm font-semibold text-slate-800"
                >
                  Subject <span className="text-red-500">*</span>
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Enter your subject"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={
                    errors.subject ? "contact-subject-error" : undefined
                  }
                  className={inputClass("subject")}
                />

                {errors.subject && (
                  <p
                    id="contact-subject-error"
                    className="mt-2 text-sm font-medium text-red-600"
                  >
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-semibold text-slate-800"
                >
                  Message <span className="text-red-500">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Write your message here..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "contact-message-error" : undefined
                  }
                  className={`${inputClass(
                    "message"
                  )} resize-y`}
                />

                {errors.message && (
                  <p
                    id="contact-message-error"
                    className="mt-2 text-sm font-medium text-red-600"
                  >
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            {/* Success Message */}
            {successMessage && (
              <div
                className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium leading-6 text-green-700"
                role="status"
                aria-live="polite"
              >
                {successMessage}
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;