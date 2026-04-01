import { Hurricane } from 'next/font/google';

const hurricane = Hurricane({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Header() {
    return (
        <header className="sticky top-0 z-50 px-4 py-6 bg-transparent">
            <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 rounded-full bg-[#c78c4f] px-6 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] -mt-4">

                {/* Logo / Name */}
                <a
                    href="#home"
                    className={`${hurricane.className} text-base md:text-3xl text-black drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]`}
                >
                    Luxe Hair Studio
                </a>

                {/* Navigation */}
                <nav className="hidden items-center gap-6 text-xs md:flex md:text-sm">
                    <a href="#services" className="text-white/80 transition hover:text-white">
                        Services
                    </a>
                    <a href="#about" className="text-white/80 transition hover:text-white">
                        About
                    </a>
                    <a href="#gallery" className="text-white/80 transition hover:text-white">
                        Gallery
                    </a>
                    <a href="#reviews" className="text-white/80 transition hover:text-white">
                        Reviews
                    </a>
                    <a href="#contact" className="text-white/80 transition hover:text-white">
                        Contact
                    </a>
                </nav>

                <a
                    href="#booking"
                    className="rounded-full bg-[#e7c9a5] px-5 py-2 text-xs font-medium text-[#5a3e2b] transition hover:bg-[#ddb98f] md:text-sm"
                >
                    Book Now
                </a>
            </div>
        </header>
    );
}