import React from 'react';

const DownloadConfirm = () => {
    return (
        <div className="min-h-screen bg-[#0F0B15] text-white font-sans selection:bg-emerald-500/30 flex flex-col relative overflow-hidden">

            {/* 1. Background Grid Pattern & Ambient Light */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-emerald-500/20 opacity-20 blur-[100px]"></div>
                <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-purple-500/10 opacity-20 blur-[100px]"></div>
            </div>

            {/* Header */}
            <header className="p-6 flex justify-center border-b border-white/5 bg-[#0F0B15]/80 backdrop-blur-xl sticky top-0 z-50">
                <a href="/" className="group relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                    <img
                        src="https://i.imgur.com/xuG3IY3.png"
                        alt="Nexitally Logo"
                        className="w-24 relative z-10 opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                </a>
            </header>

            {/* Main Content */}
            <div className="flex-grow flex flex-col items-center justify-center p-4 text-center z-10">

                <div className="bg-[#15111D]/60 backdrop-blur-2xl border border-white/10 p-10 md:p-14 rounded-[2.5rem] max-w-lg w-full shadow-2xl relative overflow-hidden group">

                    {/* Subtle top highlight on the card */}
                    <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

                    {/* --- THE UPGRADED ICON --- */}
                    <div className="flex justify-center mb-10 relative">
                        {/* Outer Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-500/20 blur-[40px] rounded-full pointer-events-none"></div>

                        {/* The Icon Container */}
                        <div className="relative w-24 h-24">
                            {/* Ring Animation */}
                            <div className="absolute inset-0 rounded-full border-2 border-emerald-500/20"></div>
                            <div className="absolute inset-0 rounded-full border-2 border-t-emerald-500 border-r-emerald-500/50 border-b-transparent border-l-transparent animate-[spin_3s_linear_infinite]"></div>

                            {/* Inner Circle */}
                            <div className="absolute inset-2 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)] flex items-center justify-center animate-bounce-slight">
                                {/* Custom SVG Checkmark */}
                                <svg
                                    className="w-10 h-10 text-white drop-shadow-md"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 13l4 4L19 7" className="animate-[draw_0.6s_ease-out_forwards]" style={{ strokeDasharray: 24, strokeDashoffset: 0 }} />
                                </svg>
                            </div>
                        </div>
                    </div>
                    {/* ------------------------- */}

                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 tracking-tight">
                        Download Started
                    </h1>

                    <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                        Your secure connection is establishing. <br className="hidden md:block" />
                        Please check your downloads folder.
                    </p>

                    {/* Manual Retry Box */}
                    <div className="text-sm text-gray-500 bg-[#0F0B15]/50 p-5 rounded-2xl border border-dashed border-white/10 hover:border-emerald-500/30 transition-colors duration-300">
                        <p className="mb-2">Download didn't start automatically?</p>
                        <a onClick={(e) => {
                            e.preventDefault();
                            window.location.reload();
                        }}
                            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors group/link">
                            <span>Click here to retry manually</span>
                            <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    <div className="mt-10">
                        <a href="/" className="px-6 py-3 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium">
                            Back to Home
                        </a>
                    </div>
                </div>

            </div>

            {/* Custom Styles for Animation */}
            <style>{`
        @keyframes draw {
          from { stroke-dashoffset: 24; }
          to { stroke-dashoffset: 0; }
        }
        .animate-bounce-slight {
          animation: bounce-slight 3s infinite ease-in-out;
        }
        @keyframes bounce-slight {
          0%, 100% { transform: translateY(-3%); }
          50% { transform: translateY(3%); }
        }
      `}</style>
        </div>
    );
};

export default DownloadConfirm;