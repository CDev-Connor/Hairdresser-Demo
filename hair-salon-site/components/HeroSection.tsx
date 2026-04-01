import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    display: 'swap',
});

export default function HeroSection() {
    return (
        <section
            id="home"
            className="relative overflow-hidden bg-[linear-gradient(180deg,#f3ede7_0%,#f8f4ef_55%,#f5f1eb_100%)]"
        >
            <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.55))]" />
            <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-white/60 blur-3xl" />
            <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-[#ead8ca]/55 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20 lg:min-h-[720px]">
                <div className="grid gap-10 lg:min-h-[620px] lg:grid-cols-2 lg:items-center">
                    {/* Image (left on desktop) */}
                    <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
                        <img
                            src="/Frau.png"
                            alt="Woman with long styled hair"
                            className="h-[420px] w-auto object-contain md:h-[520px] lg:h-[640px] xl:h-[700px]"
                        />
                    </div>

                    {/* Text (right on desktop) */}
                    <div className="order-1 max-w-xl lg:order-2 lg:max-w-none">
                        <p className="text-sm font-medium uppercase tracking-[0.28em] text-stone-500 md:text-base">
                            Modern salon experience
                        </p>

                        <h1 className={`${playfair.className} mt-6 text-5xl leading-[0.98] text-[#c78c6a] md:text-7xl`}>
                            Make every day a good hair day
                        </h1>

                        <p className="mt-6 text-lg font-medium uppercase tracking-[0.12em] text-stone-500 md:text-xl">
                            With tailored cuts, dimensional color and effortless styling
                        </p>

                        <p className="mt-6 max-w-xl text-base leading-8 text-stone-600 md:text-lg">
                            Luxe Hair Studio creates polished, wearable looks in a calm boutique setting — from soft blonding and balayage to precision cuts and occasion-ready styling.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="#booking"
                                className="min-w-[180px] rounded-lg bg-[#a77857] px-8 py-4 text-center text-sm font-medium uppercase tracking-[0.22em] text-white transition duration-300 hover:bg-[#956949]"
                            >
                                Book now
                            </a>
                            <a
                                href="#contact"
                                className="min-w-[180px] rounded-lg border border-[#a77857] bg-transparent px-8 py-4 text-center text-sm font-medium uppercase tracking-[0.22em] text-[#a77857] transition duration-300 hover:bg-[#a77857] hover:text-white"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}