import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
    return (
        <div className="bg-page min-h-screen text-fg font-sans selection:bg-act selection:text-white">
            <Navbar />
            <main>
                <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
                    <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[min(800px,100vw)] h-[600px] rounded-full bg-act/10 blur-[120px] pointer-events-none mix-blend-screen" />
                    <div className="absolute bottom-[-10%] right-[-5%] w-[300px] h-[300px] rounded-full bg-gold/10 blur-[100px] pointer-events-none mix-blend-screen" />

                    <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
                        <motion.span 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block mb-6 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full border border-act/30 bg-act/10 text-act"
                        >
                            About BagNest
                        </motion.span>

                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
                        >
                            Curated Bags. <br className="hidden sm:block" />
                            <span className="bg-gradient-to-r from-act to-act-hover bg-clip-text text-transparent">
                                Trusted Quality.
                            </span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg sm:text-xl text-fg-3 max-w-2xl mx-auto leading-relaxed"
                        >
                            Bagnest brings carefully selected bags from reliable wholesalers
                            directly to customers in our local community, elevating everyday style.
                        </motion.p>
                    </div>
                </section>

                <section className="py-20 sm:py-32 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-act/5 to-transparent pointer-events-none" />
                    <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative group mx-auto md:mx-0 w-full max-w-md md:max-w-none"
                            >
                                <div className="absolute -inset-4 rounded-[2rem] bg-act/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <img
                                    src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80"
                                    alt="Bag collection display"
                                    className="relative rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover ring-1 ring-edge grayscale hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-act shadow-glow animate-pulse" />
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-center md:text-left"
                            >
                                <span className="inline-block mb-3 text-xs font-bold tracking-widest uppercase text-gold">
                                    Our Story
                                </span>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                                    Built on Trust & Simplicity
                                </h2>
                                
                                <div className="mx-auto md:mx-0 h-1 w-16 rounded-full bg-gradient-to-r from-act to-transparent mb-8" />

                                <div className="space-y-6 text-fg-3 text-lg leading-relaxed">
                                    <p>
                                        What started as a small local initiative is now a growing
                                        collection of thoughtfully chosen designs.
                                    </p>
                                    <p>
                                        We focus on quality, practicality, and value —
                                        so you get reliable, premium-feeling bags without overpaying. Every piece is selected with intention.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="py-20 sm:py-32 bg-[#08080b]">
                    <div className="max-w-6xl mx-auto px-5 sm:px-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16 sm:mb-20"
                        >
                            <span className="inline-block mb-3 text-xs font-bold tracking-widest uppercase text-gold">
                                Why BagNest
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                                What Sets Us Apart
                            </h2>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                            {[
                                {
                                    title: "Quality Selection",
                                    text: "Carefully sourced from trusted wholesale suppliers, ensuring durability and style.",
                                    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
                                },
                                {
                                    title: "Fair Pricing",
                                    text: "Competitive prices without compromising on the premium feel you deserve.",
                                    icon: "M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6",
                                },
                                {
                                    title: "Local Service",
                                    text: "Personalized support and dedication to our community of customers.",
                                    icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
                                },
                            ].map(({ title, text, icon }, i) => (
                                <motion.div
                                    key={title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.15 }}
                                    className="group bg-card rounded-2xl border border-edge p-8 sm:p-10 text-center hover:border-act/50 hover:shadow-glow transition-all duration-300"
                                >
                                    <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-act/10 flex items-center justify-center group-hover:bg-act group-hover:scale-110 transition-all duration-300">
                                        <svg className="w-7 h-7 text-act group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d={icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{title}</h3>
                                    <p className="text-fg-4 leading-relaxed">
                                        {text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden py-32 text-center">
                    <div className="absolute inset-0 bg-act/5" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,100vw)] h-[500px] rounded-full bg-act/10 blur-[120px] pointer-events-none" />

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8"
                    >
                        <h2 className="text-4xl font-bold tracking-tight mb-8">Ready to Elevate Your Style?</h2>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-act text-white rounded-full font-bold shadow-glow hover:bg-act-hover hover:shadow-[0_0_40px_-5px_var(--color-act-glow)] hover:-translate-y-1 transition-all duration-300"
                        >
                            Explore Collection
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </div>
    )
};

export default About;