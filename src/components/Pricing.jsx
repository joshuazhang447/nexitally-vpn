import React, { useState } from 'react';
import { HiCheck, HiXMark } from 'react-icons/hi2';

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    const plans = [
        {
            name: "Base",
            priceMonthly: "14.99",
            priceYearly: "149.99", // ~12.50/mo
            desc: "Essential privacy for personal use.",
            features: [
                "Support for 2 Devices",
                "500GB Data Allowance / 31 Days",
                "50+ Nodes (VLESS + TROJAN)",
                "Intelligent Relay Network",
                "Up to 2000Mbps Bandwidth",
                "Unlock Streaming & Torrents",
                "Access Uncensored Internet Worldwide",
            ],
            highlight: false,
            buttonStyle: "btn-ghost border-white/10 hover:bg-white/5",
        },
        {
            name: "Pro",
            priceMonthly: "17.99",
            priceYearly: "179.99", // ~15.00/mo
            desc: "Advanced speed and consistency for power users.",
            features: [
                "Support for 5 Devices",
                "1000GB Data Allowance / 31 Days",
                "77+ Nodes (Base + IEPL & IPLC)",
                "Intelligent Relay Network",
                "Up to 4000Mbps Bandwidth",
                "Unlock Streaming & Torrents",
                "Priority Support",
            ],
            highlight: true, // This one pops
            buttonStyle: "btn-primary shadow-lg shadow-primary/30",
        },
        {
            name: "Max",
            priceMonthly: "23.99",
            priceYearly: "239.99", // ~20.00/mo
            desc: "The ultimate implementation for gaming & 8K streaming.",
            features: [
                "Support for 10 Devices",
                "2000GB Data Allowance / 31 Days",
                "84+ Nodes (Pro + Gaming Lanes)",
                "Intelligent Relay Network",
                "Up to 10,000Mbps Bandwidth",
                "Unlock Streaming & Torrents",
                "Exclusive Low-Ping Gaming Nodes",
            ],
            highlight: false,
            buttonStyle: "btn-ghost border-white/10 hover:bg-white/5",
        },
    ];

    return (
        <section className="py-24 px-4 md:px-8 relative bg-base-100" id="pricing">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl pointer-events-none opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[128px]" />
            </div>

            <div className="container mx-auto relative z-10">

                {/* Header & Toggle */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-base-content/60 max-w-2xl mx-auto mb-8">
                        Premium infrastructure costs more to maintain than cheap VPNs. We invest in dedicated private lines (IEPL) so your connection never drops, even during rush hour.
                    </p>

                    {/* Toggle Switch */}
                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-base-content/50'}`}>Monthly</span>
                        <div
                            className="relative w-14 h-8 bg-base-content/10 rounded-full cursor-pointer transition-colors hover:bg-base-content/20"
                            onClick={() => setIsYearly(!isYearly)}
                        >
                            <div className={`absolute top-1 left-1 w-6 h-6 bg-primary rounded-full shadow-md transition-transform duration-300 ${isYearly ? 'translate-x-6' : 'translate-x-0'}`} />
                        </div>
                        <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-base-content/50'}`}>
                            Yearly <span className="text-xs text-secondary ml-1">(Save ~17%)</span>
                        </span>
                    </div>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`
                                relative p-8 rounded-3xl border transition-all duration-500
                                ${plan.highlight
                                    ? 'bg-base-200/50 border-primary/50 shadow-2xl shadow-primary/10 scale-105 z-10'
                                    : 'bg-base-200/20 border-white/5 hover:border-white/10 hover:bg-base-200/30'
                                }
                            `}
                        >
                            {/* Popular Badge */}
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                                    MOST POPULAR
                                </div>
                            )}

                            {/* Plan Name & Price */}
                            <div className="text-center mb-8">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex justify-center items-end gap-1 mb-2">
                                    <span className="text-3xl font-bold text-base-content/60">$</span>
                                    <span className="text-5xl font-extrabold text-white tracking-tight">
                                        {isYearly ? plan.priceYearly : plan.priceMonthly}
                                    </span>
                                </div>
                                <div className="text-sm text-base-content/50">
                                    {isYearly ? 'per year' : 'per month'}
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-center text-sm text-base-content/70 mb-8 px-4 h-10">
                                {plan.desc}
                            </p>

                            {/* CTA Button */}
                            <div className="mb-8">
                                <button className={`btn w-full rounded-full ${plan.buttonStyle}`}>
                                    Choose {plan.name}
                                </button>
                            </div>

                            {/* Features List */}
                            <ul className="space-y-4">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm">
                                        <HiCheck className="w-5 h-5 text-primary shrink-0" />
                                        <span className={feature.includes("Support for") ? "text-white font-medium" : "text-base-content/70"}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>

                {/* Free Trial CTA */}
                <div className="mt-16 text-center">
                    <p className="text-base-content/60 mb-6 text-lg">
                        Not ready to commit? Experience the full power of Nexitally with zero restrictions.
                    </p>
                    <a href="/trial" className="btn btn-outline btn-primary btn-lg rounded-full px-12 border-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                        Start 7-Day Free Trial
                    </a>
                    <p className="mt-4 text-xs text-base-content/40">
                        No auto-renewal. Credit/Debit card required for premium trial.
                    </p>
                </div>

            </div>


        </section>
    );
};

export default Pricing;
