import Link from "next/link";
import Logo from "./Logo";
import { socialLinks } from "@/app/_lib/constants";
import Image from "next/image";

function Footer() {
  return (
    <footer className=" bg-primary-100 px-5 py-10">
      <div className="flex flex-col md:flex-row gap-y-10 justify-between items-center px-0 max-w-7xl mx-auto gap-x-5">
        <Logo location="footer" />
        <div className="flex flex-col gap-y-2 justify-between items-center md:flex-row md:gap-x-5">
          {socialLinks.map((social, index) => (
            <Link href={social.link} key={index} blank target="_blank">
              <div className="flex flex-row gap-x-1 items-center justify-center hover:text-secondary-20">
                <Image
                  src={social.icon}
                  alt={social.alt}
                  height={30}
                  width={30}
                />
                <p className="text-md font-normal pt-1">{social.alt}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-between items-center"></div>
        <p className="text-sm font-normal pt-1">
          Copyright &copy; Laxita Jain 2025, All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
