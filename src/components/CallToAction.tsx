import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-accent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Don't wait for customers to find you
            <br />
            be where they are
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get listed now and put your startup on the map!
          </p>
          <div className="mt-10 flex items-center justify-center">
            <Button 
              onClick={scrollToPricing}
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 text-lg rounded-full px-10 py-8"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;