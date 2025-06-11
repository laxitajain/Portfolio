import Link from "next/link";
import { sideNavLinks } from "@/app/_lib/constants";

function SideNavigation() {
  return (
    <nav className="m-0">
      <ul className="sm:flex sm:flex-col gap-2 h-full text-lg hidden">
        {sideNavLinks.map((link) => (
          <li key={link.label}>
            <Link
              className={`py-3 px-5 hover:bg-primary-80 transition-colors flex items-center gap-4  text-accent-90 hover:text-accent-40`}
              href={link.to}
            >
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col overflow-x-auto scrollable space-x-0 text-md sm:hidden ">
        {sideNavLinks.map((link) => (
          <li key={link.label} className="max-w-21">
            <Link
              className={`py-3 px-2.5  hover:bg-primary-80 transition-colors flex items-center gap-4  text-accent-90 hover:text-accent-40`}
              href={link.to}
            >
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideNavigation;
