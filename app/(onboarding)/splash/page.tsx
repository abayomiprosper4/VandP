"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, type TouchEvent } from "react";

const slides = [
  {
    id: "transformations",
    title: "From Trims to Transformations",
    description: "Step into a space where self-care meets style.",
    image: "/images/salon-ill.png",
    background:
      "linear-gradient(145deg, #72605b 0%, #251e27 58%, #120f18 100%)",
    accent: "#e3ae1b",
  },
  {
    id: "client-joy",
    title: "The joy on every client",
    description:
      "Never miss a gig and, more because your skill can solve a problem soonest.",
    image: "/images/salon-ill.png",
    background: "linear-gradient(110deg, #d0aaa4 0%, #633b3d 45%, #1c1015 80%)",
    accent: "#3297f3",
  },
  {
    id: "client-joy-studio",
    title: "The joy on every client",
    description:
      "Never miss a gig and, more because your skill can solve a problem soonest.",
    image: "/images/salon-ill.png",
    background:
      "linear-gradient(135deg, #312b2e 0%, #876c63 45%, #2b2023 46%, #765c52 70%, #2b2527 100%)",
    accent: "#e3ae1b",
  },
];

export default function SplashPage() {
  const router = useRouter();
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const goTo = (index: number) =>
    setActiveSlide(Math.max(0, Math.min(index, slides.length - 1)));
  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) =>
    setTouchStart(event.touches[0]?.clientX ?? null);
  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStart === null) return;
    const distance =
      (event.changedTouches[0]?.clientX ?? touchStart) - touchStart;
    if (Math.abs(distance) > 45) goTo(activeSlide + (distance < 0 ? 1 : -1));
    setTouchStart(null);
  };
  const handleContinue = () => {
    if (activeSlide === slides.length - 1) {
      router.push("/auth/sign-up/category");
      return;
    }

    goTo(activeSlide + 1);
  };
  const slide = slides[activeSlide];

  return (
    <main
      className="relative isolate min-h-svh overflow-hidden bg-[#211b20] text-white"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Glamour salon introduction"
    >
      <div
        className="pointer-events-none absolute inset-[7px] z-10 rounded-[11px] border-2 border-[#e3ae1b] sm:hidden"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        {slides.map((item, index) => {
          const distance = index - activeSlide;
          return (
            <div
              key={item.id}
              className={`absolute inset-0 overflow-hidden transition-opacity duration-700 ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
              style={{ background: item.background }}
            >
              <div
                className="absolute -inset-x-[12%] -inset-y-[8%] transition-transform duration-1000 ease-out"
                style={{
                  transform: `translateX(${distance * 7}%) scale(${index === activeSlide ? 1.05 : 1.12})`,
                }}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  priority={index === 0}
                  className="object-contain object-center opacity-90 saturate-[.85] sm:object-right lg:object-center"
                  sizes="120vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#0f080d]/10 via-[#0b070b]/25 to-[#0b070b]/90" />
            </div>
          );
        })}
      </div>

      <section className="mx-auto flex min-h-svh w-full max-w-[1440px] items-end px-5 pb-8 sm:px-10 sm:pb-12 lg:items-center lg:px-20 lg:pb-0">
        <div className="w-full max-w-xl lg:mb-4">
          <div
            className="border-l-2 pl-5 transition-all duration-700 sm:pl-7"
            style={{ borderColor: slide.accent }}
          >
            <p className="mb-3 text-[.65rem] font-semibold uppercase tracking-[.28em] text-white/65 sm:text-xs">
              Glamour personified
            </p>
            <h1 className="max-w-[500px] text-[clamp(2rem,6vw,4.8rem)] font-bold leading-[.95] tracking-[-.03em]">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-[390px] text-sm leading-relaxed text-white/80 sm:text-base lg:text-lg">
              {slide.description}
            </p>
          </div>

          <div
            className="mt-8 flex items-center gap-4 sm:mt-10"
            aria-label={`Slide ${activeSlide + 1} of ${slides.length}`}
          >
            <div className="flex gap-2">
              {slides.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === activeSlide ? "w-10" : "w-2 bg-white/60"}`}
                  style={
                    index === activeSlide
                      ? { backgroundColor: slide.accent }
                      : undefined
                  }
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === activeSlide}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
            <span className="text-xs font-mono tracking-[.2em] text-white/65">
              0{activeSlide + 1} / 0{slides.length}
            </span>
          </div>

          <button
            className="mt-8 h-12 w-full max-w-[280px] rounded-[5px] border-0 bg-[#3297f3] text-sm font-medium text-[#06172a] transition-colors hover:bg-[#56a9f5] sm:mt-10 sm:h-14"
            type="button"
            onClick={handleContinue}
          >
            {activeSlide === slides.length - 1 ? "Get started" : "Continue"}
          </button>
        </div>
      </section>
    </main>
  );
}
