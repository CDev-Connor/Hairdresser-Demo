import { Hurricane, Playfair_Display } from 'next/font/google';

const hurricane = Hurricane({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export default function AboutSection() {
    return (
        <section id="about" className="relative overflow-hidden bg-white">
            <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(231,221,212,0.28),rgba(255,255,255,0))]" />
            <div className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-stone-100 blur-3xl" />
            <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-[#efe3d8]/60 blur-3xl" />

            <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
                <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
                    <div className="space-y-6">
                        <div className="relative p-2 md:p-4">

                                <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">About the salon</p>
                                <h2 className={`${playfair.className} mt-5 max-w-none text-4xl leading-[1.05] text-stone-900 md:text-4xl`}>
                                    A <span className="text-[#c78c4f]"> premium salon</span> experience with warmth, confidence, and modern style.
                                </h2>
                                <p className="mt-6 max-w-2xl text-base leading-8 text-stone-700 md:text-lg">
                                    We combine thoughtful consultation, modern techniques, and a calm studio atmosphere to create results that feel polished, wearable, and completely tailored to you.
                                </p>

                        </div>

                        <div className="grid gap-4 sm:grid-cols-[1.2fr,0.8fr]">
                            <div
                                className="group relative overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_50px_rgba(28,25,23,0.08)] ring-1 ring-stone-200">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=80"
                                        alt="Salon interior"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/55 via-stone-950/10 to-transparent" />
                                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.24em] text-white/75">Studio feel</p>
                                            <p className={`${hurricane.className} mt-2 text-4xl leading-tight text-white md:text-5xl`}>
                                              Relaxed, elevated, and personal
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:pt-10">
                        <div className="group relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_18px_50px_rgba(28,25,23,0.08)] ring-1 ring-stone-200 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(28,25,23,0.12)]">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100 text-xl">✦</div>
                            <h3 className={`${playfair.className} text-xl text-stone-900`}>Consultation-first</h3>
                            <p className="mt-4 text-sm leading-7 text-stone-600">
                                We take time to understand your hair goals, maintenance routine, and preferences before we begin.
                            </p>
                        </div>

                        <div className="group relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_18px_50px_rgba(28,25,23,0.08)] ring-1 ring-stone-200 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(28,25,23,0.12)]">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100 text-xl">♡</div>
                            <h3 className={`${playfair.className} text-xl text-stone-900`}>Hair health focused</h3>
                            <p className="mt-4 text-sm leading-7 text-stone-600">
                                From gentle color services to professional aftercare advice, healthy hair always comes first.
                            </p>
                        </div>

                        <div className="group relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_18px_50px_rgba(28,25,23,0.08)] ring-1 ring-stone-200 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(28,25,23,0.12)]">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100 text-xl">✂</div>
                            <h3 className={`${playfair.className} text-xl text-stone-900`}>Modern techniques</h3>
                            <p className="mt-4 text-sm leading-7 text-stone-600">
                                Balayage, lived-in color, precision cutting, and occasion styling tailored to current trends and timeless looks.
                            </p>
                        </div>

                        <div className="group relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_18px_50px_rgba(28,25,23,0.08)] ring-1 ring-stone-200 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(28,25,23,0.12)]">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100 text-xl">☕</div>
                            <h3 className={`${playfair.className} text-xl text-stone-900`}>Warm atmosphere</h3>
                            <p className="mt-4 text-sm leading-7 text-stone-600">
                                A clean, welcoming space that feels relaxed from the moment you arrive to the final reveal.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}