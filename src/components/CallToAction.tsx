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
          <h2 className="text-3xl font-bold tracking-tight text-foreground dark:text-white sm:text-4xl">
            {/* Changed from text-gray-900 */}
            Do not wait
            <br />
            Create your spaces now
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {/* Changed from text-gray-600 */}
            Get listed now and we'll let you know when you can start!
          </p>
          <div className="mt-10 flex items-center justify-center">
            <Button 
              onClick={scrollToPricing}
              size="lg" 
              className="
                bg-primary 
                hover:bg-primary/90 
                text-white 
                shadow-lg 
                hover:shadow-xl 
                transition-all 
                duration-300 
                text-lg 
                rounded-full 
                px-10 
                py-8 
                font-semibold
                dark:shadow-primary/25
              "
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
