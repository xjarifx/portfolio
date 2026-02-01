/**
 * Reusable Button component
 * Supports multiple variants and sizes
 */
export const Button = ({
  onClick,
  children,
  className = "",
  variant = "default",
  size = "md",
  type = "button",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center gap-2 rounded border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70";

  const variants = {
    default:
      "border-slate-600/60 text-slate-200 hover:border-slate-400/80 hover:text-teal-300",
    accent:
      "border-teal-400/40 text-teal-300 hover:border-teal-400 hover:bg-teal-400/5",
  };

  const sizes = {
    sm: "px-2.5 py-1 text-xs font-medium",
    md: "px-3 py-1.5 text-sm font-medium",
    lg: "px-4 py-2 text-base font-medium",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
