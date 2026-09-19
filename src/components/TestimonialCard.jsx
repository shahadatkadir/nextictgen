

function TestimonialCard({ testimonial }) {
  const {
    name = "Student",
    role,
    studentClass,
    course,
    message = "A great learning experience.",
    image,
    rating,
    location,
  } = testimonial || {};

  const displayRole = studentClass || role;

  const safeRating =
    typeof rating === "number" ? Math.min(5, Math.max(0, rating)) : 0;

  const filledStars = Math.round(safeRating);
  const emptyStars = 5 - filledStars;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 sm:p-7">
      {/* Quote */}
      <div className="flex-1">
        <div
          className="mb-5 text-4xl font-serif leading-none text-blue-100"
          aria-hidden="true"
        >
          “
        </div>

        <blockquote>
          <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {message}
          </p>
        </blockquote>
      </div>

      {/* Rating */}
      {rating !== undefined && rating !== null && (
        <div
          className="mt-6 flex items-center gap-2"
          aria-label={`Rating: ${safeRating} out of 5`}
        >
          <div
            className="flex items-center gap-0.5 text-lg"
            aria-hidden="true"
          >
            <span className="text-yellow-400">
              {"★".repeat(filledStars)}
            </span>

            <span className="text-slate-200">
              {"★".repeat(emptyStars)}
            </span>
          </div>

          <span className="text-sm font-semibold text-slate-500">
            {safeRating}/5
          </span>
        </div>
      )}

      {/* Student Information */}
      <div className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-5">
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-blue-50 sm:h-14 sm:w-14">
          {image ? (
            <img
              src={image}
              alt={`${name} profile`}
              className="h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center text-xl font-bold text-blue-600"
              role="img"
              aria-label={`${name} profile placeholder`}
            >
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-base font-bold text-slate-900 sm:text-lg">
            {name}
          </h3>

          {displayRole && (
            <p className="mt-0.5 text-sm font-medium text-blue-600">
              {displayRole}
            </p>
          )}

          {course && (
            <p className="mt-1 truncate text-xs text-slate-500">
              {course}
            </p>
          )}

          {location && (
            <p className="mt-1 truncate text-xs text-slate-400">
              {location}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export default TestimonialCard;