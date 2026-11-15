const linkClass =
  "underline underline-offset-2 decoration-accent-100/40 hover:decoration-accent-100 transition-colors";

// The CC icons (from the Creative Commons press kit) are self-hosted: the CC mirror sends no CORS
// headers, and browsers refuse cross-origin mask images without them. Masking lets them take the text colour.
function CcIcon({ name }) {
  const url = `url("/icons/${name}.svg")`;
  return (
    <span
      aria-hidden="true"
      className="inline-block h-[1em] w-[1em] ml-[0.2em] align-[-0.15em] bg-accent-100"
      style={{
        maskImage: url,
        WebkitMaskImage: url,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}

function Footer() {
  return (
    <footer className=" bg-primary-100 px-5 py-6">
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <p className="text-sm font-normal text-center">

          &copy; 2026 by {" "}
          <a
            href="https://github.com/laxitajain"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Laxita Jain
          </a>{" "}
          licensed under{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="license noopener noreferrer"
            className={linkClass}
          >
            CC BY 4.0
          </a>
          <CcIcon name="cc" />
          <CcIcon name="cc-by" />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
