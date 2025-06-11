function Button({ children, type }) {
  const styles = {
    primary:
      "bg-secondary-50 text-accent-50 shadow-md w-40 h-10 text-center rounded-xl  hover:shadow-lg text-md hover:bg-secondary-30 hover:text-accent-30 mt-4 mb- 4",
    secondary:
      "bg-secondary-50 text-[1rem] min-w-20 text-accent-10  px-1.5 py-1 rounded-lg hover:bg-secondary-30 cursor-default min-w-24",
    tertiary:
      // "bg-accent-90 text-[18px] p-1.5 m-0.75 min-w-40 font-semibold text-primary-100 rounded-lg hover:text-accent-90 hover:bg-primary-90 hover:border-2 hover:border-accent-90"
      // ,
      "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border border-input bg-background shadow-xs hover:bg-accent-90 font-semibold mx-1.5 hover:text-primary-100 h-10 rounded-md px-6 has-[>svg]:px-4 mt-1 transition-all hover:scale-110 lg:h-11 lg:text-base xl:h-12 xl:text-lg",
  };

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
