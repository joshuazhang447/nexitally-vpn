import React, { useState } from 'react';
import { HiLockClosed, HiMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Placeholder login logic
        console.log("Login attempted with:", email);
    };

    return (
        <div className="min-h-screen bg-[#0F0B15] flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans text-white selection:bg-primary/30">

            {/* Background Ambient Glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="w-full max-w-md relative z-10">

                {/* Logo Header */}
                <div className="text-center mb-8">
                    <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
                        <img src="https://i.imgur.com/xuG3IY3.png" alt="Nexitally Logo" className="h-12 mx-auto" />
                    </Link>
                </div>

                {/* Login Card */}
                <div className="bg-[#15111D]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 shadow-2xl">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold mb-2">Welcome Access</h1>
                        <p className="text-gray-500 text-sm">Enter your credentials to access the dashboard.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email</label>
                            <div className="relative group">
                                <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-12 py-3.5 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-700"
                                    placeholder="name@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Password</label>
                            <div className="relative group">
                                <HiLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-12 py-3.5 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-700"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                            <label className="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-gray-300">
                                <input type="checkbox" className="checkbox checkbox-xs checkbox-primary rounded border-white/20" />
                                Remember me
                            </label>
                            <a href="#" className="text-primary hover:text-primary-focus transition-colors">Forgot password?</a>
                        </div>

                        <button type="submit" className="btn btn-primary w-full rounded-xl text-base shadow-lg shadow-primary/25">
                            Sign In
                        </button>
                    </form>
                </div>

                {/* Footer / Registration Link */}
                <div className="mt-8 text-center bg-white/5 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
                    <p className="text-white font-medium mb-1">Don't have an account?</p>
                    <p className="text-xs text-gray-500 mb-4 leading-relaxed max-w-xs mx-auto">
                        We do not allow free registration. You must purchase a plan to create an account.
                    </p>
                    <Link
                        to="/payment?plan=pro"
                        className="btn btn-sm btn-outline btn-ghost border-white/10 hover:bg-white/10 hover:border-white/20 text-gray-300 font-normal rounded-lg w-full"
                    >
                        Purchase Plan & Create Account
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Login;
