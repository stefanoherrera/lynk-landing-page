import { TrendingUp, Users, Award, CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Build SEO Authority",
    description: "Get featured on high domain authority directories and boost your search engine rankings",
    icon: TrendingUp,
  },
  {
    title: "Attract Users & Investors",
    description: "Increase visibility where your target audience and potential investors are actively searching",
    icon: Users,
  },
  {
    title: "Own Your Listing Forever",
    description: "Secure permanent listings across all directories with lifetime visibility",
    icon: Award,
  },
  {
    title: "Manually Done by Experts",
    description: "Save 50+ hours with our expert manual submissions to premium directories",
    icon: CheckCircle,
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="bg-accent py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Why It Matters?
          </h2>
        </div>
        <div className="mx-auto mt-12 sm:mt-16 lg:mt-24">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-primary/10">
                  <benefit.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary" aria-hidden="true" />
                </div>
                <dt className="text-lg sm:text-xl font-semibold leading-7 text-gray-900 mb-3">
                  {benefit.title}
                </dt>
                <dd className="flex flex-auto flex-col text-sm sm:text-base leading-7 text-gray-600">
                  <p className="flex-auto">{benefit.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Benefits;