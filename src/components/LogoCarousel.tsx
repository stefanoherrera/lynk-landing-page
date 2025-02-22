import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef } from "react";

interface Logo {
  src: string;
  alt: string;
  className?: string;
}

interface LogoCarouselProps {
  logos: Logo[];
  title: string;
}

const LogoCarousel = ({ logos, title }: LogoCarouselProps) => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section aria-label={title} className="w-full py-8">
      <h2 className="sr-only">{title}</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full max-w-5xl mx-auto px-4"
      >
        <CarouselContent>
          {logos.map((logo, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
              <div className="flex items-center justify-center p-4">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`h-16 md:h-20 w-auto object-contain ${logo.className || ""}`}
                  loading="lazy"
                  width="200"
                  height="80"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default LogoCarousel;