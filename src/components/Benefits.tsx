import { TrendingUp, Users, Award, CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Easy Booking",
    description: "Smooth interface for hassle-free booking.",
    icon: TrendingUp,
  },
  {
    title: "Manage Resources",
    description: "Real-time updates and efficient scheduling.",
    icon: Users,
  },
  {
    title: "Secure System",
    description: "Robust security to protect user data.",
    icon: Award,
  },
  {
    title: "Custom Settings",
    description: "Adjustable to meet your institution's needs.",
    icon: CheckCircle,
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="bg-accent py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground dark:text-white">
            {/* Changed from text-gray-900 */}
            Why It Matters?
          </h2>
        </div>
        <div className="mx-auto mt-12 sm:mt-16 lg:mt-24">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                  <benefit.icon 
                    className="h-8 w-8 sm:h-10 sm:w-10 text-primary" 
                    aria-hidden="true" 
                  />
                </div>
                <dt className="text-lg sm:text-xl font-semibold leading-7 text-foreground dark:text-white mb-3">
                  {/* Changed from text-gray-900 */}
                  {benefit.title}
                </dt>
                <dd className="flex flex-auto flex-col text-sm sm:text-base leading-7 text-muted-foreground">
                  {/* Changed from text-gray-600 */}
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
