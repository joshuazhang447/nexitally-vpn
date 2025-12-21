import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100/95 backdrop-blur-xl text-base-content sticky top-0 z-50 px-4 md:px-8 border-b border-white/5">

            {/* --- LEFT: Logo & Mobile Menu --- */}
            <div className="navbar-start w-auto lg:w-1/3">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <ul className="p-2 bg-base-100 rounded-box w-52 shadow-xl border border-white/5">
                            <li><a href="#business">Enterprise Solutions</a></li>
                            <li><a>Dedicated Lines</a></li>
                            <li><a>Press & Media</a></li>
                        </ul>
                        <li><a>Resources</a></li>
                    </ul>
                </div>

                <a href="/" className="btn btn-ghost gap-2 px-0 hover:bg-transparent">
                    <img src="https://i.imgur.com/xuG3IY3.png" alt="Nexitally VPN" className="w-28 sm:w-38 rounded pb-7" />
                </a>
            </div>

            {/* --- CENTER: Rich Desktop Navigation --- */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1">

                    {/* Rich Dropdown: Why Nexitally */}
                    <li className="group relative"> {/* Added relative here to anchor the dropdown */}
                        <details name="nav-menu">
                            <summary className="font-semibold text-[15px] cursor-pointer hover:text-primary transition-colors list-none">
                                Why Nexitally
                            </summary>

                            {/* Fixed UL: 
            1. 'absolute' allows it to be wider than the parent text
            2. 'w-[500px]' gives it that nice wide look
            3. 'z-50' ensures it floats above other content
        */}
                            <ul className="absolute top-full left-0 mt-4 w-[380px] p-6 bg-base-100/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 grid grid-cols-1 gap-4 z-50">

                                {/* 1. Infrastructure */}
                                <RichItem
                                    title="IEPL & IPLC Dedicated Circuits"
                                    desc="Bypass the toughest national firewalls using our private lines. Pure, unrestricted connection."
                                    href="#features"
                                />

                                {/* 2. Stealth */}
                                <RichItem
                                    title="Stealth Protocol Matrix"
                                    desc="Powered by V2Ray, VLESS, and Shadowsocks to mask your VPN traffic as normal browsing. 99% uptime."
                                    href="#features"
                                />

                                {/* 3. Speed/Gaming */}
                                <RichItem
                                    title="Intelligent Relay Network"
                                    desc="Traffic is routed via the closest domestic node before hitting the global network, slashing ping and jitter."
                                    href="#features"
                                />

                                {/* 4. Coverage */}
                                <RichItem
                                    title="84 Premium Global Nodes"
                                    desc="Instant access to 50+ countries. Unlock region-locked 4K content and international services with a single tap."
                                    href="#features"
                                />

                                {/* 5. Privacy */}
                                <RichItem
                                    title="Zero-Trace Policy"
                                    desc="We operate on a strict log-free policy. Your data isn't just hidden; it does not exist on our servers."
                                    href="#features"
                                />

                            </ul>
                        </details>
                    </li>

                    {/* Simple Link: Pricing */}
                    <li><a href="#pricing" className="font-semibold text-[15px] hover:text-primary transition-colors cursor-pointer">Pricing</a></li>

                    {/* Rich Dropdown: Download */}
                    <li>
                        <details name="nav-menu">
                            <summary className="font-semibold text-[15px] hover:text-primary transition-colors">Download</summary>
                            <ul className="p-4 bg-base-100 rounded-xl w-[400px] shadow-2xl border border-white/5 grid grid-cols-2 gap-2">
                                <RichItem title="Windows" desc="v4.0.1 (64-bit)" href="#download-windows" />
                                <RichItem title="macOS" desc="For M1/M5 & Intel" href="#download-macos" />
                                <RichItem title="Linux" desc="CLI & GUI app" href="#download-linux" />
                                <RichItem title="iOS & Android" desc="Mobile protection" href="#download-mobile" />
                            </ul>
                        </details>
                    </li>

                    {/* Rich Dropdown: Resources */}
                    <li>
                        <details name="nav-menu">
                            <summary className="font-semibold text-[15px] hover:text-primary transition-colors">Resources</summary>
                            <ul className="p-4 bg-base-100 rounded-xl w-[300px] shadow-2xl border border-white/5">
                                <RichItem title="Blog" desc="Privacy news & updates" />
                                <RichItem title="Help Center" desc="Guides and troubleshooting" />
                                <RichItem title="Community" desc="Join the discussion" />
                            </ul>
                        </details>
                    </li>

                    <li><a href="#business" className="font-semibold text-[15px] hover:text-primary transition-colors text-nowrap">Business VPN</a></li>
                </ul>
            </div>

            {/* --- RIGHT: Actions --- */}
            <div className="navbar-end w-auto lg:w-1/3">
                <Link to="/login" className="btn btn-ghost hidden sm:inline-flex mx-2 font-medium">Sign in</Link>

                {/* RAINBOW BUTTON */}
                <a href="#pricing" className="btn btn-rainbow rounded-full px-8 text-base font-bold shadow-lg">
                    Get Nexitally VPN
                </a>
            </div>
        </div>
    );
};

// Helper Component for the Rich Menu Items
const RichItem = ({ title, desc, href }) => {
    return (
        <li>
            <a href={href || "#"} className="block p-2 hover:bg-base-200 rounded-lg group">
                <div className="text-primary font-bold group-hover:text-primary-focus transition-colors">
                    {title}
                </div>
                <div className="text-xs text-base-content/60 font-medium mt-0.5">
                    {desc}
                </div>
            </a>
        </li>
    );
};

export default Header;
