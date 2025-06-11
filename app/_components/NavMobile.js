"use client";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { navLinks } from "../_lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavMobile() {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div>
      <Hamburger size={22} toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <div className="fixed left-0 right-0 top-[5rem] border-b border-b-white/20 p-5 pt-7 backdrop-blur-md backdrop-filter">
          <ul className="grid gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.to;
              return (
                <li key={link.label} className="w-full rounded-xl p-[0.08rem]">
                  <Link
                    href={link.to}
                    onClick={() => setOpen((prev) => !prev)}
                    className={`flex w-full items-center transition-colors  hover:bg-primary-80 justify-between bg-primary-100  p-5 ${
                      isActive ? "text-accent-100" : "text-accent-40"
                    }`}
                  >
                    <span className="flex gap-1 text-lg">{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavMobile;
