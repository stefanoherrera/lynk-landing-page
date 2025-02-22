import { PackageCheck, FileText, CheckSquare, ListChecks, FileBarChart } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Choose Your Room",
    description: "Select the type of study room you need based on availability and features.",
    icon: PackageCheck,
  },
  {
    number: "2",
    title: "Enter Details",
    description: "Provide your session details including date, time, and email to secure your booking.",
    icon: FileText,
  },
  {
    number: "3",
    title: "Confirm Booking",
    description: "Review your booking details and confirm to ensure everything is set as per your requirements.",
    icon: CheckSquare,
  },
  {
    number: "4",
    title: "Receive Confirmation",
    description: "Get instant confirmation of your booking through email with all necessary session information.",
    icon: ListChecks,
  },
  {
    number: "5",
    title: "Access Room",
    description: "Use the provided access code to enter the booked study room at the scheduled time.",
    icon: FileBarChart,
  },
];

const Process = () => {
  return (
    <div id="how-it-works" className="py-16 sm:py-24 lg:py-32 bg-background">
      {/* Changed from bg-white */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground dark:text-white">
            {/* Changed from text-gray-900 */}
            How It Works
          </h2>
        </div>
        <div className="mx-auto mt-12 sm:mt-16 lg:mt-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => (
              <div 
                key={step.number} 
                className="relative flex flex-col items-center text-center"
              >
                <div className="
                  mb-4 
                  sm:mb-6 
                  flex 
                  h-16 
                  w-16 
                  sm:h-20 
                  sm:w-20 
                  items-center 
                  justify-center 
                  rounded-full 
                  bg-primary 
                  text-white
                  shadow-lg
                  dark:shadow-primary/25
                ">
                  <step.icon className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground dark:text-white mb-2 sm:mb-3">
                  {/* Changed from text-gray-900 */}
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground max-w-[250px]">
                  {/* Changed from text-gray-600 */}
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
