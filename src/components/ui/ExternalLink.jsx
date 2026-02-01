/**
 * Reusable External Link component
 * Handles external links with consistent styling and accessibility
 */
export const ExternalLink = ({
  href,
  children,
  label,
  className = "",
  textClassName = "",
  showIcon = true,
  ...props
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`inline-flex items-center gap-1 rounded border border-slate-600/60 px-2.5 py-1 text-xs font-medium text-slate-200 hover:border-slate-400/80 hover:text-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70 transition-colors ${className}`}
      aria-label={label || `${children} (opens in a new tab)`}
      {...props}
    >
      <span className={textClassName}>{children}</span>
      {showIcon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-3.5 w-3.5"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </a>
  );
};
