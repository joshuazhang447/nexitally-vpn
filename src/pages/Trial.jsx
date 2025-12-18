import React, { useState } from 'react';
import { HiCreditCard, HiLockClosed } from 'react-icons/hi'; // Removed unused icons
import { FaCcVisa, FaCcMastercard, FaCcAmex } from 'react-icons/fa';

const Trial = () => {
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className="min-h-screen bg-[#0F0B15] text-white font-sans selection:bg-primary/30">

            {/* Minimal Header */}
            <header className="p-6 flex justify-center border-b border-white/5 bg-base-100/50 backdrop-blur-md sticky top-0 z-50">
                <a href="/">
                    <img src="https://i.imgur.com/xuG3IY3.png" alt="Nexitally Logo" className="w-24 opacity-90 hover:opacity-100 transition-opacity" />
                </a>
            </header>

            <div className="container mx-auto max-w-6xl px-4 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* --- LEFT: The Offer --- */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <div className="mb-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Free Trial Access
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                                Experience True <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Digital Freedom.</span>
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                Get full premium access for 7 days with 5GB of high-speed data. No throttles, just the raw power of the Nexitally network.
                            </p>
                        </div>

                        {/* --- NEW FEATURE CARDS --- */}
                        <div className="space-y-4 mb-10">

                            {/* Card 1: 5GB Data */}
                            <div className="group flex items-start gap-5 p-5 rounded-2xl bg-[#15111D] border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                                {/* CSS Graphic - No SVG */}
                                <div className="flex-shrink-0 relative h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-900/10 border border-purple-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.15)]">
                                    <span className="text-sm font-black text-purple-400 tracking-tighter">5GB</span>
                                    <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="pt-1">
                                    <div className="font-bold text-lg text-white group-hover:text-purple-300 transition-colors">High-Speed Data</div>
                                    <div className="text-sm text-gray-500 mt-1 leading-snug">
                                        Premium IEPL lines optimized for 4K streaming and low latency.
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Network */}
                            <div className="group flex items-start gap-5 p-5 rounded-2xl bg-[#15111D] border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                                {/* CSS Graphic - No SVG */}
                                <div className="flex-shrink-0 relative h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-900/10 border border-blue-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                                    <span className="text-sm font-black text-blue-400 tracking-tighter">84+</span>
                                    <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="pt-1">
                                    <div className="font-bold text-lg text-white group-hover:text-blue-300 transition-colors">Full Network Access</div>
                                    <div className="text-sm text-gray-500 mt-1 leading-snug">
                                        Connect instantly to any of our 84 global nodes without restriction.
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: Zero Risk */}
                            <div className="group flex items-start gap-5 p-5 rounded-2xl bg-[#15111D] border border-white/5 hover:border-emerald-500/30 transition-all duration-300">
                                {/* CSS Graphic - No SVG */}
                                <div className="flex-shrink-0 relative h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-600/20 to-emerald-900/10 border border-emerald-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                                    {/* CSS Checkmark */}
                                    <div className="w-5 h-3 border-l-2 border-b-2 border-emerald-400 -rotate-45 -mt-1"></div>
                                    <div className="absolute inset-0 bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="pt-1">
                                    <div className="font-bold text-lg text-white group-hover:text-emerald-300 transition-colors">Zero Risks</div>
                                    <div className="text-sm text-gray-500 mt-1 leading-snug">
                                        No auto-renewal. No hidden charges. Your trial ends automatically.
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Security Note */}
                        <div className="p-6 rounded-2xl border border-dashed border-white/10 bg-white/5 text-sm text-gray-400">
                            <p className="mb-2"><strong className="text-white">Why do we need verification?</strong></p>
                            To prevent abuse of our service, we require a valid payment method.
                            <span className="block mt-2 text-yellow-500/90 font-medium">
                                You will be charged a $1 verification fee which is instantly refunded.
                            </span>
                        </div>
                    </div>

                    {/* --- RIGHT: Registration Form --- */}
                    <div className="lg:col-span-7">
                        <div className="bg-[#13101C]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">

                            {/* Glow Effect */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/20 blur-[100px] pointer-events-none"></div>

                            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <HiLockClosed className="text-purple-500" />
                                Secure Registration
                            </h2>

                            <form className="space-y-8">

                                {/* 1. Account Details */}
                                <div className="space-y-4">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600 border-b border-white/5 pb-2">Account Setup</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="form-control">
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all placeholder:text-gray-600"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-control">
                                            <input
                                                type="email"
                                                placeholder="Confirm Email"
                                                className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all placeholder:text-gray-600"
                                                value={confirmEmail}
                                                onChange={(e) => setConfirmEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-control">
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all placeholder:text-gray-600"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-control">
                                            <input
                                                type="password"
                                                placeholder="Confirm Password"
                                                className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all placeholder:text-gray-600"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Payment Verification */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-end border-b border-white/5 pb-2">
                                        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600">Identity Verification</h3>
                                        <div className="flex gap-2 text-gray-600 text-lg">
                                            <FaCcVisa className="hover:text-white transition-colors" />
                                            <FaCcMastercard className="hover:text-white transition-colors" />
                                            <FaCcAmex className="hover:text-white transition-colors" />
                                        </div>
                                    </div>

                                    {/* Visual Credit Card */}
                                    <div className="relative group perspective">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                        <div className="relative bg-[#0F0B15] border border-white/10 p-6 rounded-xl space-y-4">
                                            <div className="form-control">
                                                <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Card Number</label>
                                                <div className="relative">
                                                    <HiCreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-white/5 focus:border-purple-500 outline-none font-mono text-sm" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="form-control">
                                                    <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Expiry</label>
                                                    <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/5 focus:border-purple-500 outline-none font-mono text-sm text-center" />
                                                </div>
                                                <div className="form-control">
                                                    <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">CVC</label>
                                                    <input type="text" placeholder="123" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/5 focus:border-purple-500 outline-none font-mono text-sm text-center" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center text-xs text-red-400 font-medium py-2 bg-red-500/5 rounded-lg border border-red-500/10">
                                        Prepaid cards, PayPal, Google Pay, and Apple Pay are NOT accepted for trial verification.
                                    </div>
                                </div>

                                {/* Terms & Submit */}
                                <div className="space-y-6 pt-4">
                                    <div className="flex items-start gap-3">
                                        <input type="checkbox" className="checkbox checkbox-primary checkbox-sm mt-1 border-white/20" />
                                        <span className="text-sm text-gray-500">
                                            I understand that I will <strong>not</strong> be automatically charged after 7 days. I must manually upgrade to continue using the service.
                                            The $1.00 verification fee will be refunded within 3-5 business days.
                                        </span>
                                    </div>

                                    <button className="w-full h-14 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-bold shadow-xl shadow-purple-900/20 hover:scale-[1.01] hover:shadow-purple-900/40 transition-all">
                                        Start 7-Day Free Trial
                                    </button>
                                </div>

                            </form>

                            {/* Security Link */}
                            <div className="mt-8 text-center">
                                <p className="text-sm text-gray-600">
                                    Unable to provide card details due to safety concerns? <br />
                                    <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">Contact our Safety Team</a> for alternative verification.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Trial;