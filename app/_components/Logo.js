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
        <span className="flex h-[50px] w-[50px] items-center justify-center font-yesteryear text-4xl leading-none text-accent-100">
          LJ
        </span>
      </span>
      Laxita Jain
    </Link>
  );
}

export default Logo;
