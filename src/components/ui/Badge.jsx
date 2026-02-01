/**
 * Reusable Badge component for tags and tech badges
 * Displays inline tags with consistent styling
 */
export const Badge = ({
  children,
  className = "",
  variant = "accent",
  ...props
}) => {
  const variants = {
    accent: "bg-teal-400/10 text-teal-300",
    default: "bg-slate-700/50 text-slate-300",
  };

  return (
    <div
      className={`flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
