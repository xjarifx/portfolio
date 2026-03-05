/**
 * Section Header component
 * Displays sticky header for each portfolio section
 */
export const SectionHeader = ({ title, theme, show = true }) => {
  if (!show) return null;

  return (
    <div className={`sticky top-0 z-20 -mx-4 mb-6 w-[calc(100%+2rem)] bg-white/95 px-4 py-4 sm:-mx-6 sm:w-[calc(100%+3rem)] sm:px-6 md:-mx-12 md:w-[calc(100%+6rem)] md:mb-8 md:px-12 lg:mx-auto lg:mb-10 lg:w-full lg:px-0 lg:py-5`}>
      <h2 className={theme.typography.label}>
        {title}
      </h2>
    </div>
  );
};
