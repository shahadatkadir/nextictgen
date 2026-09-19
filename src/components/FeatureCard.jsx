function FeatureCard({ icon, title, description }) {
return ( <article className="group h-full rounded-2xl border border-slate-200 bg-[#b925c6] bg-[linear-gradient(rgba(59,130,246,0.08)_2px,transparent_2px),linear-gradient(90deg,rgba(59,130,246,0.27)_1px,transparent_2px),radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.28),transparent_45%)] bg-[size:36px_36px,36px_36px,100%_100%] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60 sm:p-7">
{/* Icon */} <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white"> <span aria-hidden="true">{icon}</span> </div>

  {/* Content */}
  <div>
    <h3 className="text-lg font-bold text-slate-100 sm:text-xl">
      {title}
    </h3>

    <p className="mt-3 text-sm leading-6 text-slate-200 sm:text-base sm:leading-7">
      {description}
    </p>
  </div>
</article>

);
}

export default FeatureCard;
