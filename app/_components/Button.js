function Button({ children, type }) {
  const styles = {
    primary:
      "bg-secondary-50 text-accent-50 shadow-md w-40 h-10 text-center rounded-xl  hover:shadow-lg text-md hover:bg-secondary-30 hover:text-accent-30 mt-4 mb- 4",
    secondary:
      "bg-secondary-50 text-sm sm:text-[15px] text-accent-10 px-2.5 py-1 rounded-md hover:bg-secondary-30 cursor-default min-w-16",
    tertiary:
      "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs sm:text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border border-input bg-background shadow-xs hover:bg-accent-90 font-semibold mx-1.5 hover:text-primary-100 h-8 sm:h-9 rounded-md px-3 sm:px-4 has-[>svg]:px-3 mt-1 transition-all hover:scale-110",
  };

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
