import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { ArrowLeftIcon, PhotoIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import { Button, Input, Spinner } from "./ui";


const Videopreview = ({ videoPreview, setvideoPreview, setvideo, video }) => {
    const videos = videoPreview;
    const [current, setcurrent] = useState(0);
    const size = videos.length;

    const handleRemove = () => {
        const updatedPreviews = videos.filter((_, i) => i !== current);
        const updatedFiles = video.filter((_, i) => i !== current);

        setvideo(updatedFiles);
        setvideoPreview(updatedPreviews);

        setcurrent(prev => {
            if (updatedPreviews.length === 0) return 0;
            return prev >= updatedPreviews.length ? updatedPreviews.length - 1 : prev;
        });
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const preview = URL.createObjectURL(file);

        setvideo(prev => {
            const updated = [...prev];
            updated[current] = file;
            return updated;
        });

        setvideoPreview(prev => {
            const updated = [...prev];
            updated[current] = preview;
            return updated;
        });
    };

    const handlePrev = () => {
        setcurrent(prev => (prev > 0 ? prev - 1 : videos.length - 1));
    };

    const handleNext = () => {
        setcurrent(prev => (prev < videos.length - 1 ? prev + 1 : 0));
    };

    return (
        <div className="relative rounded-[var(--radius-lg)] overflow-hidden border border-edge">
            <button
                type="button"
                onClick={handlePrev}
                className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 px-2 py-1 rounded ${size === 1 ? "hidden" : ""}`}>
                {"<"}
            </button>

            {size > 0 && (
                videos[current]?.startsWith("blob:") ? (
                    <video key={videos[current]} autoPlay muted loop className="w-full h-52 object-contain bg-raised">
                        <source src={videos[current]} />
                    </video>
                ) : (
                    <iframe
                        key={videos[current]}
                        src={`https://www.youtube.com/embed/${videos[current]}?autoplay=1&mute=1`}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="w-full h-52 bg-raised"
                    />
                )
            )}

            <button
                type="button"
                onClick={handleNext}
                className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 px-2 py-1 rounded ${size === 1 ? "hidden" : ""}`}>
                {">"}
            </button>

            {/* Remove button */}
            <button
                type="button"
                onClick={handleRemove}
                className="absolute top-3 left-3 h-8 px-3 rounded-[var(--radius-md)] bg-page/90 backdrop-blur-sm border border-edge text-fg text-[11px] font-semibold hover:bg-raised transition-all">
                Remove
            </button>

            {/* Change button */}
            <label className="cursor-pointer">
                <button
                    type="button"
                    onClick={(e) => {
                        // Trigger the hidden input via the label
                        e.currentTarget.nextElementSibling.click();
                    }}
                    className="absolute top-3 right-3 h-8 px-3 rounded-[var(--radius-md)] bg-page/90 backdrop-blur-sm border border-edge text-fg text-[11px] font-semibold hover:bg-raised transition-all">
                    Change
                </button>

                <input
                    type="file"
                    hidden
                    accept="video/*"
                    onChange={handleChange}
                />
            </label>

            {/* Counter indicator */}
            {size > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-page/80 backdrop-blur-sm border border-edge rounded-full px-3 py-1 text-[11px] font-medium text-fg-2">
                    {current + 1} / {size}
                </div>
            )}
        </div>
    );
};



const Imagepreview = ({ imagePreview, setImagePreview, image, setimage, handleImageChange }) => {
    const images = imagePreview;
    const [current, setcurrent] = useState(0);
    const size = images.length;

    const handleRemove = () => {
        const updatedPreviews = images.filter((_, i) => i !== current);
        const updatedFiles = image.filter((_, i) => i !== current);

        setimage(updatedFiles);
        setImagePreview(updatedPreviews);
        setcurrent(prev => (prev > 0 ? prev - 1 : 0));
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const preview = URL.createObjectURL(file);

        setimage(prev => {
            const updated = [...prev];
            updated[current] = file;
            return updated;
        });

        setImagePreview(prev => {
            const updated = [...prev];
            updated[current] = preview;
            return updated;
        });
    };

    return (
        <div className="relative rounded-[var(--radius-lg)] overflow-hidden border border-edge">
            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation();
                    setcurrent(prev => (prev === 0 ? size - 1 : prev - 1));
                }}
                className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 px-2 py-1 rounded ${size === 1 ? "hidden" : ""}`}
            >
                ‹
            </button>

            {size > 0 && (
                <img
                    src={images[current]}
                    alt="Preview"
                    className="w-full h-52 object-contain bg-raised p-5"
                />
            )}

            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation();
                    setcurrent(prev => (prev === size - 1 ? 0 : prev + 1));
                }}
                className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 px-2 py-1 rounded ${size === 1 ? "hidden" : ""}`}
            >
                ›
            </button>

            {/* Remove button */}
            <button
                type="button"
                onClick={handleRemove}
                className="absolute top-3 left-3 h-8 px-3 rounded-[var(--radius-md)] bg-page/90 backdrop-blur-sm border border-edge text-fg text-[11px] font-semibold hover:bg-raised transition-all">
                Remove
            </button>

            {/* Change button */}
            <label className="cursor-pointer">
                <button
                    type="button"
                    onClick={(e) => {
                        e.currentTarget.nextElementSibling.click();
                    }}
                    className="absolute top-3 right-3 h-8 px-3 rounded-[var(--radius-md)] bg-page/90 backdrop-blur-sm border border-edge text-fg text-[11px] font-semibold hover:bg-raised transition-all">
                    Change
                </button>

                <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleChange}
                />
            </label>

            {/* Counter indicator */}
            {size > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-page/80 backdrop-blur-sm border border-edge rounded-full px-3 py-1 text-[11px] font-medium text-fg-2">
                    {current + 1} / {size}
                </div>
            )}
        </div>
    );
}

export const UpdateProduct = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const product = location.state?.product;

    const [name, setName] = useState(product?.name || "");
    const [price, setPrice] = useState(product?.price || "");
    const [height, setHeight] = useState(product?.height || "");
    const [width, setWidth] = useState(product?.width || "");
    const [no_of_pockets, setPockets] = useState(product?.no_of_pockets || "");
    const [loading, setLoading] = useState(false);

    // Initialize image files as the existing URLs (strings).
    // When the user changes an image at an index, that slot becomes a File object.
    const [image, setimage] = useState(product?.image || []);
    const [imagePreview, setImagePreview] = useState(product?.image || []);

    // Same for video
    const [video, setvideo] = useState(product?.video || []);
    const [videoPreview, setvideoPreview] = useState(product?.video || []);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;

        const newFiles = [...image, ...files];
        const newPreviews = [...imagePreview, ...files.map(f => URL.createObjectURL(f))];

        setimage(newFiles);
        setImagePreview(newPreviews);
    };

    const handleVideoChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;

        const newFiles = [...video, ...files];
        const newPreviews = [...videoPreview, ...files.map(f => URL.createObjectURL(f))];

        setvideo(newFiles);
        setvideoPreview(newPreviews);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("height", height);
        formData.append("width", width);
        formData.append("no_of_pockets", no_of_pockets);

        // Append images — if the slot is a File, append as file; if string (existing URL), append as string
        image.forEach(item => {
            if (item instanceof File) {
                formData.append("image", item);
            }
        });

        // Append videos — same logic
        video.forEach(item => {
            if (item instanceof File) {
                formData.append("video", item);
            }
        });

        try {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/bagnest/products/${product._id}`,
                {
                    method: "PUT",
                    body: formData,
                }
            );

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || "Update failed");
            }

            alert("Product updated successfully!");
            navigate("/admin");

        } catch (error) {
            console.error(error);
            alert("Failed to update product.");
        } finally {
            setLoading(false);
        }
    };

    if (!product) {
        return (
            <div className="min-h-screen bg-page flex items-center justify-center u-fade-in">
                <div className="text-center max-w-xs px-5">
                    <div className="w-14 h-14 mx-auto mb-5 rounded-[var(--radius-xl)] bg-act-subtle border border-act/15 flex items-center justify-center">
                        <ArrowLeftIcon className="w-6 h-6 text-act" />
                    </div>
                    <p className="text-sm font-semibold text-fg mb-1.5">No product selected</p>
                    <p className="text-xs text-fg-3 mb-6">Choose a product from the admin panel first.</p>
                    <Button variant="primary" size="md" onClick={() => navigate("/admin")}>
                        <ArrowLeftIcon className="w-3.5 h-3.5" /> Go to Admin
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-page py-12 sm:py-16">
            <div className="max-w-lg mx-auto px-5 u-fade-up">
                <button
                    onClick={() => navigate("/admin")}
                    className="group inline-flex items-center gap-2 text-[13px] font-medium text-fg-3 hover:text-act transition-colors mb-8"
                >
                    <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Back to dashboard
                </button>
                <h1 className="text-2xl font-bold text-fg tracking-tight mb-1.5">Update Product</h1>
                <p className="text-sm text-fg-3 mb-8">
                    Editing <span className="font-semibold text-act">{product.name}</span>
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="u-glass rounded-[var(--radius-xl)] p-7 sm:p-8 space-y-6"
                >
                    <div className="flex gap-10">
                        {/* ── Image Section ── */}
                        <div className="w-full">
                            <label className="block text-[13px] font-medium text-fg-2 mb-2">
                                Product Image <span className="text-act">*</span>
                            </label>
                            {imagePreview && imagePreview.length > 0 ? (
                                <>
                                    <Imagepreview
                                        imagePreview={imagePreview}
                                        setImagePreview={setImagePreview}
                                        image={image}
                                        setimage={setimage}
                                        handleImageChange={handleImageChange}
                                    />
                                    {/* Add more images button */}
                                    <label className="mt-2 flex items-center justify-center gap-1.5 w-full h-9 border border-dashed border-edge rounded-[var(--radius-md)] cursor-pointer hover:border-act/50 hover:bg-raised transition-all duration-300 text-[11px] font-medium text-fg-3 hover:text-fg">
                                        <PhotoIcon className="w-3.5 h-3.5" /> Add more images
                                        <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} multiple />
                                    </label>
                                </>
                            ) : (
                                <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed border-edge rounded-[var(--radius-lg)] cursor-pointer hover:border-act/50 hover:bg-raised transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-act-subtle border border-act/15 flex items-center justify-center mb-3 group-hover:shadow-glow transition-shadow duration-300">
                                        <PhotoIcon className="w-6 h-6 text-act/70 group-hover:text-act transition-colors" />
                                    </div>
                                    <span className="text-[13px] font-medium text-fg-3 group-hover:text-fg transition-colors">Click to upload</span>
                                    <span className="text-[11px] text-fg-4 mt-1">PNG, JPG, WEBP up to 10 MB</span>
                                    <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} multiple />
                                </label>
                            )}
                        </div>

                        {/* ── Video Section ── */}
                        <div className="w-full">
                            <label className="block text-[13px] font-medium text-fg-2 mb-2">
                                Product Video <span className="text-act">*</span>
                            </label>
                            {videoPreview && videoPreview.length > 0 ? (
                                <>
                                    <Videopreview
                                        videoPreview={videoPreview}
                                        setvideoPreview={setvideoPreview}
                                        video={video}
                                        setvideo={setvideo}
                                    />
                                    {/* Add more videos button */}
                                    <label className="mt-2 flex items-center justify-center gap-1.5 w-full h-9 border border-dashed border-edge rounded-[var(--radius-md)] cursor-pointer hover:border-act/50 hover:bg-raised transition-all duration-300 text-[11px] font-medium text-fg-3 hover:text-fg">
                                        <PhotoIcon className="w-3.5 h-3.5" /> Add more videos
                                        <input type="file" className="hidden" accept="video/*" onChange={handleVideoChange} multiple />
                                    </label>
                                </>
                            ) : (
                                <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed border-edge rounded-[var(--radius-lg)] cursor-pointer hover:border-act/50 hover:bg-raised transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-act-subtle border border-act/15 flex items-center justify-center mb-3 group-hover:shadow-glow transition-shadow duration-300">
                                        <PhotoIcon className="w-6 h-6 text-act/70 group-hover:text-act transition-colors" />
                                    </div>
                                    <span className="text-[13px] font-medium text-fg-3 group-hover:text-fg transition-colors">Click to upload</span>
                                    <span className="text-[11px] text-fg-4 mt-1">MP4, MOV, WEBP up to 100 MB</span>
                                    <input type="file" className="hidden" accept="video/*" onChange={handleVideoChange} multiple />
                                </label>
                            )}
                        </div>
                    </div>

                    <Input label="Product Name" required type="text" placeholder="e.g., Premium Leather Backpack" value={name} onChange={e => setName(e.target.value)} />
                    <Input label="Price (₹)" required type="number" placeholder="e.g., 2999" value={price} onChange={e => setPrice(e.target.value)} min="0" />

                    <div className="grid grid-cols-2 gap-4">
                        <Input label="Height (cm)" required type="number" placeholder="45" value={height} onChange={e => setHeight(e.target.value)} min="0" />
                        <Input label="Width (cm)" required type="number" placeholder="30" value={width} onChange={e => setWidth(e.target.value)} min="0" />
                    </div>

                    <Input label="Pockets" required type="number" placeholder="5" value={no_of_pockets} onChange={e => setPockets(e.target.value)} min="0" />
                    <div className="pt-2">
                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            disabled={loading}
                            className="w-full"
                        >
                            {loading ? <><Spinner size={16} className="text-white" /> Updating…</> : "Update Product"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
