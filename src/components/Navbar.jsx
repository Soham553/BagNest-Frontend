import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="17" x2="20" y2="17" />
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
    setTimeout(() => {
      setClickCount(0);
    }, 1500);

    if (clickCount + 1 === 3) {
      navigate("/admin-login");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none transition-all duration-300">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`pointer-events-auto w-full max-w-4xl mx-auto rounded-full transition-all duration-300 border ${
          scrolled 
            ? "u-glass shadow-lg py-2 px-6" 
            : "bg-transparent border-transparent py-4 px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="cursor-pointer flex items-center group" onClick={handleClick}>
            <span className="text-xl font-bold tracking-tight text-fg transition-colors">Bag</span>
            <span className="text-xl font-bold tracking-tight text-act group-hover:text-act-hover transition-colors">Nest</span>
            <span className="ml-1.5 h-1.5 w-1.5 rounded-full bg-act shadow-glow transition-shadow" />
          </div>

          <ul className="hidden md:flex items-center gap-2">
            {NAV.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-200
                    ${isActive
                      ? "text-white bg-act/10"
                      : "text-fg-3 hover:text-fg hover:bg-raised"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <motion.span 
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full border border-act/30 -z-10"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center">
             <button onClick={() => navigate("/admin-login")} className="p-2 text-fg-3 hover:text-act transition-colors opacity-0 hover:opacity-100 focus:opacity-100">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
             </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 -mr-2 text-fg hover:text-act transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 pointer-events-auto md:hidden overflow-hidden u-glass rounded-[var(--radius-xl)] shadow-2xl border-edge-2"
          >
            <ul className="flex flex-col gap-1 p-4">
              {NAV.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 text-base font-medium rounded-[var(--radius-md)] transition-all duration-200
                      ${isActive ? "text-act bg-act/10" : "text-fg-3 hover:text-fg hover:bg-raised"}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}