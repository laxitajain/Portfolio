import BlogCard from "../_components/BlogCard";
import { blogCards } from "@/app/_lib/constants";

export const metadata = {
  title: "Blog",
};

export default function Page() {
  return (
    <div>
      <ul className="space-y-8">
        {blogCards.map((card) => (
          <li key={card.title}>
            <BlogCard
              title={card.title}
              description={card.description}
              src={card.src}
              href={card.href}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
