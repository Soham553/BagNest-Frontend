import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Pricing = () => {
    return (
        <div className="bg-page min-h-screen text-fg font-sans selection:bg-act selection:text-white">
            <Navbar />
            <main>
                <section className="relative text-center pt-32 pb-20 lg:pt-40 lg:pb-28 px-5 overflow-hidden">
                    <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[min(700px,100vw)] h-[600px] rounded-full bg-act/10 blur-[120px] pointer-events-none mix-blend-screen" />
                    
                    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                        <motion.span 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block mb-6 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full border border-act/30 bg-act/10 text-act"
                        >
                            How It Works
                        </motion.span>

                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
                        >
                            Simple & Direct <br className="hidden sm:block"/>
                            <span className="bg-gradient-to-r from-act to-act-hover bg-clip-text text-transparent">
                                Buying Process
                            </span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-6 text-lg sm:text-xl text-fg-3 max-w-2xl mx-auto leading-relaxed"
                        >
                            We keep things straightforward. Browse our curated collection, connect instantly, and purchase with ease.
                        </motion.p>
                    </div>
                </section>

                <section className="pb-32 px-5 relative z-10">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 lg:gap-8 text-center">
                        {[
                            {
                                step: "01",
                                title: "Browse Collection",
                                desc: "Visit our website and explore available bag designs with detailed specifications and high-quality images.",
                            },
                            {
                                step: "02",
                                title: "Connect Instantly",
                                desc: (
                                    <>
                                        Click on the{" "}
                                        <span className="font-semibold text-fg inline-flex items-center gap-1 mx-1 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                                            <FaInstagram className="text-[#E1306C]" /> Instagram
                                        </span>{" "}
                                        or{" "}
                                        <span className="font-semibold text-fg inline-flex items-center gap-1 mx-1 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                                            <FaWhatsapp className="text-[#25D366]" /> WhatsApp
                                        </span>{" "}
                                        button to contact us directly.
                                    </>
                                )
                            },
                            {
                                step: "03",
                                title: "Confirm & Purchase",
                                desc: "Share your details, confirm availability with our team, and complete your purchase smoothly securely.",
                            }
                        ].map((item, i) => (
                            <motion.div 
                                key={item.step}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className="group relative bg-card rounded-[2rem] border border-edge p-10 hover:border-act/50 hover:shadow-glow transition-all duration-300 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-5 font-black text-8xl pointer-events-none group-hover:scale-110 transition-transform duration-500">
                                    {item.step}
                                </div>
                                <div className="text-4xl font-bold text-act mb-6 group-hover:scale-110 origin-left transition-transform duration-300 inline-block">{item.step}</div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-fg-3 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="flex justify-center pb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-act text-white rounded-full font-bold shadow-glow hover:bg-act-hover hover:shadow-[0_0_40px_-5px_var(--color-act-glow)] hover:-translate-y-1 transition-all duration-300"
                        >
                            Explore Collection
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Pricing;