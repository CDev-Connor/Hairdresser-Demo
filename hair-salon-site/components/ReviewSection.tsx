'use client';

import { useState } from 'react';
import { Playfair_Display, Hurricane } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const hurricane = Hurricane({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const testimonials = [
  {
    name: 'Sophie K.',
    role: 'Balayage Client',
    text: 'Beautiful results, warm atmosphere, and the easiest salon booking experience I’ve had.',
    accent: 'bg-[#c78c4f] text-white',
  },
  {
    name: 'Mina R.',
    role: 'Color Correction Client',
    text: 'I came in for color correction and left feeling amazing. Highly recommend for blonding and balayage.',
    accent: 'bg-[#c78c4f] text-white',
  },
  {
    name: 'Daniel T.',
    role: 'Precision Cut Client',
    text: 'Clean, stylish salon and consistently great cuts. Fast, professional, and friendly.',
    accent: 'bg-[#c78c4f] text-white',
  },
  {
    name: 'Laura M.',
    role: 'Styling Client',
    text: 'I loved how relaxed and professional everything felt. My cut and styling turned out even better than I hoped.',
    accent: 'bg-[#c78c4f] text-white',
  },
  {
    name: 'Emma S.',
    role: 'Lived-In Color Client',
    text: 'The consultation was thoughtful, the color was beautifully blended, and the whole appointment felt truly personal.',
    accent: 'bg-[#c78c4f] text-white',
  },
  {
    name: 'Jonas W.',
    role: 'Men’s Grooming Client',
    text: 'Great atmosphere, very friendly team, and one of the best haircuts I have had in a long time.',
    accent: 'bg-[#c78c4f] text-white',
  },
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleTestimonials = 3;

  const showPreviousTestimonials = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - visibleTestimonials : prev - 1
    );
  };

  const showNextTestimonials = () => {
    setCurrentIndex((prev) =>
      prev >= testimonials.length - visibleTestimonials ? 0 : prev + 1
    );
  };

  return (
    <section id="reviews" className="bg-[#f4eadf]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
            Client feedback
          </p>
          <h2 className={`${playfair.className} mt-3 text-4xl text-stone-900 md:text-5xl`}>
            Love, trust <span className="text-[#c78c4f]">& testimonials</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-stone-600 md:text-base">
            Real words from clients who loved the calm atmosphere, beautiful results, and the care behind every appointment.
          </p>
        </div>

        <div className="mt-12 flex items-center justify-between gap-4 md:hidden">
          <button
            type="button"
            aria-label="Show previous testimonials"
            onClick={showPreviousTestimonials}
            className="cursor-pointer px-2 py-1 text-3xl font-light text-stone-400 transition duration-200 hover:scale-110 hover:text-stone-900"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Show next testimonials"
            onClick={showNextTestimonials}
            className="cursor-pointer px-2 py-1 text-3xl font-light text-stone-400 transition duration-200 hover:scale-110 hover:text-stone-900"
          >
            →
          </button>
        </div>

        <div className="relative mt-12 grid gap-8 md:grid-cols-3">
          <button
            type="button"
            aria-label="Show previous testimonials"
            onClick={showPreviousTestimonials}
            className="absolute -left-16 top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer text-5xl font-light text-stone-300 transition duration-200 hover:scale-110 hover:text-stone-900 md:block"
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Show next testimonials"
            onClick={showNextTestimonials}
            className="absolute -right-16 top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer text-5xl font-light text-stone-300 transition duration-200 hover:scale-110 hover:text-stone-900 md:block"
          >
            ›
          </button>

          {Array.from({ length: visibleTestimonials }).map((_, index) => {
            const item = testimonials[(currentIndex + index) % testimonials.length];

            return (
              <div
                key={`${item.name}-${currentIndex}-${index}`}
                className="group relative rounded-[2rem] bg-white px-6 pb-8 pt-10 shadow-[0_20px_50px_rgba(120,113,108,0.12)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(120,113,108,0.18)]"
              >
                <div className="absolute left-6 top-6 flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl text-white shadow-md ${item.accent}`}>
                    “
                  </div>
                </div>

                <div className="rounded-[1.75rem] bg-[#fffdf9] p-6 pt-14 shadow-[0_10px_30px_rgba(120,113,108,0.10)] ring-1 ring-stone-200/70">
                  <h3 className={`${playfair.className} text-2xl text-stone-900`}>
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-stone-500">
                    {item.role}
                  </p>

                  <div className="mt-4 flex items-center gap-1 text-[#d99a3e]">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-stone-600">
                    {item.text}
                  </p>

                  <p className={`${hurricane.className} mt-6 text-3xl text-stone-300`}>
                    review
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {Array.from({ length: testimonials.length - visibleTestimonials + 1 }).map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={index}
                type="button"
                aria-label={`Show testimonial set ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-200 ${
                  isActive ? 'w-8 bg-stone-500' : 'w-3 bg-stone-300 hover:bg-stone-400'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}