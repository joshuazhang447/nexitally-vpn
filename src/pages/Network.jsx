import React, { useState, useEffect } from 'react';
import { FaSyncAlt, FaServer, FaGamepad, FaGem, FaGlobe } from 'react-icons/fa';

const Network = () => {
    const [lastUpdated, setLastUpdated] = useState(new Date());
    const [isRefreshing, setIsRefreshing] = useState(false);

    // Initial Data
    const initialServers = [
        // THE CORE BACKBONE
        { id: 1, flag: "🇳🇴", country: "Norway", name: "NO-OSLO-Direct-Fiber", type: "BARE-METAL", load: 0.1, ping: 1, tier: "core" },

        // MAX TIER (Gaming)
        { id: 2, flag: "🇺🇸", country: "USA", name: "US-Gaming-Lane-01", type: "MAX-GAMING", load: 15, ping: 14, tier: "max" },
        { id: 3, flag: "🇨🇦", country: "Canada", name: "CA-Gaming-Lane-01", type: "MAX-GAMING", load: 11, ping: 18, tier: "max" },
        { id: 4, flag: "🇯🇵", country: "Japan", name: "JP-Gaming-Lane-01", type: "MAX-GAMING", load: 22, ping: 12, tier: "max" },
        { id: 5, flag: "🇰🇷", country: "South Korea", name: "KR-Gaming-Lane-01", type: "MAX-GAMING", load: 18, ping: 10, tier: "max" },
        { id: 6, flag: "🇬🇧", country: "UK", name: "UK-Gaming-Lane-01", type: "MAX-GAMING", load: 9, ping: 20, tier: "max" },
        { id: 7, flag: "🇸🇬", country: "Singapore", name: "SG-Gaming-Lane-01", type: "MAX-GAMING", load: 25, ping: 16, tier: "max" },
        { id: 8, flag: "🇺🇸", country: "USA", name: "US-Gaming-Lane-02", type: "MAX-GAMING", load: 13, ping: 15, tier: "max" },

        // PRO TIER
        { id: 9, flag: "🇺🇸", country: "USA", name: "US-NewYork-Pro", type: "IEPL", load: 14, ping: 38, tier: "pro" },
        { id: 10, flag: "🇺🇸", country: "USA", name: "US-LosAngeles-Pro", type: "IPLC", load: 22, ping: 41, tier: "pro" },
        { id: 11, flag: "🇺🇸", country: "USA", name: "US-SanFrancisco-Pro", type: "IEPL", load: 18, ping: 44, tier: "pro" },
        { id: 12, flag: "🇨🇦", country: "Canada", name: "CA-Toronto-Pro", type: "IPLC", load: 12, ping: 32, tier: "pro" },
        { id: 13, flag: "🇨🇦", country: "Canada", name: "CA-Montreal-Pro", type: "IEPL", load: 15, ping: 35, tier: "pro" },
        { id: 14, flag: "🇯🇵", country: "Japan", name: "JP-Tokyo-Pro", type: "IPLC", load: 38, ping: 34, tier: "pro" },
        { id: 15, flag: "🇯🇵", country: "Japan", name: "JP-Osaka-Pro", type: "IEPL", load: 29, ping: 39, tier: "pro" },
        { id: 16, flag: "🇰🇷", country: "South Korea", name: "KR-Seoul-Pro", type: "IPLC", load: 25, ping: 32, tier: "pro" },
        { id: 17, flag: "🇰🇷", country: "South Korea", name: "KR-Busan-Pro", type: "IEPL", load: 19, ping: 36, tier: "pro" },
        { id: 18, flag: "🇭🇰", country: "Hong Kong", name: "HK-WanChai-Pro", type: "IPLC", load: 67, ping: 38, tier: "pro" },
        { id: 19, flag: "🇭🇰", country: "Hong Kong", name: "HK-Kowloon-Pro", type: "IEPL", load: 72, ping: 40, tier: "pro" },
        { id: 20, flag: "🇹🇼", country: "Taiwan", name: "TW-Taipei-Pro", type: "IPLC", load: 40, ping: 34, tier: "pro" },
        { id: 21, flag: "🇬🇧", country: "UK", name: "UK-London-Pro", type: "IEPL", load: 19, ping: 92, tier: "pro" },
        { id: 22, flag: "🇬🇧", country: "UK", name: "UK-Manchester-Pro", type: "IPLC", load: 14, ping: 98, tier: "pro" },
        { id: 23, flag: "🇸🇬", country: "Singapore", name: "SG-Changi-Pro", type: "IEPL", load: 44, ping: 135, tier: "pro" },
        { id: 24, flag: "🇩🇪", country: "Germany", name: "DE-Frankfurt-Pro", type: "IPLC", load: 12, ping: 102, tier: "pro" },
        { id: 25, flag: "🇫🇷", country: "France", name: "FR-Paris-Pro", type: "IEPL", load: 18, ping: 108, tier: "pro" },
        { id: 26, flag: "🇳🇱", country: "Netherlands", name: "NL-Amsterdam-Pro", type: "IPLC", load: 9, ping: 110, tier: "pro" },
        { id: 27, flag: "🇸🇪", country: "Sweden", name: "SE-Stockholm-Pro", type: "IEPL", load: 14, ping: 112, tier: "pro" },
        { id: 28, flag: "🇨🇭", country: "Switzerland", name: "CH-Zurich-Pro", type: "IPLC", load: 7, ping: 98, tier: "pro" },
        { id: 29, flag: "🇦🇺", country: "Australia", name: "AU-Sydney-Pro", type: "IEPL", load: 20, ping: 195, tier: "pro" },

        // BASE TIER
        { id: 30, flag: "🇫🇷", country: "France", name: "FR-Paris-01", type: "Trojan", load: 33, ping: 115, tier: "base" },
        { id: 31, flag: "🇫🇷", country: "France", name: "FR-Lyon-V2", type: "VLESS", load: 21, ping: 120, tier: "base" },
        { id: 32, flag: "🇩🇪", country: "Germany", name: "DE-Berlin-01", type: "Hysteria", load: 40, ping: 108, tier: "base" },
        { id: 33, flag: "🇩🇪", country: "Germany", name: "DE-Hamburg-Base", type: "Trojan", load: 15, ping: 112, tier: "base" },
        { id: 34, flag: "🇳🇱", country: "Netherlands", name: "NL-Rotterdam-P2P", type: "Trojan", load: 28, ping: 114, tier: "base" },
        { id: 35, flag: "🇳🇱", country: "Netherlands", name: "NL-Utrecht-01", type: "VLESS", load: 19, ping: 118, tier: "base" },
        { id: 36, flag: "🇦🇺", country: "Australia", name: "AU-Melbourne-Direct", type: "Trojan", load: 25, ping: 210, tier: "base" },
        { id: 37, flag: "🇦🇺", country: "Australia", name: "AU-Perth-V2", type: "Hysteria", load: 30, ping: 215, tier: "base" },
        { id: 38, flag: "🇧🇷", country: "Brazil", name: "BR-Rio-01", type: "VLESS", load: 12, ping: 185, tier: "base" },
        { id: 39, flag: "🇮🇹", country: "Italy", name: "IT-Milan-Direct", type: "Trojan", load: 36, ping: 122, tier: "base" },
        { id: 40, flag: "🇮🇪", country: "Ireland", name: "IE-Dublin-Cloud", type: "VLESS", load: 42, ping: 110, tier: "base" },
        { id: 41, flag: "🇸🇪", country: "Sweden", name: "SE-Gothenburg-01", type: "Hysteria", load: 14, ping: 115, tier: "base" },
        { id: 42, flag: "🇪🇸", country: "Spain", name: "ES-Madrid-01", type: "Trojan", load: 22, ping: 128, tier: "base" },
        { id: 43, flag: "🇦🇹", country: "Austria", name: "AT-Vienna-Direct", type: "VLESS", load: 18, ping: 114, tier: "base" },
        { id: 44, flag: "🇧🇪", country: "Belgium", name: "BE-Brussels-V2", type: "Trojan", load: 11, ping: 110, tier: "base" },
        { id: 45, flag: "🇩🇰", country: "Denmark", name: "DK-Aarhus-01", type: "Hysteria", load: 9, ping: 122, tier: "base" },
        { id: 46, flag: "🇫🇮", country: "Finland", name: "FI-Helsinki-V2", type: "VLESS", load: 20, ping: 125, tier: "base" },
        { id: 47, flag: "🇵🇱", country: "Poland", name: "PL-Warsaw-Direct", type: "Trojan", load: 48, ping: 118, tier: "base" },
        { id: 48, flag: "🇲🇽", country: "Mexico", name: "MX-Guadalajara-01", type: "VLESS", load: 33, ping: 85, tier: "base" },
        { id: 49, flag: "🇨🇱", country: "Chile", name: "CL-Santiago-Direct", type: "Hysteria", load: 15, ping: 195, tier: "base" },
        { id: 50, flag: "🇦🇷", country: "Argentina", name: "AR-Cordoba-V2", type: "Trojan", load: 21, ping: 220, tier: "base" },
        { id: 51, flag: "🇨🇴", country: "Colombia", name: "CO-Medellin-VLESS", type: "VLESS", load: 19, ping: 108, tier: "base" },
        { id: 52, flag: "🇵🇪", country: "Peru", name: "PE-Lima-Direct", type: "Hysteria", load: 8, ping: 130, tier: "base" },
        { id: 53, flag: "🇵🇹", country: "Portugal", name: "PT-Porto-01", type: "Trojan", load: 24, ping: 135, tier: "base" },
        { id: 54, flag: "🇬🇷", country: "Greece", name: "GR-Thessaloniki-V2", type: "VLESS", load: 27, ping: 148, tier: "base" },
        { id: 55, flag: "🇨🇿", country: "Czechia", name: "CZ-Prague-01", type: "Hysteria", load: 16, ping: 116, tier: "base" },
        { id: 56, flag: "🇭🇺", country: "Hungary", name: "HU-Budapest-V2", type: "Trojan", load: 13, ping: 119, tier: "base" },
        { id: 57, flag: "🇷🇴", country: "Romania", name: "RO-Cluj-01", type: "VLESS", load: 25, ping: 125, tier: "base" },
        { id: 58, flag: "🇮🇸", country: "Iceland", name: "IS-Keflavik-Direct", type: "Trojan", load: 5, ping: 155, tier: "base" },
        { id: 59, flag: "🇳🇿", country: "New Zealand", name: "NZ-Wellington-01", type: "Hysteria", load: 18, ping: 235, tier: "base" },
        { id: 60, flag: "🇹🇭", country: "Thailand", name: "TH-Bangkok-Base", type: "VLESS", load: 55, ping: 165, tier: "base" },
        { id: 61, flag: "🇲🇾", country: "Malaysia", name: "MY-Johor-01", type: "Trojan", load: 41, ping: 158, tier: "base" },
        { id: 62, flag: "🇻🇳", country: "Vietnam", name: "VN-Saigon-Direct", type: "Hysteria", load: 62, ping: 175, tier: "base" },
        { id: 63, flag: "🇵🇭", country: "Philippines", name: "PH-Cebu-V2", type: "VLESS", load: 38, ping: 192, tier: "base" },
        { id: 64, flag: "🇮🇩", country: "Indonesia", name: "ID-Bali-01", type: "Trojan", load: 29, ping: 188, tier: "base" },
        { id: 65, flag: "🇮🇳", country: "India", name: "IN-Mumbai-Std", type: "VLESS", load: 11, ping: 245, tier: "base" },
        { id: 66, flag: "🇮🇳", country: "India", name: "IN-Bangalore-V2", type: "Hysteria", load: 14, ping: 252, tier: "base" },
        { id: 67, flag: "🇮🇱", country: "Israel", name: "IL-Haifa-Secure", type: "Trojan", load: 22, ping: 145, tier: "base" },
        { id: 68, flag: "🇦🇪", country: "UAE", name: "AE-AbuDhabi-Direct", type: "VLESS", load: 50, ping: 138, tier: "base" },
        { id: 69, flag: "🇿🇦", country: "South Africa", name: "ZA-CapeTown-01", type: "Hysteria", load: 16, ping: 285, tier: "base" },
        { id: 70, flag: "🇹🇷", country: "Turkey", name: "TR-Ankara-Std", type: "Trojan", load: 65, ping: 132, tier: "base" },
        { id: 71, flag: "🇺🇾", country: "Uruguay", name: "UY-Montevideo-01", type: "VLESS", load: 12, ping: 215, tier: "base" },
        { id: 72, flag: "🇵🇦", country: "Panama", name: "PA-Colon-Direct", type: "Hysteria", load: 14, ping: 95, tier: "base" },
        { id: 73, flag: "🇪🇪", country: "Estonia", name: "EE-Tallinn-V2", type: "Trojan", load: 10, ping: 122, tier: "base" },
        { id: 74, flag: "🇺🇸", country: "USA", name: "US-Seattle-Base", type: "VLESS", load: 39, ping: 48, tier: "base" },
        { id: 75, flag: "🇺🇸", country: "USA", name: "US-Denver-Direct", type: "Trojan", load: 27, ping: 42, tier: "base" },
        { id: 76, flag: "🇺🇸", country: "USA", name: "US-Atlanta-Std", type: "Hysteria", load: 35, ping: 72, tier: "base" },
        { id: 77, flag: "🇯🇵", country: "Japan", name: "JP-Sapporo-Base", type: "VLESS", load: 44, ping: 40, tier: "base" },
        { id: 78, flag: "🇰🇷", country: "South Korea", name: "KR-Incheon-Direct", type: "Trojan", load: 31, ping: 38, tier: "base" },
        { id: 79, flag: "🇸🇬", country: "Singapore", name: "SG-Tampines-Base", type: "Hysteria", load: 58, ping: 145, tier: "base" },
        { id: 80, flag: "🇬🇧", country: "UK", name: "UK-Birmingham-V2", type: "VLESS", load: 19, ping: 112, tier: "base" },
        { id: 81, flag: "🇨🇦", country: "Canada", name: "CA-Calgary-Direct", type: "Trojan", load: 22, ping: 48, tier: "base" },
        { id: 82, flag: "🇩🇪", country: "Germany", name: "DE-Cologne-V2", type: "VLESS", load: 26, ping: 115, tier: "base" },
        { id: 83, flag: "🇹🇼", country: "Taiwan", name: "TW-Taichung-Base", type: "Hysteria", load: 49, ping: 45, tier: "base" },
        { id: 84, flag: "🇫🇮", country: "Finland", name: "FI-Tampere-Direct", type: "Trojan", load: 15, ping: 130, tier: "base" },
    ];

    const [servers, setServers] = useState(initialServers);

    const randomizeStats = () => {
        setIsRefreshing(true);
        const newServers = servers.map(server => {
            // Random fluctuations
            // Load: +/- 5%
            const loadFluctuation = Math.floor(Math.random() * 11) - 5;
            let newLoad = server.load + loadFluctuation;
            newLoad = Math.max(0, Math.min(100, newLoad)); // Clamp between 0-100

            // Ping: +/- 10ms (roughly)
            const pingFluctuation = Math.floor(Math.random() * 21) - 10;
            let newPing = server.ping + pingFluctuation;
            newPing = Math.max(1, newPing);

            return { ...server, load: newLoad, ping: newPing };
        });

        setTimeout(() => {
            setServers(newServers);
            setLastUpdated(new Date());
            setIsRefreshing(false);
        }, 600); // Small fake delay for effect
    };

    useEffect(() => {
        // Initial randomize on mount
        randomizeStats();

        // Auto-refresh every 30 seconds
        const interval = setInterval(randomizeStats, 30000);
        return () => clearInterval(interval);
    }, []);

    const getTypeDisplay = (server) => {
        if (server.id === 1) return <span className="badge badge-accent badge-outline font-bold">Direct Fiber</span>;
        if (server.tier === "max") return <span className="badge badge-secondary badge-outline font-bold">Proprietary</span>;
        return <span className="badge badge-ghost badge-sm">{server.type}</span>;
    };

    const getPingColor = (ping) => {
        if (ping < 100) return "text-emerald-400";
        if (ping < 300) return "text-yellow-400";
        return "text-red-500";
    };

    const StatusRow = ({ server }) => (
        <tr className="hover:bg-white/5 transition-colors border-b border-white/5">
            <td className="font-medium text-lg">{server.flag}</td>
            <td className="text-gray-300">{server.country}</td>
            <td className="font-semibold text-white">{server.name}</td>
            <td>{getTypeDisplay(server)}</td>
            <td>
                <div className="flex items-center gap-2">
                    <progress className={`progress w-16 ${server.load > 80 ? 'progress-error' : 'progress-primary'}`} value={server.load} max="100"></progress>
                    <span className="text-xs text-gray-400">{server.load}%</span>
                </div>
            </td>
            <td className={`font-mono font-bold ${getPingColor(server.ping)}`}>
                {server.ping}ms
            </td>
        </tr>
    );

    const SectionHeader = ({ title, icon, color }) => (
        <div className={`flex items-center gap-3 text-xl font-bold mb-4 mt-8 pb-2 border-b border-white/10 ${color}`}>
            {icon}
            <h2>{title}</h2>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#110E1B]">
            {/* Simple Home Header */}
            <header className="px-6 py-4 flex items-center border-b border-white/5 bg-[#110E1B]/80 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
                    <a href="/" className="group relative flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <img
                            src="https://i.imgur.com/xuG3IY3.png"
                            alt="Nexitally Logo"
                            className="w-24 opacity-90"
                        />
                    </a>
                    <a href="/" className="btn btn-ghost btn-sm text-gray-400 hover:text-white">
                        Back to Home
                    </a>
                </div>
            </header>

            <div className="pt-10 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-4xl mr-6 md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Network Status
                        </h1>
                        <p className="text-gray-400 mt-2">
                            Real-time status of our global server infrastructure.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">
                            Last updated: {lastUpdated.toLocaleTimeString()}
                        </span>
                        <button
                            onClick={randomizeStats}
                            disabled={isRefreshing}
                            className={`btn btn-circle btn-ghost hover:rotate-180 transition-transform duration-500 ${isRefreshing ? 'animate-spin' : ''}`}
                        >
                            <FaSyncAlt className="text-xl text-primary" />
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto bg-[#161221] rounded-3xl p-6 border border-white/5 shadow-2xl">
                    <table className="table w-full">
                        <thead>
                            <tr className="text-gray-500 text-sm uppercase">
                                <th>Flag</th>
                                <th>Country</th>
                                <th>Server Name</th>
                                <th>Type</th>
                                <th>Load</th>
                                <th>Ping</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* CORE BACKBONE */}
                            <tr><td colSpan="6"><SectionHeader title="The Core Backbone (HQ)" icon={<FaServer />} color="text-red-500" /></td></tr>
                            {servers.filter(s => s.tier === 'core').map(s => <StatusRow key={s.id} server={s} />)}

                            {/* MAX TIER */}
                            <tr><td colSpan="6"><SectionHeader title="MAX TIER: Dedicated Gaming Lanes" icon={<FaGamepad />} color="text-purple-400" /></td></tr>
                            {servers.filter(s => s.tier === 'max').map(s => <StatusRow key={s.id} server={s} />)}

                            {/* PRO TIER */}
                            <tr><td colSpan="6"><SectionHeader title="PRO TIER: Premium Transit Nodes (IEPL/IPLC)" icon={<FaGem />} color="text-blue-400" /></td></tr>
                            {servers.filter(s => s.tier === 'pro').map(s => <StatusRow key={s.id} server={s} />)}

                            {/* BASE TIER */}
                            <tr><td colSpan="6"><SectionHeader title="BASE TIER: Standard Nodes" icon={<FaGlobe />} color="text-emerald-400" /></td></tr>
                            {servers.filter(s => s.tier === 'base').map(s => <StatusRow key={s.id} server={s} />)}
                        </tbody>
                    </table>
                </div>

                <div className="mt-10 text-center text-gray-500 text-sm">
                    <p>Ping times are estimated for the last mile from your current location proxy.</p>
                    <p>Load values represent the aggregate bandwidth utilization of the node.</p>
                </div>
            </div>
        </div>
    );
};

export default Network;
