import PropTypes from 'prop-types';
import { cn } from '../../utils';

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
    accent: "glass-light text-teal-300 border-teal-400/20",
    default: "glass-light text-slate-300",
  };

  return (
    <div
      className={cn(
        "flex items-center rounded-full px-3 py-1 text-xs leading-5 font-medium",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['accent', 'default']),
};
