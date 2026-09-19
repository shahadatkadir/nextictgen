function SectionTitle({
badge = "",
title = "",
description = "",
}) {
return ( <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
{/* Badge */}
{badge && ( <div className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-300 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 sm:text-sm"> <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
{badge} </div>
)}

  {/* Main Heading */}
  {title && (
    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
      {title}
    </h2>
  )}

  {/* Description */}
  {description && (
    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-7 lg:text-lg">
      {description}
    </p>
  )}
</div>

);
}

export default SectionTitle;
