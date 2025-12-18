import React, { useEffect, useState } from 'react';
import { FaWindows, FaApple, FaLinux, FaAndroid, FaAppStoreIos } from 'react-icons/fa';
import { HiArrowDownTray, HiCube, HiShieldCheck, HiCodeBracketSquare } from 'react-icons/hi2';

const Download = () => {
    const [highlighted, setHighlighted] = useState([]);

    // Handle Hash Navigation & Highlighting
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            let targetIds = [];

            if (hash === '#download-windows') targetIds = ['windows'];
            if (hash === '#download-macos') targetIds = ['macos'];
            if (hash === '#download-linux') targetIds = ['linux'];
            if (hash === '#download-mobile') targetIds = ['android', 'ios'];

            if (targetIds.length > 0) {
                // Scroll into view (optional helper since ID usually handles it, but we use custom IDs)
                const section = document.getElementById('download');
                if (section) section.scrollIntoView({ behavior: 'smooth' });

                setHighlighted(targetIds);

                // Remove highlight after animation
                setTimeout(() => setHighlighted([]), 2000);
            }
        };

        // Check on mount and hash change
        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    // Row 1: Windows, Linux, Android
    const row1 = [
        {
            id: "windows",
            name: "Windows",
            version: "v4.2.0 • 64-bit",
            icon: <FaWindows className="w-10 h-10 text-blue-500" />,
            desc: "For Windows 10 & 11",
            buttons: [
                { label: "Download Installer", sub: "exe", primary: true }
            ]
        },
        {
            id: "linux",
            name: "Linux",
            version: "v2.1.0 • CLI / GUI",
            // User requested "not yellow", so we use a clean white/gray
            icon: <FaLinux className="w-10 h-10 text-gray-200" />,
            desc: "Ubuntu, Debian, Arch, CentOS",
            buttons: [
                { label: "Download AppImage", sub: "Universal", primary: true },
                // Changed "View Guide" to "Packages"
                { label: "Deb / RPM Packages", sub: "Repo", primary: false, icon: <HiCodeBracketSquare className="w-5 h-5 opacity-70" /> }
            ]
        },
        {
            id: "android",
            name: "Android",
            version: "v4.2.3 • Mobile",
            icon: <FaAndroid className="w-10 h-10 text-green-500" />,
            desc: "For Android 10+",
            buttons: [
                { label: "Google Play", sub: "Store", primary: true, icon: <FaAndroid /> },
                { label: "Direct APK", sub: "Sideload", primary: false, warning: false }
            ]
        },
    ];

    // Row 2: macOS, iOS
    const row2 = [
        {
            id: "macos",
            name: "macOS",
            version: "v4.2.0 • Universal",
            icon: <FaApple className="w-10 h-10 text-white" />,
            desc: "For M1/M2/M3 & Intel",
            buttons: [
                { label: "Download Installer", sub: "dmg", primary: true }
            ]
        },
        {
            id: "ios",
            name: "iOS / iPadOS",
            version: "v4.2.0 • Mobile",
            icon: <FaApple className="w-10 h-10 text-gray-300" />,
            desc: "For iOS 15+",
            buttons: [
                { label: "App Store", sub: "Official", primary: true, icon: <FaAppStoreIos /> },
                { label: "Enterprise IPA", sub: "Sideload", primary: false, warning: true }
            ]
        },
    ];

    const Card = ({ platform }) => {
        const isHighlighted = highlighted.includes(platform.id);

        return (
            <div
                id={`card-${platform.id}`}
                className={`
                    flex-1 min-w-[300px] max-w-[360px] rounded-[2rem] p-8 transition-all duration-500 group relative overflow-hidden
                    ${isHighlighted
                        ? 'bg-[#1A1629] border-2 border-primary shadow-[0_0_50px_rgba(100,25,230,0.6)] scale-105 z-20'
                        : 'bg-[#151221]/80 backdrop-blur-xl border border-white/5 hover:border-primary/30 hover:bg-[#1A1629] hover:shadow-[0_0_40px_rgba(100,25,230,0.1)] hover:-translate-y-2'
                    }
                `}
            >
                {/* Subtle Gradient Blob on Hover or Highlight */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-primary/20 blur-[50px] rounded-full transition-opacity duration-500 ${isHighlighted ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>

                <div className="flex items-center gap-5 mb-8 relative z-10">
                    <div className={`p-4 rounded-2xl border transition-transform duration-500 shadow-inner ${isHighlighted ? 'bg-white/10 border-white/20 scale-110' : 'bg-white/5 border-white/10 group-hover:scale-110'}`}>
                        {platform.icon}
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">{platform.name}</h3>
                        <div className="text-xs text-secondary font-mono mt-1 bg-secondary/10 px-2 py-0.5 rounded-md inline-block">
                            {platform.version}
                        </div>
                    </div>
                </div>

                <p className="text-sm text-base-content/60 mb-8 pl-1 font-medium tracking-wide">
                    {platform.desc}
                </p>

                <div className="space-y-4 relative z-10">
                    {platform.buttons.map((btn, idx) => (
                        <button
                            key={idx}
                            className={`w-full btn h-14 rounded-xl flex items-center justify-between group/btn transition-all duration-300 ${btn.primary
                                ? 'btn-primary shadow-lg shadow-primary/25 hover:shadow-primary/40 border-none text-white'
                                : btn.warning
                                    ? 'bg-transparent border border-warning/30 text-warning hover:bg-warning hover:text-black hover:border-warning'
                                    : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-lg">
                                    {btn.icon ? btn.icon :
                                        !btn.primary && btn.warning ? <HiShieldCheck /> :
                                            !btn.primary && !btn.icon ? (btn.label.includes("Deb") ? <HiCodeBracketSquare /> : <HiCube />) :
                                                <HiArrowDownTray />
                                    }
                                </span>
                                <span className="font-semibold tracking-wide">{btn.label}</span>
                            </div>
                            <span className={`text-[10px] font-mono tracking-wider opacity-80 ${btn.warning && !btn.primary ? 'bg-warning/10 px-1.5 py-0.5 rounded' : 'bg-black/20 px-1.5 py-0.5 rounded text-white/90'}`}>
                                {btn.sub}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section className="py-32 px-4 md:px-8 bg-base-100 relative" id="download">
            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                        Secure Every Device
                    </h2>
                    <p className="text-lg text-base-content/60 max-w-2xl mx-auto">
                        One subscription. Infinite possibilities. Download our native apps for maximum performance.
                    </p>
                </div>

                <div className="flex flex-col gap-8 items-center">
                    {/* Row 1: 3 cards */}
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        {row1.map(p => <Card key={p.id} platform={p} />)}
                    </div>

                    {/* Row 2: 2 cards */}
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        {row2.map(p => <Card key={p.id} platform={p} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Download;
