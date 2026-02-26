import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const About = () => {
    return (
        <>
            <Navbar />
            <div className="bg-page text-fg min-h-screen">
                <section className="relative overflow-hidden">
                    <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[min(700px,100vw)] h-[600px] rounded-full bg-act/[0.04] blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-[-10%] right-[-5%] w-[300px] h-[300px] rounded-full bg-gold/[0.03] blur-[80px] pointer-events-none" />

                    <div className="relative max-w-3xl mx-auto px-5 sm:px-8 pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-24 text-center u-fade-up">
                        <span className="inline-block mb-4 sm:mb-5 px-3.5 py-1 text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase rounded-full bg-act/[0.07] text-act border border-act/15">
                            About BagNest
                        </span>

                        <h1 className="text-[1.75rem] sm:text-4xl md:text-[2.75rem] font-bold tracking-[-0.02em] leading-[1.15]">
                            Curated Bags.{" "}
                            <span className="bg-gradient-to-r from-act to-[#a78bfa] bg-clip-text text-transparent">
                                Trusted Quality.
                            </span>
                        </h1>

                        <p className="mt-4 sm:mt-6 text-[15px] sm:text-lg text-fg-3 max-w-xl mx-auto leading-[1.7]">
                            Bagnest brings carefully selected bags from reliable wholesalers
                            directly to customers in our local community.
                        </p>
                    </div>
                </section>
                <section className="py-16 sm:py-20 md:py-24 u-gradient-mesh">
                    <div className="max-w-5xl mx-auto px-5 sm:px-8">
                        <div className="grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
                            <div className="relative group mx-auto md:mx-0 w-full max-w-md md:max-w-none u-fade-up">
                                <div className="absolute -inset-3 rounded-3xl bg-act/[0.05] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <img
                                    src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80"
                                    alt="Bag collection display"
                                    className="relative rounded-2xl shadow-lg w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] object-cover ring-1 ring-edge"
                                />
                                <div className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-act shadow-glow u-float" />
                            </div>
                            <div className="text-center md:text-left u-fade-up" style={{ animationDelay: "80ms" }}>
                                <span className="inline-block mb-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] uppercase text-gold">
                                    Our Story
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold tracking-[-0.015em] leading-snug">
                                    Built on Trust & Simplicity
                                </h2>

                                <div className="mt-3 mx-auto md:mx-0 h-[3px] w-10 rounded-full bg-gradient-to-r from-act to-act/30" />

                                <p className="mt-5 sm:mt-6 text-fg-2 text-[14px] sm:text-[15px] leading-[1.8]">
                                    What started as a small local initiative is now a growing
                                    collection of thoughtfully chosen designs.
                                </p>
                                <p className="mt-3 text-fg-3 text-[14px] sm:text-[15px] leading-[1.8]">
                                    We focus on quality, practicality, and value —
                                    so you get reliable bags without overpaying.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-16 sm:py-20 md:py-24">
                    <div className="max-w-5xl mx-auto px-5 sm:px-8">

                        <div className="text-center mb-10 sm:mb-14 u-fade-up">
                            <span className="inline-block mb-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] uppercase text-gold">
                                Why BagNest
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.015em]">
                                What Sets Us Apart
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 u-stagger">

                            {[
                                {
                                    title: "Quality Selection",
                                    text: "Carefully sourced from trusted wholesale suppliers.",
                                    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
                                },
                                {
                                    title: "Fair Pricing",
                                    text: "Competitive prices without compromising durability.",
                                    icon: "M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6",
                                },
                                {
                                    title: "Local Service",
                                    text: "Personalized support for our community customers.",
                                    icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
                                },
                            ].map(({ title, text, icon }) => (
                                <div
                                    key={title}
                                    className="group bg-card rounded-2xl border border-edge
                                           px-6 py-7 sm:p-8
                                           text-center
                                           shadow-sm hover:shadow-card-hover hover:-translate-y-0.5
                                           transition-all duration-300 ease-[var(--ease-spring)]"
                                >
                                    <div className="w-11 h-11 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-5 rounded-xl bg-act/[0.06] flex items-center justify-center group-hover:bg-act/[0.12] transition-colors duration-300">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-act" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                            <path d={icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
                                    <p className="mt-2 sm:mt-3 text-fg-3 text-[13px] sm:text-sm leading-relaxed">
                                        {text}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>
                <section className="relative overflow-hidden py-20 sm:py-24 md:py-28 text-center">
                    <div className="absolute inset-0 bg-[#1a1a2e]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-act/[0.07] via-transparent to-gold/[0.04]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(500px,90vw)] h-[400px] rounded-full bg-act/[0.06] blur-[100px] pointer-events-none" />

                    <div className="relative max-w-xl mx-auto px-5 sm:px-8 u-fade-up">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 mt-8 sm:mt-10
                                   px-7 py-3 sm:px-8 sm:py-3.5
                                   bg-act text-white rounded-xl
                                   font-semibold text-[13px] sm:text-sm
                                   shadow-glow hover:bg-act-hover
                                   hover:shadow-[0_0_32px_-4px_var(--color-act-glow)]
                                   transition-all duration-300 ease-[var(--ease)]"
                        >
                            Explore Collection
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </section>
                <footer className="border-t border-edge py-6 sm:py-8 text-center px-5">
                    <p className="text-[11px] sm:text-xs text-fg-4 tracking-wide">
                        © {new Date().getFullYear()} BagNest — Curated bags, trusted quality.
                    </p>
                </footer>

            </div>
        </>
    )
};

export default About;