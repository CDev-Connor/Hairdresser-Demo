'use client';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServiceSection';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';
import ReviewsSection from '../components/ReviewSection';
import BookingSection from '../components/BookingSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import TeamSection from '../components/TeamSection';

export default function HairdresserWebsite() {
    return (
        <div className="min-h-screen bg-stone-50 text-stone-900">
            <Header/>

            <main>
                <HeroSection/>
                <TeamSection/>
                <ServicesSection/>
                <AboutSection/>
                <GallerySection/>
                <ReviewsSection/>
                <BookingSection/>
                <ContactSection/>
            </main>

            <Footer/>
        </div>
    );
}