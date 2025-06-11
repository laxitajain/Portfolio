import Image from "next/image";
import Link from "next/link";

function BlogCard({ title, description, src, href }) {
  return (
    <Link href={href} target="_blank">
      <div className="bg-accent-50 p-2 flex justify-between flex-row transition-transform duration-300 ease-in-out transform hover:scale-[1.02] hover:-rotate-1 cursor-pointer shadow-md hover:shadow-xl hover:bg-accent-20 md:mt-12">
        <div className=" min-w-24 max-h-52 sm:max-h-3 flex items-center">
          <Image
            src={src}
            alt={title}
            width={200}
            height={200}
            quality={100}
            className="rounded-md"
          />
        </div>
        <div className="mx-4 py-2 px-2">
          <h2 className="text-m font-bold sm:text-xl text-secondary-100 text-left">
            {title}
          </h2>
          <p className="sm:mt-4 mt-0.5 sm:text-sm text-xs text-primary-90 text-left">
            {description}
            <span className="text-blue-700 hover:text-blue-400">
              (View More)
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
