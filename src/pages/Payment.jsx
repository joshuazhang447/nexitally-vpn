import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HiCreditCard, HiLockClosed, HiCheck, HiMinus, HiPlus } from 'react-icons/hi';
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaPaypal, FaGooglePay, FaApple } from 'react-icons/fa'; // FaApple for Apple Pay logo style

const Payment = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialPlan = queryParams.get('plan') || 'pro';
    const initialCycle = queryParams.get('cycle') || 'yearly';

    const [selectedPlan, setSelectedPlan] = useState(initialPlan); // 'base', 'pro', 'max'
    const [billingCycle, setBillingCycle] = useState(initialCycle); // 'monthly', 'yearly'
    const [duration, setDuration] = useState(1); // quantity of months/years
    const [paymentMethod, setPaymentMethod] = useState('card'); // 'card', 'paypal', 'google', 'apple'

    // Form State
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Ensure state updates if URL changes (optional, but good for navigation)
    useEffect(() => {
        const plan = queryParams.get('plan');
        const cycle = queryParams.get('cycle');
        if (plan) setSelectedPlan(plan);
        if (cycle) setBillingCycle(cycle);
    }, [location.search]);

    const plans = {
        base: {
            name: "Base",
            priceMonthly: 14.99,
            priceYearly: 149.99,
            color: "blue",
            features: [
                "Support for 2 Devices",
                "500GB Data Allowance",
                "50+ Nodes (VLESS + TROJAN)",
                "Up to 2000Mbps Bandwidth"
            ]
        },
        pro: {
            name: "Pro",
            priceMonthly: 17.99,
            priceYearly: 179.99,
            color: "purple",
            features: [
                "Support for 5 Devices",
                "1000GB Data Allowance",
                "77+ Nodes (IEPL & IPLC)",
                "Up to 4000Mbps Bandwidth",
                "Priority Support"
            ]
        },
        max: {
            name: "Max",
            priceMonthly: 23.99,
            priceYearly: 239.99,
            color: "orange",
            features: [
                "Support for 10 Devices",
                "2000GB Data Allowance",
                "84+ Nodes (Gaming Lanes)",
                "Up to 10,000Mbps Bandwidth",
                "Exclusive Low-Ping Gaming Nodes"
            ]
        }
    };

    const currentPlanData = plans[selectedPlan] || plans.pro;
    const basePrice = billingCycle === 'yearly' ? currentPlanData.priceYearly : currentPlanData.priceMonthly;
    const totalPrice = (basePrice * duration).toFixed(2);
    const billingText = billingCycle === 'yearly' ? '/ year' : '/ month';

    // Helper for color classes
    const getColorClass = (color) => {
        switch (color) {
            case 'blue': return 'text-blue-400 border-blue-500/20 from-blue-600/20 to-blue-900/10 shadow-[0_0_15px_rgba(59,130,246,0.15)]';
            case 'orange': return 'text-orange-400 border-orange-500/20 from-orange-600/20 to-orange-900/10 shadow-[0_0_15px_rgba(249,115,22,0.15)]';
            default: return 'text-purple-400 border-purple-500/20 from-purple-600/20 to-purple-900/10 shadow-[0_0_15px_rgba(147,51,234,0.15)]';
        }
    };

    const getButtonGradient = (color) => {
        switch (color) {
            case 'blue': return 'from-blue-600 to-cyan-600 shadow-blue-900/20 hover:shadow-blue-900/40';
            case 'orange': return 'from-orange-600 to-red-600 shadow-orange-900/20 hover:shadow-orange-900/40';
            default: return 'from-purple-600 to-indigo-600 shadow-purple-900/20 hover:shadow-purple-900/40';
        }
    }

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

                    {/* --- LEFT: The Offer (Dynamic) --- */}
                    <div className="lg:col-span-5 flex flex-col">

                        {/* Plan Switcher */}
                        <div className="flex bg-[#15111D] p-1.5 rounded-xl border border-white/5 mb-8">
                            {Object.keys(plans).map((planKey) => (
                                <button
                                    key={planKey}
                                    onClick={() => setSelectedPlan(planKey)}
                                    className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${selectedPlan === planKey
                                        ? 'bg-white/10 text-white shadow-lg'
                                        : 'text-gray-500 hover:text-gray-300'
                                        }`}
                                >
                                    {plans[planKey].name}
                                </button>
                            ))}
                        </div>

                        <div className="mb-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Secure Checkout
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                                Subscribe to <br />
                                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${selectedPlan === 'max' ? 'from-orange-400 to-red-600' : selectedPlan === 'base' ? 'from-blue-400 to-cyan-600' : 'from-purple-400 to-pink-600'}`}>
                                    Nexitally {currentPlanData.name}.
                                </span>
                            </h1>

                            {/* Price Display */}
                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-5xl font-bold text-white">${totalPrice}</span>
                                <span className="text-xl text-gray-500">for {duration} {billingCycle === 'yearly' ? (duration > 1 ? 'years' : 'year') : (duration > 1 ? 'months' : 'month')}</span>
                            </div>

                            {/* Cycle Toggle & Duration */}
                            <div className="flex flex-col gap-4 mb-8">
                                <div className="flex items-center gap-4">
                                    <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
                                    <div
                                        className="relative w-14 h-8 bg-white/10 rounded-full cursor-pointer transition-colors hover:bg-white/20"
                                        onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                                    >
                                        <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'}`} />
                                    </div>
                                    <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-500'}`}>
                                        Yearly <span className="text-xs text-secondary ml-1">(Save ~17%)</span>
                                    </span>
                                </div>

                                {/* Duration Control */}
                                <div className="flex items-center gap-3 p-2 bg-white/5 rounded-lg w-fit border border-white/5">
                                    <span className="text-sm text-gray-400 pl-2">Pay for:</span>
                                    <button
                                        onClick={() => setDuration(Math.max(1, duration - 1))}
                                        className="w-8 h-8 flex items-center justify-center rounded bg-white/10 hover:bg-white/20 transition-colors"
                                    >
                                        <HiMinus className="w-4 h-4" />
                                    </button>
                                    <span className="font-mono w-6 text-center">{duration}</span>
                                    <button
                                        onClick={() => setDuration(duration + 1)}
                                        className="w-8 h-8 flex items-center justify-center rounded bg-white/10 hover:bg-white/20 transition-colors"
                                    >
                                        <HiPlus className="w-4 h-4" />
                                    </button>
                                    <span className="text-sm text-gray-400 pr-2">
                                        {billingCycle === 'yearly' ? (duration > 1 ? 'Years' : 'Year') : (duration > 1 ? 'Months' : 'Month')}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* --- FEATURE HIGHLIGHTS --- */}
                        <div className="space-y-4 mb-10">
                            {currentPlanData.features.slice(0, 3).map((feature, idx) => (
                                <div key={idx} className="group flex items-start gap-5 p-4 rounded-2xl bg-[#15111D] border border-white/5 hover:border-white/10 transition-all duration-300">
                                    <div className={`flex-shrink-0 relative h-10 w-10 rounded-xl bg-gradient-to-br border flex items-center justify-center ${getColorClass(currentPlanData.color)}`}>
                                        <HiCheck className="w-5 h-5" />
                                    </div>
                                    <div className="pt-2">
                                        <div className="font-medium text-white/90 text-sm leading-snug">
                                            {feature}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Summary Box */}
                        <div className="mt-auto p-6 rounded-2xl border border-white/10 bg-white/5 text-sm">
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-400">Subtotal</span>
                                <span className="text-white font-mono">${basePrice} x {duration}</span>
                            </div>
                            <div className="flex justify-between pt-4 border-t border-white/10">
                                <span className="text-white font-bold">Total due today</span>
                                <span className="text-xl text-white font-bold font-mono">${totalPrice}</span>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT: Registration Form --- */}
                    <div className="lg:col-span-7">
                        <div className="bg-[#13101C]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">

                            {/* Glow Effect */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 blur-[100px] pointer-events-none"></div>

                            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <HiLockClosed className="text-primary" />
                                Complete Order
                            </h2>

                            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>

                                {/* 1. Account Details */}
                                <div className="space-y-4">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600 border-b border-white/5 pb-2">Account Setup</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="col-span-2">
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Payment Method Selection */}
                                <div className="space-y-4">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600 border-b border-white/5 pb-2">Payment Method</h3>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod('card')}
                                            className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${paymentMethod === 'card' ? 'bg-white/10 border-primary text-white' : 'bg-black/20 border-white/5 text-gray-500 hover:bg-white/5'}`}
                                        >
                                            <HiCreditCard className="text-2xl mb-1" />
                                            <span className="text-[10px] font-bold uppercase">Card</span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod('paypal')}
                                            className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${paymentMethod === 'paypal' ? 'bg-[#003087]/20 border-[#003087] text-[#003087]' : 'bg-black/20 border-white/5 text-gray-500 hover:bg-white/5'}`}
                                        >
                                            <FaPaypal className="text-2xl mb-1" />
                                            <span className="text-[10px] font-bold uppercase">PayPal</span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod('google')}
                                            className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${paymentMethod === 'google' ? 'bg-white/10 border-white text-white' : 'bg-black/20 border-white/5 text-gray-500 hover:bg-white/5'}`}
                                        >
                                            <FaGooglePay className="text-2xl mb-1" />
                                            <span className="text-[10px] font-bold uppercase">Google</span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod('apple')}
                                            className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${paymentMethod === 'apple' ? 'bg-white/10 border-white text-white' : 'bg-black/20 border-white/5 text-gray-500 hover:bg-white/5'}`}
                                        >
                                            <FaApple className="text-2xl mb-1" />
                                            <span className="text-[10px] font-bold uppercase">Apple</span>
                                        </button>
                                    </div>

                                    {/* Conditional Payment Details */}
                                    {paymentMethod === 'card' && (
                                        <div className="space-y-4 animate-fadeIn">
                                            <div className="flex justify-between items-end pb-2">
                                                <div className="flex gap-2 text-gray-600 text-lg">
                                                    <FaCcVisa className="hover:text-white transition-colors" />
                                                    <FaCcMastercard className="hover:text-white transition-colors" />
                                                    <FaCcAmex className="hover:text-white transition-colors" />
                                                </div>
                                            </div>

                                            {/* Visual Credit Card */}
                                            <div className="relative group perspective">
                                                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                                <div className="relative bg-[#0F0B15] border border-white/10 p-6 rounded-xl space-y-4">
                                                    <div className="form-control">
                                                        <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Card Number</label>
                                                        <div className="relative">
                                                            <HiCreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                                            <input type="text" placeholder="0000 0000 0000 0000" className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-white/5 focus:border-primary outline-none font-mono text-sm" />
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="form-control">
                                                            <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Expiry</label>
                                                            <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/5 focus:border-primary outline-none font-mono text-sm text-center" />
                                                        </div>
                                                        <div className="form-control">
                                                            <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">CVC</label>
                                                            <input type="text" placeholder="123" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/5 focus:border-primary outline-none font-mono text-sm text-center" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {paymentMethod !== 'card' && (
                                        <div className="p-6 rounded-xl border border-white/10 bg-white/5 text-center space-y-2 animate-fadeIn">
                                            <p className="text-sm text-gray-400">You will be redirected to {paymentMethod === 'google' ? 'Google Pay' : paymentMethod === 'apple' ? 'Apple Pay' : 'PayPal'} to complete your purchase safely.</p>
                                        </div>
                                    )}
                                </div>

                                {/* Terms & Submit */}
                                <div className="space-y-6 pt-4">
                                    <button className={`w-full h-14 rounded-xl bg-gradient-to-r text-white text-lg font-bold shadow-xl hover:scale-[1.01] transition-all ${getButtonGradient(currentPlanData.color)}`}>
                                        {paymentMethod === 'card' ? `Pay $${totalPrice}` : `Continue with ${paymentMethod === 'google' ? 'Google Pay' : paymentMethod === 'apple' ? 'Apple Pay' : 'PayPal'}`}
                                    </button>

                                    <p className="text-xs text-center text-gray-500">
                                        By subscribing you agree to our <a href="#" className="underline hover:text-white">Terms of Service</a> and <a href="#" className="underline hover:text-white">Privacy Policy</a>.
                                    </p>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Payment;
