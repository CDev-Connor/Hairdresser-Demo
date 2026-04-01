import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});
const services = [
    {
        name: 'Women’s Cut & Style',
        time: '60 min',
        image: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=900&q=80',
        description: 'Tailored cutting, shaping, and finishing for an effortless everyday look.',
    },
    {
        name: 'Men’s Haircut',
        time: '35 min',
        image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80',
        description: 'Clean, modern cuts with attention to detail and easy maintenance.',
    },
    {
        name: 'Blow Dry & Styling',
        time: '45 min',
        image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80',
        description: 'Polished volume, smooth finish, and styling that lasts through the day.',
    },
    {
        name: 'Root Touch-Up',
        time: '90 min',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
        description: 'Refresh regrowth and keep your color looking seamless between visits.',
    },
    {
        name: 'Full Color',
        time: '120 min',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
        description: 'Rich, even color application designed to match your tone and style.',
    },
    {
        name: 'Balayage',
        time: '180 min',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
        description: 'Soft, dimensional lightness for a natural and beautifully blended finish.',
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">Services</p>
                    <h2 className={`${playfair.className} mt-3 text-3xl md:text-4xl`}>
                        <span className="text-[#c78c4f]">Cut, color,</span> and <span className="text-[#c78c4f]">styling </span>
                        designed around
                        you
                    </h2>
                </div>
                <p className="max-w-xl text-sm leading-6 text-stone-600 md:text-base">
                    Explore our signature services and browse a more visual, interactive overview of what each appointment includes.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {services.map((service) => (
                    <div
                        key={service.name}
                        className="group overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#f8f4ef_0%,#f1e7de_100%)] shadow-sm ring-1 ring-stone-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.name}
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#a77857]/80 via-[#a77857]/20 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                                <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                            </div>
                        </div>

                        <div className="p-6">
                            <p className="text-sm leading-6 text-stone-600">{service.description}</p>

                            <div className="mt-6 flex items-center justify-between gap-4">
                                <a
                                    href="#booking"
                                    className="inline-flex items-center rounded-full bg-[#a77857] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#956949]"
                                >
                                    Book now
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}