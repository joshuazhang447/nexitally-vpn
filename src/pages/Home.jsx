import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Bypass from '../components/Bypass';
import Pricing from '../components/Pricing';
import Download from '../components/Download';
import Business from '../components/Business';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-base-100 text-base-content">
                <Hero />
                <Features />
                <Bypass />
                <Pricing />
                <Download />
                <Business />
                <Footer />
            </main>
        </>
    );
};

export default Home;
