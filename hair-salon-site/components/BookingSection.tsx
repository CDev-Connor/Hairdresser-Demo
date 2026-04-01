import { Ms_Madi, Hurricane, Playfair_Display } from 'next/font/google';

const msMadi = Ms_Madi({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

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

export default function BookingSection() {
    return (
        <section id="booking" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#120f0d_0%,#1f1a17_45%,#2c211c_100%)] p-8 text-white shadow-xl shadow-stone-300 md:p-10">
                <div className="absolute inset-0 opacity-30">
                    <img
                        src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1600&q=80"
                        alt="Salon interior background"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-stone-950/70" />
                </div>

                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-200/10 blur-3xl" />
                <div className="absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

                <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-300">Book online</p>
                        <h2 className={`${msMadi.className} mt-3 max-w-xl text-3xl leading-tight md:text-5xl`}>
                            Ready for your next appointment?
                        </h2>
                        <p className="mt-5 max-w-xl text-base leading-7 text-stone-200">
                            Reserve your salon visit in just a few clicks. Choose your service, pick a time that suits you, and enjoy a premium hair experience from the moment you arrive.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="mailto:hello@luxehairstudio.com"
                                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-900 transition hover:-translate-y-0.5 hover:shadow-lg"
                            >
                                Email to Book
                            </a>
                            <a
                                href="tel:+491234567890"
                                className="rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
                            >
                                Call the Salon
                            </a>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-3">
                            <div className="rounded-[1.5rem] bg-white/10 p-4 ring-1 ring-white/10 backdrop-blur-sm">
                                <p className="text-sm font-medium text-stone-200">Easy booking</p>
                                <p className="mt-2 text-sm leading-6 text-stone-300">Fast and simple appointment requests.</p>
                            </div>
                            <div className="rounded-[1.5rem] bg-white/10 p-4 ring-1 ring-white/10 backdrop-blur-sm">
                                <p className="text-sm font-medium text-stone-200">Personal care</p>
                                <p className="mt-2 text-sm leading-6 text-stone-300">Every visit begins with your goals in mind.</p>
                            </div>
                            <div className="rounded-[1.5rem] bg-white/10 p-4 ring-1 ring-white/10 backdrop-blur-sm">
                                <p className="text-sm font-medium text-stone-200">Salon quality</p>
                                <p className="mt-2 text-sm leading-6 text-stone-300">A polished, relaxing beauty experience.</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[2rem] bg-white/95 p-6 text-stone-900 shadow-2xl ring-1 ring-white/60 backdrop-blur md:p-7">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h3 className={`${playfair.className} text-3xl`}>Booking details</h3>
                                <p className="mt-2 text-sm leading-6 text-stone-600">
                                    Plan your visit and find all the essentials at a glance.
                                </p>
                            </div>
                            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                New clients welcome
              </span>
                        </div>

                        <div className="mt-8 space-y-5">
                            <div className="rounded-[1.5rem] bg-stone-50 p-4 ring-1 ring-stone-200">
                                <p className="text-sm font-medium text-stone-500">Opening hours</p>
                                <p className="mt-2 text-lg font-semibold text-stone-900">Tuesday – Saturday</p>
                                <p className="text-sm text-stone-600">09:00 – 18:00</p>
                            </div>

                            <div className="rounded-[1.5rem] bg-stone-50 p-4 ring-1 ring-stone-200">
                                <p className="text-sm font-medium text-stone-500">Address</p>
                                <p className="mt-2 text-base font-semibold text-stone-900">Bahnstraße 12</p>
                                <p className="text-sm text-stone-600">40699 Erkrath, Germany</p>
                            </div>

                            <div className="rounded-[1.5rem] bg-stone-50 p-4 ring-1 ring-stone-200">
                                <p className="text-sm font-medium text-stone-500">New client note</p>
                                <p className="mt-2 text-sm leading-6 text-stone-600">
                                    Please arrive 5 minutes early so we can begin your consultation in a calm and relaxed way.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}