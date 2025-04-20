import clsx from "clsx";

/**
 * Combines class names conditionally.
 * @param  {...any} inputs 
 * @returns {string}
 */
export function cn(...inputs) {
  return clsx(...inputs);
}
