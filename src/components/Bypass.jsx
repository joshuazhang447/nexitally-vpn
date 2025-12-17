import React from 'react';

const Bypass = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-base-100 relative overflow-hidden" id="bypass">

            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* --- LEFT: Educational Content --- */}
                    <div className="lg:w-1/2 text-left z-10">
                        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-semibold tracking-wide uppercase">
                            Unrestricted Access
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                            Break Through <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                                Digital Walls.
                            </span>
                        </h2>

                        <div className="space-y-8 text-lg text-base-content/70 leading-relaxed">
                            <p>
                                <strong className="text-white block mb-2 text-xl">The "Great Firewalls" are sophisticated. So are we.</strong>
                                Connecting from high-restriction regions like <span className="text-white font-medium">China, Iran, Russia, Saudi Arabia, or the UAE</span> often means facing aggressive packet inspection and blocking.
                            </p>

                            <p>
                                Standard VPNs fail because they use the public internet. Nexitally uses <strong className="text-accent">IEPL (International Ethernet Private Line)</strong> and <strong className="text-accent">IPLC</strong> technology.
                            </p>

                            <ul className="space-y-4 border-l-2 border-white/10 pl-6 my-8">
                                <li>
                                    <strong className="text-white">Physical Private Infrastructure:</strong> We don't just tunnel through the public web. Your data travels on dedicated, private physical fiber-optic cables that bypass national firewalls entirely.
                                </li>
                                <li>
                                    <strong className="text-white">Stealth Protocol Matrix:</strong> Even before hitting our private lines, your traffic is disguised as normal HTTPS browsing using advanced obfuscation, making it invisible to censors.
                                </li>
                            </ul>

                            <p>
                                Whether you are a traveler, an expatriate, or a citizen fighting for information, our mission is simple:
                                <span className="text-white font-medium"> access the free internet, anytime, anywhere.</span>
                            </p>
                        </div>
                    </div>

                    {/* --- RIGHT: Visuals --- */}
                    <div className="lg:w-1/2 relative w-full">
                        {/* Glow Effects */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 blur-[100px] rounded-full -z-10 opacity-40"></div>

                        <div className="relative group">
                            {/* The Image */}
                            <img
                                src="/images/social-icons.jpg"
                                alt="Access Social Media Worldwide"
                                className="rounded-3xl shadow-2xl border border-white/10 w-full transform group-hover:scale-[1.02] transition-transform duration-500"
                            />

                            {/* "Unlocked" Badge Overlay - Premium Version */}
                            <div className="absolute -bottom-6 -right-6 md:bottom-12 md:-left-12 bg-[#0F0B15]/95 backdrop-blur-2xl border border-white/10 p-5 pr-8 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] transform transition-transform duration-500 hover:scale-105 flex items-center gap-4">

                                {/* Animated Pulse Icon */}
                                <div className="relative flex items-center justify-center w-14 h-14 bg-success/10 rounded-full border border-success/20">
                                    <div className="absolute w-full h-full bg-success/20 rounded-full animate-ping opacity-30"></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-success drop-shadow-[0_0_10px_rgba(54,211,153,0.5)]" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>

                                <div>
                                    <div className="text-white font-bold text-lg tracking-tight">Status: Unlocked</div>
                                    <div className="flex items-center gap-2 text-xs text-secondary font-mono mt-1 font-semibold uppercase tracking-wider">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                                        </span>
                                        IEPL Tunnel Active
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Bypass;
