import { languages, frameworks, platforms } from "@/app/_lib/constants";
import Image from "next/image";

export const metadata = {
  title: "Skills",
};

export default function Page() {
  return (
    <div>
      <h2 className=" text-2xl text-accent-400 mb-7">Tools and Platforms</h2>
      <div className="mt-8">
        <ul className="space-y-8">
          <li className="p-2">
            <button className="bg-primary-100 mb-3 p-2 rounded-md w-40 cursor-default text-lg">
              Languages
            </button>
            <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4">
              {languages.map((item) => (
                <li
                  key={item.name}
                  className="relative group flex justify-center items-center rounded-full bg-transparent ring-2 ring-secondary-20 lg:p-2 p-4 sm:p-1"
                >
                  <Image
                    src={item.src}
                    className=""
                    alt={item.name}
                    width="80"
                    height="80"
                    quality={100}
                  ></Image>
                  <span className="absolute bottom-0 transform translate-y-full font-body-1 text-center bg-primary-100 sm:bg-primary-90 text-white-1 text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </li>
          <li className="p-2">
            <button className="bg-primary-100 mb-3 p-2 rounded-md w-80 cursor-default text-lg">
              Frameworks & Techonolgies
            </button>
            <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4">
              {frameworks.map((item) => (
                <li
                  key={item.name}
                  className="relative group flex justify-center items-center rounded-full bg-transparent ring-2 ring-secondary-20 lg:p-2 p-4 sm:p-1"
                >
                  <Image
                    src={item.src}
                    className=""
                    alt={item.name}
                    width="80"
                    height="80"
                    quality={100}
                  ></Image>
                  <span className="absolute bottom-0 transform translate-y-full font-body-1 text-center bg-primary-100 sm:bg-primary-90 text-white-1 text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </li>
          <li className="p-2">
            <button className="bg-primary-100 mb-3 p-2 rounded-md w-80 cursor-default text-lg">
              Platforms & Version Control
            </button>
            <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4">
              {platforms.map((item) => (
                <li
                  key={item.name}
                  className="relative group flex justify-center items-center rounded-full bg-transparent ring-2 ring-secondary-20 lg:p-2 p-4 sm:p-1"
                >
                  <Image
                    src={item.src}
                    className=""
                    alt={item.name}
                    width="80"
                    height="80"
                    quality={100}
                  ></Image>
                  <span className="absolute bottom-0 transform translate-y-full font-body-1 text-center bg-primary-100 sm:bg-primary-90 text-white-1 text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
