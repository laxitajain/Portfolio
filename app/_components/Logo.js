import Image from "next/image";
import Link from "next/link";

function Logo({ location }) {
  return (
    <Link href="/" className="flex items-center gap-4 z-10 text-3xl mt-5 ">
      <span
        className={`${
          location == "header"
            ? "bg-primary-100"
            : "bg-transpaent border-[1px] border-accent-100 "
        }  rounded-full text-md p-2.5 `}
      >
        <Image width={50} height={50} src="/logo.png" alt="Logo" className="" />
      </span>
      Laxita Jain
    </Link>
  );
}

export default Logo;
