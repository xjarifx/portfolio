import PropTypes from 'prop-types';
import { cn } from '../../utils';

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
  disabled = false,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center gap-2 rounded transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    default:
      "glass-light text-slate-200 hover:glass-hover hover:text-teal-300",
    accent:
      "glass-light border-teal-400/20 text-teal-300 hover:glass-hover hover:border-teal-400/40",
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
      disabled={disabled}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'accent']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
};
