import { useState } from "react";
import { NavLink } from "react-router";
import { useNavigate } from "react-router-dom";
const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="17" x2="20" y2="17" />
  </svg>
);
const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
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
  const navigate = useNavigate();
  const handleClick = () => {
    setClickCount(prev => prev + 1);

    setTimeout(() => {
      setClickCount(0);
    }, 1500);

    if (clickCount + 1 === 3) {
      navigate("/admin-login");
    }
  };

  return (
    <header className="sticky top-0 z-50 u-glass border-b border-edge">
      <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between px-5 lg:px-8">

        <div>
          <span onClick={() => handleClick()} className="text-[19px] font-bold tracking-[-0.03em] text-fg transition-colors">Bag</span>
          <span onClick={() => handleClick()} className="text-[19px] font-bold tracking-[-0.03em] text-act transition-colors">Nest</span>
          <span className="ml-1.5 h-1.5 w-1.5 rounded-full bg-act group-hover:shadow-glow transition-shadow" />
        </div>

        <ul className="hidden md:flex items-center gap-1">
          {NAV.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `relative block px-4 py-2 text-[13px] font-medium rounded-[var(--radius-md)] transition-all duration-200
                  ${isActive
                    ? "text-fg bg-raised"
                    : "text-fg-3 hover:text-fg hover:bg-raised"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] w-5 rounded-full bg-act" />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2 rounded-[var(--radius-md)] text-fg-3 hover:text-fg hover:bg-raised transition-all"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </nav>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-[var(--ease-spring)] ${open ? "max-h-56 border-t border-edge" : "max-h-0"
          }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-3">
          {NAV.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2.5 text-sm font-medium rounded-[var(--radius-md)] transition-all duration-200
                  ${isActive ? "text-fg bg-raised" : "text-fg-3 hover:text-fg hover:bg-raised"}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}