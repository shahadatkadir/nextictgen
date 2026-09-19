
function TeacherCard({ teacher }) {
  const {
    name = "Teacher",
    subject = "Subject",
    designation = "Instructor",
    bio = "",
    image,
    experience,
    specialization,
  } = teacher || {};

  return (
    <article className="group h-140 flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
      {/* Teacher Image */}
      <div className="relative h-72 w-full overflow-hidden bg-slate-100 sm:h-80">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-slate-100"
            role="img"
            aria-label={`${name} profile image placeholder`}
          >
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl shadow-sm">
                👨‍🏫
              </div>

              <p className="mt-3 text-sm font-medium text-slate-500">
                Teacher Image
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Teacher Information */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Subject */}
        <div>
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-600">
            {subject}
          </span>
        </div>

        {/* Name */}
        <h3 className="mt-4 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
          {name}
        </h3>

        {/* Designation */}
        <p className="mt-1 text-sm font-semibold text-blue-600">
          {designation}
        </p>

        {/* Bio */}
        {bio && (
          <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
            {bio}
          </p>
        )}

        {/* Additional Information */}
        {(experience || specialization) && (
          <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
            {experience && (
              <div className="flex items-start gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-base"
                  aria-hidden="true"
                >
                  🏆
                </span>

                <div className="min-w-0">
                  <p className="text-xs font-medium text-slate-400">
                    Experience
                  </p>
                  <p className="text-sm font-semibold text-slate-700">
                    {experience}
                  </p>
                </div>
              </div>
            )}

            {specialization && (
              <div className="flex items-start gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-base"
                  aria-hidden="true"
                >
                  🎯
                </span>

                <div className="min-w-0">
                  <p className="text-xs font-medium text-slate-400">
                    Specialization
                  </p>
                  <p className="text-sm font-semibold text-slate-700">
                    {specialization}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default TeacherCard;
