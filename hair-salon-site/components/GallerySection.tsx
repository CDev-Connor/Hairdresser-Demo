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

const gallery = [
    { title: 'Soft balayage glow', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9' },
    { title: 'Precision bob cut', image: 'https://images.unsplash.com/photo-1523263685509-57c1d050d19b' },
    { title: 'Glossy brunette color', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e' },
    { title: 'Bridal styling look', image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38' },
    { title: 'Fresh men’s fade', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1' },
    { title: 'Blonde transformation', image: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4' },
];

export default function GallerySection() {
    return (
        <section id="gallery" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">Gallery</p>
                    <h2 className={`${playfair.className} mt-3 text-3xl md:text-4xl`}>Recent <span className="text-[#c78c4f]">looks </span> and signature
                        <span className="text-[#c78c4f]"> finishes </span>
                    </h2>
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {gallery.map((item, index) => (
                    <div key={item.title} className="group relative overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-stone-200">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent opacity-80 transition duration-300 group-hover:opacity-100" />
                            <div className="absolute bottom-5 left-5 right-5">
                                <p className="text-xs uppercase tracking-[0.28em] text-white/80 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
                                    Look {index + 1}
                                </p>
                                <p className={`${hurricane.className} mt-2 text-3xl leading-none text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.45)] md:text-4xl`}>
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}