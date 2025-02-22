import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter List",
    description: "Ideal for New Startups",
    price: "79",
    features: [
      "15 directory submissions",
      "1 week of support",
      "Medium Domain Authority directories",
      "Submission report with screenshots",
      "Quick submission to Google"
    ],
    url: "https://buy.stripe.com/aEUbMJ1x41Xi5gYfYY"
  },
  {
    name: "Pro Plan",
    description: "Perfect for Growing Startups",
    price: "199",
    popular: true,
    features: [
      "50 directory submissions",
      "2 weeks of priority support",
      "High Domain Authority directories",
      "Detailed submission report with screenshots",
      "Priority submission to Google",
      "Best value for increased online visibility"
    ],
    url: "https://buy.stripe.com/aEU8AxfnU6dybFm5kn"
  },
  {
    name: "Enterprise Plan",
    description: "Full Coverage for Established Businesses",
    price: "499",
    features: [
      "100 premium directory submissions",
      "4 weeks of dedicated support",
      "Highest Domain Authority directories",
      "Comprehensive submission report with screenshots",
      "Priority submission to Google",
      "Dedicated account manager for personalized assistance"
    ],
    url: "https://buy.stripe.com/6oEdUR5NkeK47p6cMQ"
  }
];

const Pricing = () => {
  return (
    <div id="pricing" className="bg-accent py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Choose Your Package
          </h2>
          <p className="mt-8 text-lg leading-8 text-gray-600">
            Select the perfect plan for your startup's growth
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-xl bg-white p-8 shadow-xl ring-1 ring-gray-200 xl:p-10 ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 right-8 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                  Most Popular
                </div>
              )}
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{plan.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">${plan.price}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">one-time</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a href={plan.url} target="_blank" rel="noopener noreferrer" className="mt-8 w-full">
                <Button 
                  className="w-full py-6 text-lg bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all duration-300"
                >
                  Get Listed
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;