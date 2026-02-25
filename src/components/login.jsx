import React, { useState } from "react";
import { Input, Button, Spinner } from "./ui";
import { useNavigate } from "react-router";
export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const Navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("http://localhost:3000/bagnest/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message);
            }
            localStorage.setItem("adminToken", data.token);
            Navigate("/admin");
        } catch (err) {
            console.log(err);
            setLoading(false);
            window.alert(err.message);
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
            <div
                className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full opacity-30 blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, var(--color-act) 0%, transparent 70%)" }}
            />
            <div
                className="absolute -bottom-40 -right-40 w-[480px] h-[480px] rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)" }}
            />
            <div className="relative w-full max-w-[420px] u-fade-up">
                <div className="u-glass rounded-[var(--radius-2xl)] shadow-xl p-8 sm:p-10">
                    <div className="text-center mb-8">
                        <div className="w-14 h-14 mx-auto mb-4 rounded-[var(--radius-xl)] bg-gradient-to-br from-act to-[#6a48f0] flex items-center justify-center shadow-glow">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <path d="M16 10a4 4 0 01-8 0" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-fg tracking-tight">
                            Welcome back
                        </h1>
                        <p className="text-sm text-fg-3 mt-1">
                            Sign in to your BagNest account
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label
                                htmlFor="login-username"
                                className="block text-[13px] font-medium text-fg-2 mb-2"
                            >
                                Username
                                <span className="text-act ml-0.5">*</span>
                            </label>
                            <div className="relative">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-fg-4">
                                </span>
                                <input
                                    id="login-username"
                                    type="text"
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    className="w-full h-11 pl-10 pr-4 bg-page border border-edge rounded-[var(--radius-md)] text-sm text-fg placeholder:text-fg-4 outline-none transition-all duration-200 focus:border-act focus:ring-2 focus:ring-act-ring focus:bg-white"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="login-password"
                                className="block text-[13px] font-medium text-fg-2 mb-2"
                            >
                                Password
                                <span className="text-act ml-0.5">*</span>
                            </label>
                            <div className="relative">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-fg-4">
                                </span>
                                <input
                                    id="login-password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full h-11 pl-10 pr-11 bg-page border border-edge rounded-[var(--radius-md)] text-sm text-fg placeholder:text-fg-4 outline-none transition-all duration-200 focus:border-act focus:ring-2 focus:ring-act-ring focus:bg-white"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-fg-4 hover:text-fg-2 transition-colors cursor-pointer"
                                    tabIndex={-1}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? (
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                                            <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                                            <line x1="1" y1="1" x2="23" y2="23" />
                                        </svg>
                                    ) : (
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                        <Button
                            type="submit"
                            disabled={loading || !username || !password}
                            className="w-full !h-12 text-sm font-semibold mt-2"
                        >
                            {loading ? (
                                <>
                                    <Spinner size={16} className="text-white" />
                                    Signing in…
                                </>
                            ) : (
                                "Sign In"
                            )}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}