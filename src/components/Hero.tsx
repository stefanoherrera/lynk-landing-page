import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LogoCarousel from "./LogoCarousel";

const directoryLogos = [
  {
    src: "/lovable-uploads/8b91ac2c-6c6e-4fea-8f5d-04b2fe58234d.png",
    alt: "AppSumo logo"
  },
  {
    src: "/lovable-uploads/bf9f261f-e42d-4774-989e-7b8660284b2c.png",
    alt: "AngelList logo",
    className: "h-[35px] md:h-[50px]"
  },
  {
    src: "/lovable-uploads/570afd4f-6e43-46e4-b881-9825716dbcb6.png",
    alt: "Product Hunt logo"
  },
  {
    src: "/lovable-uploads/4de6c93c-052c-40ad-81c8-6d85657e0bc0.png",
    alt: "Devpost logo",
    className: "h-[35px] md:h-[50px]"
  },
  {
    src: "/lovable-uploads/ea51c39e-0a29-4be7-9b12-9fa7bed131d3.png",
    alt: "GoodFirms logo"
  }
];

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
    <main className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-16 lg:pt-48 lg:pb-32">
        <div className="text-center">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 px-4 lg:px-6">
            Welcome to LYNK
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Booking System
            </span>
            <span className="text-black"></span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto px-4 lg:px-6">
            A new way of managing your your spaces.
          </p>
          
          <div className="mt-8">
            <Button 
              onClick={scrollToPricing}
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 text-lg rounded-full px-10 py-8"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </div>

          <div className="mt-16">
            <div className="flex flex-wrap justify-center items-center gap-8 px-4">
              {directoryLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className={`h-8 sm:h-10 w-auto object-contain ${logo.className || ""}`}
                  loading="lazy"
                  width="200"
                  height="80"
                />
              ))}
              <span className="text-lg font-medium text-gray-600">+250 more</span>
            </div>
          </div>
        </div>
      </div>

      <section aria-label="Trusted by student founders" className="bg-white -mt-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-12">
          <p className="text-center text-lg font-medium text-gray-600 mb-6">
            Used by student founders from
          </p>
          <LogoCarousel 
            logos={universityLogos} 
            title="University logos"
          />
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