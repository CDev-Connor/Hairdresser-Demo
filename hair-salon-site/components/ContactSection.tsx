import { Hurricane } from 'next/font/google';

const hurricane = Hurricane({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function ContactSection() {
    return (
        <section id="contact" className="bg-white">
            <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2 md:py-24">
                <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">Contact</p>
                    <h2 className={`${hurricane.className} mt-3 text-3xl md:text-4xl`}>Visit the salon</h2>
                    <div className="mt-8 space-y-5 text-base text-stone-700">
                        <div>
                            <p className="font-semibold text-stone-900">Phone</p>
                            <p>+49 123 456 7890</p>
                        </div>
                        <div>
                            <p className="font-semibold text-stone-900">Email</p>
                            <p>hello@luxehairstudio.com</p>
                        </div>
                        <div>
                            <p className="font-semibold text-stone-900">Address</p>
                            <p>Bahnstraße 12, 40699 Erkrath, Germany</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-[2rem] bg-[linear-gradient(135deg,#efe7df_0%,#d8c5b6_100%)] p-5 shadow-sm">
                    <div className="overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/30 backdrop-blur-sm">
                        <iframe
                            title="Google Maps location for Bahnstraße 12, 40699 Erkrath, Germany"
                            src="https://maps.google.com/maps?q=Bahnstra%C3%9Fe%2012%2C%2040699%20Erkrath%2C%20Germany&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            className="h-80 w-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}