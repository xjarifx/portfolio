/**
 * Validation utilities
 */

/**
 * Check if a URL is valid
 */
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Check if an email is valid (basic check)
 */
export const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

/**
 * Sanitize string for use as HTML id
 */
export const sanitizeId = (str) => {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-');
};
