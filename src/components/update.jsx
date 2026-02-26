import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { ArrowLeftIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { Button, Input, Spinner } from "./ui";

export const UpdateProduct = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const product = location.state?.product;

    const [name, setName] = useState(product?.name || "");
    const [price, setPrice] = useState(product?.price || "");
    const [image, setimage] = useState(null);
    const [height, setHeight] = useState(product?.height || "");
    const [width, setWidth] = useState(product?.width || "");
    const [no_of_pockets, setPockets] = useState(product?.no_of_pockets || "");
    const [loading, setLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState(product?.image || null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setimage(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
        }
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

        if (image) {
            formData.append("image", image);
        }

        try {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/bagnest/products/${product._id}`,
                {
                    method: "PUT",
                    body: formData,   // ✅ SEND FORMDATA
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
                    <div>
                        <label className="block text-[13px] font-medium text-fg-2 mb-2">Product Image</label>
                        {imagePreview ? (
                            <div className="relative rounded-[var(--radius-lg)] overflow-hidden border border-edge">
                                <img src={imagePreview} alt="Preview" className="w-full h-52 object-contain bg-raised p-5" />
                                <button
                                    type="button"
                                    onClick={() => { setimage(null); setImagePreview(null); }}
                                    className="absolute top-3 right-3 h-8 px-3 rounded-[var(--radius-md)] bg-page/90 backdrop-blur-sm border border-edge text-fg text-[11px] font-semibold hover:bg-raised transition-all"
                                >
                                    Change
                                </button>
                            </div>
                        ) : (
                            <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed border-edge rounded-[var(--radius-lg)] cursor-pointer hover:border-act/50 hover:bg-raised transition-all duration-300 group">
                                <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-act-subtle border border-act/15 flex items-center justify-center mb-3 group-hover:shadow-glow transition-shadow duration-300">
                                    <PhotoIcon className="w-6 h-6 text-act/70 group-hover:text-act transition-colors" />
                                </div>
                                <span className="text-[13px] font-medium text-fg-3 group-hover:text-fg transition-colors">Upload new image</span>
                                <span className="text-[11px] text-fg-4 mt-1">PNG, JPG, WEBP</span>
                                <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                            </label>
                        )}
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
