import Link from "next/link";
import Logo from "./Logo";
import { socialLinks } from "@/app/_lib/constants";
import Image from "next/image";

function Footer() {
  return (
    <footer className=" bg-primary-100 px-5 py-8">
      <div className="flex flex-col md:grid md:grid-cols-3 gap-y-10 items-center px-0 max-w-7xl mx-auto gap-x-5">
        <div className="md:justify-self-start">
          <Logo location="footer" />
        </div>
        <div className="flex flex-row items-center justify-center gap-x-8 md:mt-5">
          {socialLinks.map((social, index) => (
            <Link
              href={social.link}
              key={index}
              target="_blank"
              aria-label={social.alt}
              className="transition-transform duration-200 hover:-translate-y-1 hover:opacity-80"
            >
              <Image src={social.icon} alt={social.alt} height={30} width={30} />
            </Link>
          ))}
        </div>
        <p className="text-sm font-normal pt-1 md:mt-5 md:justify-self-end text-center md:text-right">
          Copyright &copy; Laxita Jain 2025, All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
