import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Badge, LinkButton, Skeleton } from "./ui";

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
const IgIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

function CardSkeleton() {
  return (
    <div className="relative aspect-square sm:aspect-[4/5] bg-raised/50 rounded-2xl border border-edge overflow-hidden animate-pulse">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
        <div className="h-4 bg-white/10 rounded w-3/4" />
        <div className="h-5 bg-white/10 rounded w-1/3" />
      </div>
    </div>
  );
}

function ProductCard({ name, price, image, video, height, width, num_of_pockets, onImageClick }) {
  const waNumber = `${import.meta.env.VITE_wsnum}`;

  const igLink = "https://instagram.com/instylever";


  const images = Array.isArray(image) ? image : image ? [image] : [];
  const videos = Array.isArray(video) ? video : video ? [video] : [];

  const msg = encodeURIComponent(
    `I want to buy this product\n\nProduct: ${name}\nPrice: ₹${price}\nImage: ${images[0] || ""}`
  );

  const [currentIndex, setcurrentIndex] = useState(0);
  const media = [
    ...images.map(img => ({ type: "image", value: img })),
    ...videos.map(vid => ({ type: "youtube", value: vid }))
  ];
  const size = media.length;
  const currentItem = media[currentIndex];

  if (!currentItem) return null;

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative aspect-square sm:aspect-[4/5] rounded-2xl overflow-hidden bg-[#0a0a0c] cursor-pointer"
      onClick={() => onImageClick && onImageClick(images[currentIndex], name)}
    >
      {/* Media Layer */}
      {currentItem.type === "image" ? (
        <motion.img
          src={currentItem.value}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${currentItem.value}?autoplay=1&mute=1&loop=1&playlist=${currentItem.value}&controls=0`}
          allow="autoplay"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      )}

      {/* Elegant Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl group-hover:ring-act/50 transition-colors duration-500 pointer-events-none" />

      {/* Floating Action Buttons (Top Right) */}
      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 sm:-translate-y-2 sm:group-hover:translate-y-0">
        <a
          href={`https://api.whatsapp.com/send?phone=${waNumber}&text=${msg}`}
          target="_blank" rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-8 h-8 rounded-full bg-wa/20 backdrop-blur-md text-wa flex items-center justify-center border border-wa/30 hover:bg-wa hover:text-white transition-all shadow-lg"
          title="Buy on WhatsApp"
        >
          <WaIcon />
        </a>
        <a
          href={igLink}
          target="_blank" rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center border border-white/20 hover:bg-[#E1306C] hover:border-[#E1306C] transition-all shadow-lg"
          title="View on Instagram"
        >
          <IgIcon />
        </a>
      </div>

      {/* Carousel Controls */}
      {size > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); setcurrentIndex(prev => prev === 0 ? size - 1 : prev - 1); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-black/40 text-white backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-act"
          >‹</button>
          <button
            onClick={(e) => { e.stopPropagation(); setcurrentIndex(prev => prev === size - 1 ? 0 : prev + 1); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-black/40 text-white backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-act"
          >›</button>
        </>
      )}

      {/* Content Overlay (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex flex-col justify-end transform transition-transform duration-300">
        <h3 className="text-sm sm:text-base font-medium text-white leading-tight line-clamp-1 mb-1 shadow-sm">
          {name}
        </h3>

        <div className="flex items-end justify-between mt-1">
          <p className="text-xl sm:text-2xl font-bold text-gold tracking-tight leading-none drop-shadow-md">
            <span className="text-xs sm:text-sm font-semibold text-gold-dim mr-0.5 relative -top-1">₹</span>{price}
          </p>
        </div>

        {/* Details (Appears slightly on hover or always on mobile) */}
        {(height || width || num_of_pockets != null) && (
          <div className="flex flex-wrap gap-1.5 mt-3 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-300 delay-75">
            {height && <span className="px-2 py-0.5 text-[9px] uppercase tracking-widest font-semibold bg-white/10 backdrop-blur-sm border border-white/10 rounded text-fg-2">{height} cm H</span>}
            {width && <span className="px-2 py-0.5 text-[9px] uppercase tracking-widest font-semibold bg-white/10 backdrop-blur-sm border border-white/10 rounded text-fg-2">{width} cm W</span>}
            {num_of_pockets != null && <span className="px-2 py-0.5 text-[9px] uppercase tracking-widest font-semibold bg-white/10 backdrop-blur-sm border border-white/10 rounded text-fg-2">{num_of_pockets} pkts</span>}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function ProductCards() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/bagnest/products/`)
      .then(r => {
        if (!r.ok) throw new Error("Failed to fetch products");
        return r.json();
      })
      .then(d => {
        setItems(Array.isArray(d.Products) ? d.Products : []);
        setLoading(false);
      })
      .catch(e => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {Array.from({ length: 12 }).map((_, i) => <CardSkeleton key={i} />)}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center px-5">
        <div className="text-center max-w-xs bg-card p-8 rounded-xl border border-edge backdrop-blur-xl">
          <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-err/10 border border-err/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-err" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <p className="text-sm font-semibold text-fg mb-1.5">Something went wrong</p>
          <p className="text-xs text-fg-4">{error}</p>
        </div>
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center px-5">
        <div className="text-center max-w-xs bg-card p-8 rounded-xl border border-edge backdrop-blur-xl">
          <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
          </div>
          <p className="text-sm font-semibold text-fg mb-1.5">No products found</p>
          <p className="text-xs text-fg-4">Our collection is currently being updated.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-8">
        <div className="flex items-end justify-between mb-6 sm:mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1">Curated Collection</h2>
            <p className="text-xs sm:text-sm text-fg-4">Premium bags handpicked for you.</p>
          </div>
          <span className="hidden sm:inline-block text-sm text-fg-4">{items.length} items</span>
        </div>

        {/* Ultra-compact grid: 2 cols on mobile, up to 6 on ultra-wide */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {items.map(p => (
            <ProductCard
              key={p._id}
              name={p.name}
              price={p.price}
              image={p.image}
              video={p.video}
              height={p.height}
              width={p.width}
              num_of_pockets={p.num_of_pockets}
              onImageClick={(src, alt) => setLightbox({ src, alt })}
            />
          ))}
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer text-white"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
