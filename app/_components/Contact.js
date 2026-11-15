import { socialLinks } from "@/app/_lib/constants";

export default function Contact() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-20 max-w-5xl mx-auto my-16 sm:my-20 px-4">
      {socialLinks.map((social) => (
        <li key={social.alt}>
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.alt}
            title={social.alt}
            className="block transition-transform duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-100"
          >
            {/* The icon file is used as a mask so it renders in the lightest shade of the contribution heatmap */}
            <span
              aria-hidden="true"
              className="block h-14 w-14 sm:h-16 sm:w-16 bg-secondary-10"
              style={{
                maskImage: `url("${social.icon}")`,
                WebkitMaskImage: `url("${social.icon}")`,
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
              }}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
