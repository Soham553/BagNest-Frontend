   import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeftIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { Button, Input, Spinner } from "./ui";
import { useEffect } from "react";


const Videopreview = ({ videoPreview, setvideoPreview, setvideo }) => {
  const videos = videoPreview;
  const [current, setcurrent] = useState(0);
  const size = videos.length;

  const handleRemove = () => {
    const updatedvideo = videos.filter((_, i) => i !== current);

    setvideo(updatedvideo);
    setvideoPreview(updatedvideo);

    setcurrent(prev => {
      if (updatedvideo.length === 0) return 0;
      return prev >= updatedvideo.length ? updatedvideo.length - 1 : prev;
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
        <video key={videos[current]} autoPlay muted loop>
          <source src={videos[current]} />
        </video>
      )}

      <button
        type="button"
        onClick={handleNext}
        className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 px-2 py-1 rounded ${size === 1 ? "hidden" : ""}`}>
        {">"}
      </button>

      <button
        type="button"
        onClick={handleRemove}
        className="absolute top-3 h-8 px-3 rounded-[var(--radius-md)] bg-page/90 backdrop-blur-sm border border-edge text-fg text-[11px] font-semibold hover:bg-raised transition-all">
        Remove
      </button>
    </div>
  );
};

const Imagepreview = ({ imagePreview, setimage, setImagePreview }) => {
  const images = imagePreview;
  const [current, setcurrent] = useState(0);
  const size = images.length;

  const handleRemove = () => {
    const updatedImages = images.filter((_, i) => i !== current);
    setimage(updatedImages);
    setImagePreview(updatedImages);
    setcurrent(prev => (prev > 0 ? prev - 1 : 0));
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

      <button
        type="button"
        onClick={handleRemove}
        className="absolute top-3 right-3 h-8 px-3 rounded-[var(--radius-md)] bg-page/90 backdrop-blur-sm border border-edge text-fg text-[11px] font-semibold hover:bg-raised transition-all"
      >
        Remove
      </button>
    </div>
  );
};

export const Addproduct = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setimage] = useState([]);
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [no_of_pockets, setPockets] = useState("");
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState([]);
  const [video, setvideo] = useState([]);
  const [videoPreview, setvideoPreview] = useState([]);

  useEffect(() => {
    console.log("this is video: ", videoPreview);
  }, [videoPreview]);


  const handleVideoChange = (e) => {
    const file = Array.from(e.target.files);

    setvideo(prev => [...prev, ...file]);

    const previews = file.map(file =>
      URL.createObjectURL(file)
    );

    setvideoPreview(prev => [...prev, ...previews]);
  };

  const handleImageChange = (e) => {
    const file = Array.from(e.target.files);

    setimage(prev => [...prev, ...file]);

    const previews = file.map(file =>
      URL.createObjectURL(file)
    );

    setImagePreview(prev => [...prev, ...previews]);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    if (image.length > 0) {
      image.forEach(file => {
        formData.append("image", file);
      });
    }
    formData.append("height", height);
    formData.append("width", width);
    formData.append("no_of_pockets", no_of_pockets);
    video.forEach(file => {
      formData.append("video", file);
    })

    console.log(formData);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/bagnest/upload`, {
        method: "Post",
        body: formData
      });
      const data = await res.json();
      if (res.status == 201) {
        alert("Product added successfully!");
      } else {
        alert("Something went wrong");
      }
      setName("");
      setPrice("");
      setimage([]); -
        setHeight("");
      setWidth("");
      setPockets("");
      setImagePreview([]);
    } catch (error) {
      console.error(error);
      alert("Failed to add product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-page py-12 sm:py-16">
      <div className="max-w-lg mx-auto px-5 u-fade-up">
        <button
          onClick={() => navigate("/admin", { state: { refresh: true } })}
          className="group inline-flex items-center gap-2 text-[13px] font-medium text-fg-3 hover:text-act transition-colors mb-8"
        >
          <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to dashboard
        </button>
        <h1 className="text-2xl font-bold text-fg tracking-tight mb-1.5">Add Product</h1>
        <p className="text-sm text-fg-3 mb-8">Fill in the details to list a new product.</p>
        <form
          onSubmit={handleSubmit}
          className="u-glass rounded-[var(--radius-xl)] p-7 sm:p-8 space-y-6"
        >
          <div className="flex gap-10">
            <div className="w-full">
              <label className="block text-[13px] font-medium text-fg-2 mb-2">
                Product Image <span className="text-act">*</span>
              </label>
              {imagePreview && imagePreview.length > 0 ? (
                <Imagepreview imagePreview={imagePreview} setImagePreview={setImagePreview} setimage={setimage} />
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed border-edge rounded-[var(--radius-lg)] cursor-pointer hover:border-act/50 hover:bg-raised transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-act-subtle border border-act/15 flex items-center justify-center mb-3 group-hover:shadow-glow transition-shadow duration-300">
                    <PhotoIcon className="w-6 h-6 text-act/70 group-hover:text-act transition-colors" />
                  </div>
                  <span className="text-[13px] font-medium text-fg-3 group-hover:text-fg transition-colors">Click to upload</span>
                  <span className="text-[11px] text-fg-4 mt-1">PNG, JPG, WEBP up to 10 MB</span>
                  <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} multiple/>
                </label>

              )}
            </div>

            <div className="w-full">
              <label className="block text-[13px] font-medium text-fg-2 mb-2">
                Product Video <span className="text-act">*</span>
              </label>
              {videoPreview && videoPreview.length > 0 ? (
                <Videopreview videoPreview={videoPreview} setvideoPreview={setvideoPreview} setvideo={setvideo} />
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed border-edge rounded-[var(--radius-lg)] cursor-pointer hover:border-act/50 hover:bg-raised transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-act-subtle border border-act/15 flex items-center justify-center mb-3 group-hover:shadow-glow transition-shadow duration-300">
                    <PhotoIcon className="w-6 h-6 text-act/70 group-hover:text-act transition-colors" />
                  </div>
                  <span className="text-[13px] font-medium text-fg-3 group-hover:text-fg transition-colors">Click to upload</span>
                  <span className="text-[11px] text-fg-4 mt-1">MP4, MOV, WEBP up to 100 MB</span>
                  <input type="file" className="hidden" accept="video/*" onChange={handleVideoChange}  multiple />
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

          {/* submit */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={loading}
              className="w-full"
            >
              {loading ? <><Spinner size={16} className="text-white" /> Adding…</> : "Add Product"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
