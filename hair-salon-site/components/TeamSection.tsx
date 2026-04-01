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

const teamMembers = [
    {
        name: 'Sophia',
        role: 'Senior Stylist & Color Expert',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
        description:
            'Specialized in dimensional color, balayage, and effortlessly polished finishes.',
    },
    {
        name: 'Emma',
        role: 'Cut & Styling Specialist',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80',
        description:
            'Focused on modern cuts, soft layers, and styling that feels elegant and wearable.',
    },
    {
        name: 'Daniel',
        role: 'Men’s Grooming & Precision Cuts',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
        description:
            'Known for clean shapes, detail-driven work, and a relaxed client experience.',
    },
];

export default function TeamSection() {
    return (
        <section id="team" className="relative overflow-hidden bg-stone-50 py-20 md:py-28">
            <div className="absolute inset-x-0 top-10 h-[88%] -skew-y-3 bg-[linear-gradient(135deg,#f3ebe4_0%,#efe3d8_55%,#f8f4ef_100%)]" />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-4xl text-center text-stone-900">
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-stone-600">
                        Meet the team
                    </p>
                    <h2 className={`${playfair.className} mt-4 text-4xl md:text-5xl`}>
                        The people behind your salon experience
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#c78c4f]" />
                    <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-stone-600 md:text-base">
                        A warm, talented team with a shared focus on beautiful results, personal care,
                        and a calm, elevated atmosphere from consultation to final styling.
                    </p>
                </div>

                <div className="mt-14 grid gap-8 md:grid-cols-3">
                    {teamMembers.map((member) => (
                        <div
                            key={member.name}
                            className="group overflow-hidden rounded-xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_60px_rgba(0,0,0,0.28)]"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                            </div>

                            <div className="bg-white px-6 py-5">
                                <h3 className={`${playfair.className} text-3xl leading-none text-stone-900`}>
                                    {member.name}
                                </h3>
                                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-stone-500">
                                    {member.role}
                                </p>
                                <p className="mt-4 text-sm leading-7 text-stone-600">
                                    {member.description}
                                </p>
                                <p className={`${hurricane.className} mt-5 text-3xl text-stone-400`}>
                                    Stylist
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}