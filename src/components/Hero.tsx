import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LogoCarousel from "./LogoCarousel";

const universityLogos = [
  {
    src: "/lovable-uploads/a1477e42-6388-4b31-80ba-94735ffd442e.png",
    alt: "Harvard University logo"
  },
  {
    src: "/lovable-uploads/43bbcc7e-0a23-4407-8bd2-83ea63d091c7.png",
    alt: "Boston University logo"
  },
  {
    src: "/lovable-uploads/edb92b89-1db1-4cd1-a194-8d4b24ecffb5.png",
    alt: "NYU logo"
  },
  {
    src: "/lovable-uploads/0e19809c-e36a-433e-a65e-2ec33b7541f1.png",
    alt: "UCLA logo"
  },
  {
    src: "/lovable-uploads/0806218e-30bb-4834-be02-eedb7f4de7c3.png",
    alt: "Yale logo"
  },
  {
    src: "/lovable-uploads/fa03e75a-c272-4999-8723-083ad15027a3.png",
    alt: "Cornell logo"
  },
  {
    src: "/lovable-uploads/13d65e3c-df14-44cc-8c7b-e0397b1caa32.png",
    alt: "Cambridge logo"
  },
  {
    src: "/lovable-uploads/d99a5c67-e352-4348-aa15-c85ffdf40b9f.png",
    alt: "Yale Y logo"
  }
];

const Hero = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="relative overflow-hidden bg-background"> {/* Changed from bg-white */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-16 lg:pt-48 lg:pb-32">
        <div className="text-center">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground dark:text-white px-4 lg:px-6"> {/* Added dark:text-white */}
            Welcome to LYNK
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 drop-shadow-sm">
            Booking System
            </span>
            <span className="text-foreground dark:text-white"></span> {/* Changed from text-black */}
          </h1>
          <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto px-4 lg:px-6"> {/* Changed from text-gray-600 */}
            A new way of managing your spaces.
          </p>
          
          <div className="mt-8">
            <Button 
              onClick={scrollToPricing}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg rounded-full px-10 py-8 font-semibold"
              >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>

      <section aria-label="Trusted by student founders" className="bg-background -mt-4"> {/* Changed from bg-white */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-12">
          <p className="text-center text-lg font-medium text-muted-foreground mb-6"> {/* Changed from text-gray-600 */}
            Made by NJIT students
          </p>
        </div>
      </section>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Startup Launchpad",
          "description": "Directory listing service for startups to boost visibility and SEO",
          "provider": {
            "@type": "Organization",
            "name": "Startup Launchpad",
            "url": "https://startuplaunchpad.co",
            "logo": "/lovable-uploads/a716f794-33b0-43ce-8afd-d4f019db039b.png"
          },
          "serviceType": "Directory Listing Service",
          "areaServed": "Worldwide",
          "audience": {
            "@type": "Audience",
            "audienceType": "Startups, Tech Companies, SaaS Businesses"
          },
          "offers": {
            "@type": "Offer",
            "price": "299",
            "priceCurrency": "USD"
          }
        })}
      </script>
    </main>
  );
};

export default Hero;