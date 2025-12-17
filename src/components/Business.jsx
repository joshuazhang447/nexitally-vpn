import React from 'react';
import { HiPaperAirplane, HiBuildingOffice2 } from 'react-icons/hi2';

const Business = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-[#0F0B15] relative overflow-hidden" id="business">

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 blur-3xl pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* --- LEFT: Content & Form --- */}
                    <div className="lg:w-1/2 relative z-10">
                        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-bold tracking-wide uppercase">
                            Mission Critical
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            When Connectivity <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                                Is A Matter of Survival.
                            </span>
                        </h2>

                        <p className="text-lg text-base-content/70 mb-10 leading-relaxed">
                            For international journalists and human rights organizations in high-risk zones, a dropped connection isn't an inconvenience—it's a life threat.
                            <br /><br />
                            We provide <strong className="text-white">guaranteed 100% uptime</strong> via diverse redundant IEPL circuits and <strong className="text-white">priority 24/7 direct access</strong> to our engineering team. We keep your digital lifeline open when everything else goes dark.
                        </p>

                        {/* Contact Form */}
                        <div className="bg-base-200/50 backdrop-blur-md border border-white/5 p-8 rounded-3xl shadow-xl">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <HiBuildingOffice2 className="text-primary" />
                                Secure Priority Channel
                            </h3>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Full Name</span>
                                        </label>
                                        <input type="text" className="input input-bordered bg-base-100/50 focus:border-primary" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Organization / Outlet</span>
                                        </label>
                                        <input type="text" className="input input-bordered bg-base-100/50 focus:border-primary" />
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Secure Email</span>
                                    </label>
                                    <input type="email" placeholder="correspondent@news-agency.com" className="input input-bordered bg-base-100/50 focus:border-primary" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Operational Requirements</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered bg-base-100/50 h-24 focus:border-primary"></textarea>
                                </div>

                                <button className="btn btn-primary w-full mt-4 gap-2 text-lg">
                                    <HiPaperAirplane className="rotate-90" />
                                    Initiate Secure Contact
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* --- RIGHT: Image --- */}
                    <div className="lg:w-1/2 relative w-full h-full">
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>

                            <img
                                src="/images/business-journalist.jpg"
                                alt="Journalist Reporting Field"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale-[20%] contrast-125"
                            />

                            {/* Floating Quote Card */}
                            <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-12">
                                <blockquote className="relative">
                                    {/* Text Stroke/Shadow added for readability */}
                                    <div className="text-white text-lg md:text-xl font-bold leading-relaxed mb-6 font-serif italic drop-shadow-[0_2px_2px_rgba(0,0,0,1)] [text-shadow:_0_1px_4px_rgb(0_0_0_/_80%)]">
                                        "Nexitally is more than a VPN—it is a <span className="text-white font-black not-italic bg-black/40 px-1 border border-white/20">critical lifeline</span>. During the most volatile periods of the Hong Kong protests and the COVID-19 lockdowns, their secure infrastructure served as our digital backbone. In an environment where silence is enforced, Nexitally guaranteed the free flow of information and ensured our ability to report the truth without interruption."
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="h-px w-12 bg-primary shadow-[0_0_5px_rgba(100,25,230,1)]"></div>
                                        <div className="text-sm font-bold text-primary uppercase tracking-widest drop-shadow-md">
                                            Correspondent, China Digital Times
                                        </div>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Business;
