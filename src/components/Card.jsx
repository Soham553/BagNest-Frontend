import React, { useState, useEffect } from "react";
import { Badge, LinkButton, Skeleton } from "./ui";

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
const IgIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);
const BagIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

function CardSkeleton() {
  return (
    <div className="bg-card rounded-[var(--radius-xl)] border border-edge overflow-hidden">
      <div className="aspect-[4/5] u-shimmer" />
      <div className="p-5 space-y-3">
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-5 w-1/3" />
        <div className="flex gap-1.5 pt-0.5">
          <Skeleton className="h-[24px] w-14" />
          <Skeleton className="h-[24px] w-14" />
          <Skeleton className="h-[24px] w-16" />
        </div>
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 flex-1" />
        </div>
      </div>
    </div>
  );
}
function ProductCard({ name, price, image, video, height, width, num_of_pockets, onImageClick }) {
  const waNumber = `${import.meta.env.VITE_wsnum}`;
  const igLink = "https://instagram.com/instylever";

  // Normalize image to always be an array
  const images = Array.isArray(image) ? image : image ? [image] : [];
  // Normalize video to always be an array
  const videos = Array.isArray(video) ? video : video ? [video] : [];

  const msg = encodeURIComponent(
    `I want to buy this product\n\nProduct: ${name}\nPrice: ₹${price}\nImage: ${images[0] || ""}`
  );
  console.log("This is images: ", images);
  console.log("This is video: ", videos);
  const [currentIndex, setcurrentIndex] = useState(0);
  const media = [
    ...images.map(img => ({
      type: "image",
      value: img
    })),
    ...videos.map(vid => ({
      type: "youtube",
      value: vid
    }))
  ]
  const size = media.length;
  const currentItem = media[currentIndex];

  if (!currentItem) {
    return (
      <article className="group bg-card rounded-[var(--radius-xl)] border border-edge overflow-hidden">
        <div className="aspect-[4/5] bg-raised flex items-center justify-center text-fg-3 text-xs">
          Image is Not Avaliable
        </div>
        <div className="p-5 pt-4 space-y-3">
          <h3 className="text-[13px] font-semibold text-fg leading-snug line-clamp-2 min-h-[36px]">{name}</h3>
          <p className="text-xl font-bold text-gold tracking-tight leading-none">
            <span className="text-[13px] font-semibold text-gold-dim mr-0.5">₹</span>{price}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-card rounded-[var(--radius-xl)] border border-edge overflow-hidden transition-all duration-400 hover:border-edge-2 hover:shadow-card-hover hover:-translate-y-1">
      <div
        className="relative aspect-[4/5] bg-raised overflow-hidden cursor-pointer"
        onClick={() => onImageClick && onImageClick(images[currentIndex], name)}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        <button
          onClick={(e) => {
            e.stopPropagation();
            setcurrentIndex(prev =>
              prev === 0 ? size - 1 : prev - 1
            );
          }}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 px-2 py-1 rounded ${size === 1 ? "hidden" : ""}`}
        >
          ‹
        </button>
        {currentItem.type === "image" ? (
          <img
            src={currentItem.value}
            className="absolute inset-0 w-full h-full object-contain p-6 transition duration-300"
          />
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${currentItem.value}?autoplay=1&mute=1&loop=1&playlist=${currentItem.value}`}
            allow="autoplay"
            className="absolute inset-0 w-full h-full object-contain p-6 transition duration-300"
          ></iframe>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setcurrentIndex(prev =>
              prev === size - 1 ? 0 : prev + 1
            );
          }}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 px-2 py-1 rounded ${size === 1 ? "hidden" : ""}`}
        >
          ›
        </button>

      </div>
      <div className="p-5 pt-4 space-y-3">
        <h3 className="text-[13px] font-semibold text-fg leading-snug line-clamp-2 min-h-[36px]">
          {name}
        </h3>
        <p className="text-xl font-bold text-gold tracking-tight leading-none">
          <span className="text-[13px] font-semibold text-gold-dim mr-0.5">₹</span>
          {price}
        </p>
        {(height || width || num_of_pockets != null) && (
          <div className="flex flex-wrap gap-1.5">
            {height && <Badge>{height} cm H</Badge>}
            {width && <Badge>{width} cm W</Badge>}
            {num_of_pockets != null && <Badge>{num_of_pockets} pockets</Badge>}
          </div>
        )}
        <div className="flex gap-2 pt-1">
          <LinkButton
            variant="wa"
            size="sm"
            href={`https://api.whatsapp.com/send?phone=${waNumber}&text=${msg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-xs"
          >
            <WaIcon />
          </LinkButton>
          <LinkButton
            variant="ig"
            size="sm"
            href={igLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-xs"
          >
            <IgIcon />
          </LinkButton>
        </div>
      </div>
    </article>
  );
}
export default function ProductCards() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState(null);
  const [error, setError] = useState(null);
  const [page, setpage] = useState(1);
  const [currentPage, setcurrentPage] = useState(1);
  const [totalPages, settotalPages] = useState(1);

  useEffect(() => {
    console.log("This is items from useeffect: ", items);
  }, [items]);


  useEffect(() => {
    console.log("useEffect triggered");

    fetch(`${import.meta.env.VITE_API_URL}/bagnest/products/`)
      .then(r => {
        if (!r.ok) throw new Error("Failed to fetch products");
        return r.json();
      })
      .then(d => {
        console.log("API RESPONSE:", d);

        setItems(Array.isArray(d.Products) ? d.Products : []);
        setLoading(false);

        console.log("Products:", d.Products);
      })
      .catch(e => {
        console.error("ERROR:", e);
        setError(e.message);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {Array.from({ length: 10 }).map((_, i) => <CardSkeleton key={i} />)}
        </div>
      </section>
    );
  }
  if (error) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-5 u-fade-in">
        <div className="text-center max-w-xs">
          <div className="w-14 h-14 mx-auto mb-5 rounded-[var(--radius-xl)] bg-err-bg border border-err/15 flex items-center justify-center">
            <svg className="w-6 h-6 text-err" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <p className="text-sm font-semibold text-fg mb-1.5">Something went wrong</p>
          <p className="text-xs text-fg-3">{error}</p>
        </div>
      </div>
    );
  }
  if (!items.length) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-5 u-fade-in">
        <div className="text-center max-w-xs">
          <div className="w-14 h-14 mx-auto mb-5 rounded-[var(--radius-xl)] bg-gold-bg border border-gold/15 flex items-center justify-center">
            <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </div>
          <p className="text-sm font-semibold text-fg mb-1.5">No products yet</p>
          <p className="text-xs text-fg-3">Check back soon for our latest drops.</p>
        </div>
      </div>
    );
  }
  return (
    <>
      <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 u-stagger">
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


      {/* ── Image Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm u-fade-in"
          onClick={() => setLightbox(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 sm:top-8 sm:right-8 z-10 w-10 h-10 rounded-full
                       bg-white/10 hover:bg-white/20 border border-white/20
                       flex items-center justify-center
                       transition-all duration-200 cursor-pointer"
            aria-label="Close"
          >
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Image */}
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl u-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
