import { NavLink, useLocation } from "react-router-dom";
import { Home, Camera, Calendar, IndianRupee, HelpCircle, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/agenda", label: "Agenda", icon: Calendar },
  { to: "/tariffs", label: "Tariffs", icon: IndianRupee },
  { to: "/faq", label: "FAQ", icon: HelpCircle },
  { to: "/resortpics", label: "Resort Pictures", icon: Camera },
  { to: "/contact", label: "Contact", icon: Mail },
];

export default function AppSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const sidebarContent = (
    <nav className="flex flex-col gap-1 px-3">
      {navItems.map((item) => {
        const active = location.pathname === item.to;
        return (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
              active
                ? "bg-primary/15 text-primary glow-gold"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </NavLink>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed left-4 top-4 z-50 rounded-lg bg-secondary p-2 text-foreground lg:hidden"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 flex h-full w-64 flex-col border-r border-border bg-sidebar transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-1 border-b border-border px-6 py-6">
          <span className="text-2xl font-serif font-bold gold-text">TCE 92–96</span>
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
            Pearl Jubilee Reunion
          </span>
        </div>

        <div className="mt-4 flex-1 overflow-y-auto">
          {sidebarContent}
        </div>

        <div className="border-t border-border px-6 py-4">
          <p className="text-xs text-muted-foreground text-center">
            July 24–25, 2026 · Madurai
          </p>
        </div>
      </aside>
    </>
  );
}
