import PropTypes from "prop-types";
import { cn } from "../../utils";

/**
 * Card component
 * Light theme: solid border and background, subtle hover. No gradients or glass.
 */
export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={cn(
        'group relative grid gap-4 rounded-lg border border-gray-200 bg-gray-50/50 p-4 transition-colors sm:p-5 lg:border-gray-200 lg:bg-transparent lg:p-0 lg:group-hover/list:opacity-60 lg:hover:!opacity-100',
        className
      )}
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg border border-transparent bg-gray-50 transition-colors motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:border-gray-200 lg:group-hover:bg-gray-50" />
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
