import { PackageCheck, FileText, CheckSquare, ListChecks, FileBarChart } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Select a Package",
    description: "Choose the plan that fits your startup's goals",
    icon: PackageCheck,
  },
  {
    number: "2",
    title: "Tell us Your Startup",
    description: "Fill out a quick form with your company or product info",
    icon: FileText,
  },
  {
    number: "3",
    title: "Review Your Info",
    description: "We carefully review and fill in any gaps for a complete profile",
    icon: CheckSquare,
  },
  {
    number: "4",
    title: "Submission",
    description: "Our team creates business profiles and submits your startup to directories",
    icon: ListChecks,
  },
  {
    number: "5",
    title: "Get Your Report",
    description: "Receive a detailed report showing exactly where your startup is featured",
    icon: FileBarChart,
  },
];

const Process = () => {
  return (
    <div id="how-it-works" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            How It Works
          </h2>
        </div>
        <div className="mx-auto mt-12 sm:mt-16 lg:mt-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div className="mb-4 sm:mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-primary text-white">
                  <step.icon className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 max-w-[250px]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;