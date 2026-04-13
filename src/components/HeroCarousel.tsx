import { useState, useEffect, useCallback } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const slides = [
  { src: hero1, alt: "Students studying in a modern classroom" },
  { src: hero2, alt: "Students playing sports on school playground" },
  { src: hero3, alt: "Students conducting experiments in science laboratory" },
  { src: hero4, alt: "Students writing board examinations" },
  { src: hero5, alt: "Students celebrating exam results with joy" },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 400);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((current + 1) % slides.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [current, goToSlide]);

  return (
    <section className="relative overflow-hidden">
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.alt}
          width={1920}
          height={800}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            i === current && !isTransitioning ? "opacity-100" : "opacity-0"
          }`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
      <div className="hero-overlay absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold leading-tight text-primary-foreground sm:text-3xl md:text-4xl">
            CBSE Examination Results Portal 2026
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
            Check your Class 10th &amp; 12th Results securely and instantly
          </p>
        </div>
      </div>
      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-primary-foreground" : "w-2 bg-primary-foreground/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
