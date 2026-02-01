/**
 * Section Header component
 * Displays sticky header for each portfolio section
 */
export const SectionHeader = ({ title, theme, show = true }) => {
  if (!show) return null;

  return (
    <div className="sticky top-0 z-20 -mx-6 mb-8 w-[calc(100%+3rem)] bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:w-[calc(100%+6rem)] md:px-12 lg:mx-auto lg:w-full lg:px-0 lg:py-5 lg:mb-10">
      <h2 className={`${theme.typography.label} ${theme.colors.textPrimary}`}>
        {title}
      </h2>
    </div>
  );
};
