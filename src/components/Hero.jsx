import React from 'react';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen pt-20 pb-32 overflow-hidden flex flex-col items-center justify-start text-center">

            {/* --- GLOWING BACKGROUND --- */}
            {/* Large purple blob behind text */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
            {/* Smaller secondary blob */}
            <div className="absolute top-40 left-[20%] w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

            {/* --- HERO CONTENT --- */}
            <div className="container mx-auto px-4 z-10 flex flex-col items-center">

                {/* 1. Tagline */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                    <span className="block text-white mb-2">Global Access.</span>
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Instant Connection.
                    </span>
                </h1>

                {/* 2. Subtext */}
                <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mb-12">
                    Experience premium stability with Nexitally Cloud.
                    Unlock the world with 84+ dedicated global nodes and zero-latency routing.
                </p>

                {/* 3. CTA Buttons (Optional, but looks nice before the image) */}
                <div className="flex gap-4 mb-20">
                    <a href="/trial" className="btn btn-primary rounded-full px-8 text-lg font-semibold shadow-lg shadow-primary/30">
                        Start Free Trial
                    </a>
                    <a href="/network" className="btn btn-ghost rounded-full px-8 text-lg border border-white/10 hover:bg-white/5">
                        View Network
                    </a>
                </div>

                {/* 4. THE SHOWCASE IMAGE */}
                {/* We use 'animate-float' for that living feel */}
                <div className="relative w-full max-w-5xl animate-float">
                    {/* A subtle reflection/shadow glow under the image */}
                    <div className="absolute -inset-1 bg-gradient-to-t from-primary/30 to-transparent blur-2xl opacity-40 -z-10 rounded-3xl"></div>

                    <img
                        src="/images/hero-devices.png"
                        alt="Nexitally Cloud Dashboard on Devices"
                        className="w-full h-auto drop-shadow-2xl"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;
