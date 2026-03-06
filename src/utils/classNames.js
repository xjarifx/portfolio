/**
 * Conditionally join class names
 */
export const cn = (...args) =>
  args
    .flat()
    .filter((x) => typeof x === "string" && x.length > 0)
    .join(" ");
