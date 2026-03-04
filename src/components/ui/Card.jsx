import PropTypes from 'prop-types';
import { cn } from '../../utils';

/**
 * Card component
 * Reusable card wrapper with hover effects
 */
export const Card = ({ children, className = '' }) => {
  return (
    <div
      className={cn(
        'group relative grid gap-4 pb-1 transition-all lg:group-hover/list:opacity-50 lg:hover:!opacity-100',
        className
      )}
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block glass-light lg:group-hover:glass-hover lg:group-hover:shadow-xl"></div>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
