import React from 'react';

const Features = () => {
    const features = [
        {
            title: "Private Enterprise Circuits",
            desc: "Premium IEPL/IPLC routing built for consistency—clean paths, predictable throughput, and fewer congestion spikes when public networks get noisy.",
            iconColor: "text-blue-400",
            // Changed to neutral for smoother look
            bgColor: "bg-base-100",
            icon: <img src="images/server.svg" alt="Server" className="h-12 w-12" aria-hidden="true" />,
        },
        {
            title: "Stealth Protocol Matrix",
            desc: "Modern protocols (V2Ray & Shadowsocks) with traffic obfuscation to help connections stay reliable on restrictive networks—while keeping your browsing feeling normal.",
            iconColor: "text-blue-400",
            bgColor: "bg-base-100",
            icon: <img src="images/gear.svg" alt="Gear" className="h-12 w-12 pl-1 pt-1" aria-hidden="true" />,
        },
        {
            title: "Intelligent Relay Network",
            desc: "Latency-aware routing connects you to the closest domestic node first, then seamlessly transitions you onto our global network—adapting in real time to keep your connection fast and stable.",
            iconColor: "text-blue-400",
            bgColor: "bg-base-100",
            icon: <img src="images/relay.svg" alt="Relay" className="h-12 w-12 pl-1 pt-1" aria-hidden="true" />,
        },
        {
            title: "84 Premium Global Nodes",
            desc: "Instant access to optimized servers in 50+ countries. Whether it's 4K Netflix in Tokyo, Disney+ in the US, or BBC iPlayer in the UK, experience buffer-free streaming without region locks.",
            iconColor: "text-blue-400",
            bgColor: "bg-base-100",
            icon: <img src="images/earth.svg" alt="earth" className="h-12 w-12" aria-hidden="true" />,
        },
        {
            title: "Absolute Zero-Log Policy",
            desc: "Built around a strict no-logs philosophy and modern encryption practices—so your connection stays protected and your data exposure stays minimal.",
            iconColor: "text-blue-400",
            bgColor: "bg-base-100",
            icon: <img src="images/nolog.svg" alt="NoLog" className="h-12 w-12" aria-hidden="true" />,
        },
        {
            title: "Esports-Grade Gaming",
            desc: "Game-optimized routes designed to reduce jitter and stabilize ping—especially helpful for ranked sessions where consistency matters more than bragging rights.",
            iconColor: "text-blue-400",
            bgColor: "bg-base-100",
            icon: <img src="images/rocket.svg" alt="rocket" className="h-12 w-12" aria-hidden="true" />,
        },
    ];

    return (
        // Added 'overflow-visible' and 'z-10' so the glow sits on top of the next section's background
        <section className="relative bg-base-100 pt-20 pb-10 px-4 md:px-8 overflow-visible z-10" id="features">

            {/* Top Background Glow (Existing) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20">
                <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-primary rounded-full blur-[128px]" />
                <div className="absolute bottom-[10%] right-[20%] w-96 h-96 bg-secondary rounded-full blur-[128px]" />
            </div>

            <div className="container mx-auto relative z-10">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold tracking-wide uppercase">
                        Premium Infrastructure
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-base-content">
                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Nexitally</span>?
                    </h2>
                    <p className="text-lg text-base-content/60 max-w-2xl mx-auto leading-relaxed">
                        Nexitally isn’t a “one-size-fits-all” network tool. It’s a premium infrastructure layer designed to keep your
                        connection fast under load, stable across regions, and protected by privacy-first defaults.
                    </p>
                </div>

                {/* The Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-3xl bg-base-200/30 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5"
                        >
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            <div className={`mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl ${item.bgColor} border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-base-content group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-base-content/60 leading-relaxed text-sm md:text-[15px]">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>

            {/* === THE SMOOTH BRIDGE === */}
            {/* This glow sits exactly between this section and the next, creating a light bridge */}
            <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/20 blur-[128px] rounded-full pointer-events-none z-0 mix-blend-screen opacity-60"></div>

        </section>
    );
};

export default Features;