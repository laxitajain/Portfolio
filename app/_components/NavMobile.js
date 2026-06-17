"use client";
import { useState } from "react";
import { AlignRight, X } from "lucide-react";
import { navLinks } from "../_lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

function NavMobile() {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!isOpen)}
        className="p-1 text-[#FFEAD2] hover:text-white transition-all duration-300 hover:scale-110"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <AlignRight size={28} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 top-[3.5rem] w-64 border border-primary-80/50 shadow-2xl shadow-black/30 rounded-2xl p-3 bg-primary-90/95 backdrop-blur-xl z-50"
          >
            <ul className="grid gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.to;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.to}
                      onClick={() => setOpen(false)}
                      className={`flex w-full items-center transition-all duration-300 rounded-xl px-4 py-3 ${
                        isActive
                          ? "bg-secondary-70/50 text-accent-100 shadow-sm"
                          : "bg-transparent text-accent-40 hover:bg-primary-80/60 hover:text-accent-80 hover:translate-x-1"
                      }`}
                    >
                      <span className="flex gap-1 text-lg font-medium tracking-wide">{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavMobile;
