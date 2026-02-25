import React from "react";


const styles = {
    base: "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 active:scale-[.97] disabled:opacity-40 disabled:pointer-events-none select-none cursor-pointer",
    size: {
        sm: "h-9 px-4 text-xs rounded-[var(--radius-md)]",
        md: "h-10 px-5 text-[13px] rounded-[var(--radius-lg)]",
        lg: "h-12 px-7 text-sm rounded-[var(--radius-lg)]",
    },
    variant: {
        primary:
            "bg-gradient-to-br from-act to-[#6a48f0] text-white shadow-md hover:shadow-glow hover:brightness-110",
        secondary:
            "bg-card text-fg border border-edge hover:border-edge-2 hover:bg-raised shadow-xs",
        danger:
            "bg-raised text-err border border-err/20 hover:bg-err hover:text-white hover:border-err hover:shadow-[0_0_16px_-4px_rgba(244,63,94,0.3)] shadow-xs",
        ghost:
            "text-fg-3 hover:text-fg hover:bg-raised",
        wa: "bg-wa text-white hover:bg-wa-h shadow-sm",
        ig: "bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white hover:opacity-90 shadow-sm",
    },
};

export function Button({ children, variant = "primary", size = "md", className = "", ...props }) {
    return (
        <button
            className={`${styles.base} ${styles.size[size]} ${styles.variant[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

export function LinkButton({ children, variant = "primary", size = "md", className = "", ...props }) {
    return (
        <a
            className={`${styles.base} ${styles.size[size]} ${styles.variant[variant]} ${className}`}
            {...props}
        >
            {children}
        </a>
    );
}

export function Input({ label, required, className = "", ...props }) {
    return (
        <div className={className}>
            {label && (
                <label className="block text-[13px] font-medium text-fg-2 mb-2">
                    {label}
                    {required && <span className="text-act ml-0.5">*</span>}
                </label>
            )}
            <input
                className="w-full h-11 px-4 bg-page border border-edge rounded-[var(--radius-md)] text-sm text-fg placeholder:text-fg-4 outline-none transition-all duration-200 focus:border-act focus:ring-2 focus:ring-act-ring focus:bg-white"
                {...props}
            />
        </div>
    );
}

export function Spinner({ size = 20, className = "" }) {
    return (
        <svg
            className={`animate-spin ${className}`}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
        >
            <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
            <path className="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
    );
}

export function EmptyState({ icon, title, subtitle, children }) {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-240px)] u-fade-in">
            <div className="text-center max-w-sm px-5">
                {icon && (
                    <div className="w-16 h-16 mx-auto mb-6 rounded-[var(--radius-xl)] bg-act-subtle border border-edge flex items-center justify-center u-glow-pulse">
                        {icon}
                    </div>
                )}
                <h3 className="text-lg font-semibold text-fg mb-2">{title}</h3>
                {subtitle && <p className="text-sm text-fg-3 mb-7 leading-relaxed">{subtitle}</p>}
                {children}
            </div>
        </div>
    );
}

export function Badge({ children }) {
    return (
        <span className="inline-flex items-center h-[24px] px-2.5 rounded-[var(--radius-full)] bg-raised border border-edge text-[11px] font-medium text-fg-3 leading-none">
            {children}
        </span>
    );
}

export function PageShell({ children, className = "" }) {
    return (
        <div className={`min-h-screen bg-page ${className}`}>
            <div className="max-w-7xl mx-auto px-5 lg:px-8">
                {children}
            </div>
        </div>
    );
}


export function Skeleton({ className = "" }) {
    return <div className={`u-shimmer rounded-[var(--radius-md)] ${className}`} />;
}
