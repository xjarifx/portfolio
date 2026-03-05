import PropTypes from 'prop-types';

/**
 * Card link — used in article/cert cards. Light theme: purple hover, no gradient.
 */
export const CardLink = ({ href, children, ariaLabel }) => {
  return (
    <a
      className="inline-flex items-baseline font-medium text-gray-900 transition-colors hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 group/link text-base leading-tight"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={ariaLabel}
    >
      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
      <span>
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 motion-reduce:transition-none"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </a>
  );
};

CardLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};
