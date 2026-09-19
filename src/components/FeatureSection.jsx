
import SectionTitle from "./SectionTitle";
import FeatureCard from "./FeatureCard";
import featuresData from "./data/featuresData";

function FeatureSection() {
  return (
    <section
      id="features"
      className=" py-16 sm:py-20 lg:py-24 min-h-screen bg-[#b1ffdb] bg-[linear-gradient(rgba(59,130,246,0.08)_2px,transparent_2px),linear-gradient(90deg,rgba(59,130,246,0.27)_1px,transparent_2px),radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.28),transparent_45%)] bg-[size:36px_36px,36px_36px,100%_100%] "
      aria-labelledby="features-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Why Choose Next ICT Gen?"
          subtitle="Learn with experienced teachers, structured classes, quality study materials, regular practice, and continuous academic support."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;

{/* <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {featuresData.map((feature) => (
      <FeatureCard
        key={feature.id}
        icon={feature.icon}
        title={feature.title}
        description={feature.description}
      />
    ))}
  </div>
</div> */}
