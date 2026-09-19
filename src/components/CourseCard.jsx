
function CourseCard({ course }) {
  const {
    title = "Course",
    category = "Course",
    description = "Complete learning program for students.",
    price = 0,
    oldPrice,
    duration = "Flexible",
    lessons = 0,
    image,
    popular = false,
  } = course || {};

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
      {/* Course Image */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100 sm:h-56">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-slate-100"
            role="img"
            aria-label={`${title} course image placeholder`}
          >
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                📚
              </div>
              <p className="mt-3 text-sm font-medium text-slate-500">
                Course Image
              </p>
            </div>
          </div>
        )}

        {/* Popular Badge */}
        {popular && (
          <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-blue-600 px-3 py-1.5 text-xs font-bold text-white shadow-sm">
            Popular
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Category */}
        <div>
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-600">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-xl font-bold leading-snug text-slate-900">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
          {description}
        </p>

        {/* Course Information */}
        <div className="mt-5 grid grid-cols-2 gap-3 border-y border-slate-100 py-4">
          {/* Duration */}
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50"
              aria-hidden="true"
            >
              ⏱
            </span>

            <div className="min-w-0">
              <p className="text-xs text-slate-400">Duration</p>
              <p className="truncate font-semibold text-slate-700">
                {duration}
              </p>
            </div>
          </div>

          {/* Lessons */}
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50"
              aria-hidden="true"
            >
              📚
            </span>

            <div className="min-w-0">
              <p className="text-xs text-slate-400">Lessons</p>
              <p className="truncate font-semibold text-slate-700">
                {lessons}
              </p>
            </div>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="mt-auto pt-5">
          <div className="flex items-end justify-between gap-4">
            {/* Pricing */}
            <div>
              <p className="text-2xl font-extrabold tracking-tight text-blue-600">
                ৳{price}
              </p>

              {oldPrice !== undefined &&
                oldPrice !== null &&
                oldPrice !== "" && (
                  <p className="mt-1 text-sm text-slate-400 line-through">
                    ৳{oldPrice}
                  </p>
                )}
            </div>

            {/* Enroll Button */}
            <a
              href="#register"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;
