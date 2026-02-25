import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Pricing = () => {
    return (
        <div className="bg-white text-gray-900">

            {/* ===== Header ===== */}
            <section className="text-center py-20 lg:py-28 px-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                    Simple & Direct Buying Process
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    We keep things straightforward. Browse, connect, and purchase with ease.
                </p>
            </section>

            {/* ===== Steps ===== */}
            <section className="pb-24 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 lg:gap-12 text-center">

                    {/* Step 1 */}
                    <div className="bg-gray-50 rounded-2xl shadow-sm p-8 lg:p-10 hover:shadow-lg transition duration-300">
                        <div className="text-4xl font-bold text-black">01</div>
                        <h3 className="mt-6 text-xl font-semibold">Browse Collection</h3>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Visit our website and explore available bag designs with detailed specifications.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-gray-50 rounded-2xl shadow-sm p-8 lg:p-10 hover:shadow-lg transition duration-300">
                        <div className="text-4xl font-bold text-black">02</div>
                        <h3 className="mt-6 text-xl font-semibold">Connect Instantly</h3>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Click on the{" "}
                            <span className="font-medium inline-flex items-center gap-1">
                                <FaInstagram className="text-pink-500" /> Instagram
                            </span>{" "}
                            or{" "}
                            <span className="font-medium inline-flex items-center gap-1">
                                <FaWhatsapp className="text-green-500" /> WhatsApp
                            </span>{" "}
                            button to contact us directly.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-gray-50 rounded-2xl shadow-sm p-8 lg:p-10 hover:shadow-lg transition duration-300">
                        <div className="text-4xl font-bold text-black">03</div>
                        <h3 className="mt-6 text-xl font-semibold">Confirm & Purchase</h3>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Share your details, confirm availability, and complete your purchase smoothly.
                        </p>
                    </div>

                </div>
            </section>

            {/* ===== CTA ===== */}
            <div className="flex justify-center pb-24">
                <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2
                     px-8 py-3.5
                     bg-act text-white rounded-xl
                     font-semibold text-sm
                     shadow-glow hover:bg-act-hover
                     hover:shadow-[0_0_32px_-4px_var(--color-act-glow)]
                     transition-all duration-300"
                >
                    Explore Collection
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>

        </div>
    );
};

export default Pricing;