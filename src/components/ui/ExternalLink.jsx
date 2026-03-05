import PropTypes from 'prop-types';
import { cn } from '../../utils';

/**
 * External link component
 * Light theme: gray border, purple hover. No gradients.
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
      className={cn(
        "inline-flex items-center gap-1 rounded-md border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none",
        className
      )}
      aria-label={label || `${children} (opens in a new tab)`}
      {...props}
    >
      <span className={textClassName}>{children}</span>
      {showIcon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-3.5 w-3.5 shrink-0"
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

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  textClassName: PropTypes.string,
  showIcon: PropTypes.bool,
};
