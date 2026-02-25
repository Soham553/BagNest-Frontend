import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { PlusIcon, TrashIcon, HomeIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { Button, EmptyState, Spinner, Skeleton } from "./ui";

export const Audit = () => {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/bagnest/products")
      .then(res => res.json())
      .then(data => { setproducts(data.Products); setloading(false); });
  }, []);

  const deleteProduct = async (id) => {
    console.log(id);
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;
    await fetch(`http://localhost:3000/bagnest/products/${id}`, { method: "DELETE" });
    setproducts(products.filter(p => p._id !== id));
  };
  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-page">
        <div className="text-center u-fade-in">
          <Spinner size={28} className="mx-auto mb-4 text-act" />
          <p className="text-xs font-medium text-fg-3 tracking-wide">Loading products…</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-page">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
        <div className="u-glass rounded-[var(--radius-xl)] p-6 mb-8 u-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-act-subtle border border-act/15 flex items-center justify-center u-glow-pulse">
                <svg className="w-5 h-5 text-act" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-fg-4 uppercase tracking-[.1em] leading-none">Total Products</p>
                <p className="text-3xl font-bold text-fg leading-none mt-1.5">{products.length}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <NavLink to="/">
                <Button variant="secondary" size="sm">
                  <HomeIcon className="w-4 h-4" /> Home
                </Button>
              </NavLink>
              <NavLink to="/admin/addproduct">
                <Button variant="primary" size="sm">
                  <PlusIcon className="w-4 h-4 stroke-[2.5]" /> Add Product
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 u-stagger">
            {products.map(product => (
              <div
                key={product._id}
                className="group bg-card rounded-[var(--radius-xl)] border border-edge overflow-hidden transition-all duration-400 hover:border-edge-2 hover:shadow-card-hover hover:-translate-y-1"
              >
                <div className="aspect-[4/5] bg-raised overflow-hidden flex items-center justify-center p-5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 ease-[var(--ease-spring)] group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 pt-4 space-y-3">
                  <h3 className="text-[13px] font-semibold text-fg line-clamp-2 leading-snug min-h-[36px]">
                    {product.name}
                  </h3>
                  <p className="text-lg font-bold text-gold tracking-tight">
                    <span className="text-[13px] font-semibold text-gold-dim mr-0.5">₹</span>
                    {product.price}
                  </p>
                  <div className="flex gap-2 pt-1">
                    <NavLink to="/admin/update" state={{ product }} className="flex-1">
                      <Button variant="secondary" size="sm" className="w-full text-[11px]">
                        <PencilSquareIcon className="w-1.5 h-3.5" /> Edit
                      </Button>
                    </NavLink>
                    <Button
                      variant="danger"
                      size="sm"
                      className="flex-1 text-[11px]"
                      onClick={() => deleteProduct(product._id)}
                    >
                      <TrashIcon className="w-0 h-3.5" /> Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={
              <svg className="w-7 h-7 text-act" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            }
            title="No Products Available"
            subtitle="Add your first product to get started"
          >
            <NavLink to="/admin/addproduct">
              <Button variant="primary" size="lg">
                <PlusIcon className="w-4 h-4 stroke-[2.5]" /> Add New Product
              </Button>
            </NavLink>
          </EmptyState>
        )}
      </div>
    </div>
  );
};