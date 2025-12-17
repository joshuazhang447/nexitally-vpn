import React from 'react';
import { FaTwitter, FaGithub, FaTelegram, FaDiscord } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#050409] text-base-content border-t border-white/5 font-sans" id="footer">
            <div className="container mx-auto max-w-7xl px-4 md:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* --- Brand & Address --- */}
                    <div className="space-y-6">
                        <img src="https://i.imgur.com/xuG3IY3.png" alt="Nexitally Logo" className="w-32 pacity-90 hover:opacity-100 transition-opacity" />
                        <div className="text-sm text-base-content/60 leading-relaxed text-left">
                            <p className="font-bold text-base-content mb-1">Nexitally AS</p>
                            <p>Gaustadalléen 21</p>
                            <p>0349 Oslo, Norway</p>
                        </div>
                        <div className="flex gap-4 pt-2">
                            <a className="btn btn-circle btn-sm btn-ghost hover:bg-white/10 text-xl"><FaTwitter /></a>
                            <a className="btn btn-circle btn-sm btn-ghost hover:bg-white/10 text-xl"><FaGithub /></a>
                            <a className="btn btn-circle btn-sm btn-ghost hover:bg-white/10 text-xl"><FaTelegram /></a>
                        </div>
                    </div>

                    {/* --- Product --- */}
                    <div className="flex flex-col gap-4">
                        <h6 className="footer-title text-white opacity-100">Product</h6>
                        <a href="#features" className="link link-hover text-base-content/70 hover:text-primary transition-colors">Features</a>
                        <a href="#pricing" className="link link-hover text-base-content/70 hover:text-primary transition-colors">Pricing</a>
                        <a href="#download" className="link link-hover text-base-content/70 hover:text-primary transition-colors">Download</a>
                        <a href="#business" className="link link-hover text-base-content/70 hover:text-primary transition-colors">Enterprise</a>
                        <a className="link link-hover text-base-content/70 hover:text-primary transition-colors">Server Status</a>
                    </div>

                    {/* --- Resources --- */}
                    <div className="flex flex-col gap-4" id="footer-resources">
                        <h6 className="footer-title text-white opacity-100">Resources</h6>
                        <a className="link link-hover text-base-content/70 hover:text-primary transition-colors">Setup Guides</a>
                        <a className="link link-hover text-base-content/70 hover:text-primary transition-colors">Knowledge Base</a>
                        <a className="link link-hover text-base-content/70 hover:text-primary transition-colors">API Documentation</a>
                        <a className="link link-hover text-base-content/70 hover:text-primary transition-colors">Community Forum</a>
                    </div>

                    {/* --- Legal --- */}
                    <div className="flex flex-col gap-4">
                        <h6 className="footer-title text-white opacity-100">Legal</h6>
                        <a className="link link-hover text-base-content/70 hover:text-primary transition-colors">Terms of Service</a>
                        <a className="link link-hover text-base-content/70 hover:text-primary transition-colors">Privacy Policy</a>
                        <a className="link link-hover text-base-content/70 hover:text-primary transition-colors">Cookie Policy</a>
                        <a className="link link-hover text-base-content/70 hover:text-primary transition-colors">GDPR Compliance</a>
                    </div>

                </div>

                <div className="divider opacity-10 my-10"></div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-base-content/40">
                    <p>© {new Date().getFullYear()} Nexitally AS. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                            All Systems Operational
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
