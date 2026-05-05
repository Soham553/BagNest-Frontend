import { motion } from "motion/react";

export default function Hero() {
  const scrollToShop = () => {
    document.getElementById("shop-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 px-5 lg:px-8">
      {/* Abstract Background Elements */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[min(800px,100vw)] h-[600px] rounded-full bg-act/10 blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-gold/10 blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-edge bg-glass backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-act shadow-glow animate-pulse" />
          <span className="text-xs font-medium tracking-widest uppercase text-fg-2">The Midnight Luxe Collection</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.1] mb-6"
        >
          Elevate Your Style with <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-act via-act-hover to-gold relative inline-block">
             Premium Bags
             <div className="absolute -bottom-2 left-0 w-full h-[4px] bg-gradient-to-r from-act to-gold rounded-full opacity-50 blur-sm" />
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-fg-3 max-w-2xl mb-10 leading-relaxed"
        >
          Discover curated collections designed for the modern aesthetic. Uncompromising quality meets striking design, sourced just for you.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button 
            onClick={scrollToShop}
            className="px-8 py-4 bg-act hover:bg-act-hover text-white rounded-full font-semibold transition-all duration-300 shadow-glow hover:shadow-[0_0_40px_-5px_var(--color-act-glow)] hover:-translate-y-1"
          >
            Explore Collection
          </button>
          <a 
            href="https://api.whatsapp.com/send?phone=919022631553&text=Hi%2C%20I'm%20interested%20in%20BagNest" 
            target="_blank" rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border border-edge hover:border-edge-2 text-fg rounded-full font-semibold transition-all duration-300 hover:bg-raised"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase text-fg-4">Scroll to discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-fg-4 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
