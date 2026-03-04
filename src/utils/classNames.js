/**
 * Utility for conditionally joining classNames
 * @param {...(string|Object|Array)} args - Class names or conditional objects
 * @returns {string} Combined class names
 */
export const cn = (...args) => {
  return args
    .flat()
    .filter((x) => typeof x === 'string' && x.length > 0)
    .join(' ');
};

/**
 * Merge theme classes with custom classes
 * @param {string} themeClasses - Classes from theme
 * @param {string} customClasses - Additional custom classes
 * @returns {string} Combined classes
 */
export const mergeThemeClasses = (themeClasses, customClasses = '') => {
  return cn(themeClasses, customClasses);
};
