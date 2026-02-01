/**
 * Spotlight component
 * Creates dynamic radial gradient effect following mouse movement
 */
export const Spotlight = ({ enabled = false, position, color, size }) => {
  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(${size} at ${position.x}px ${position.y}px, ${color}, transparent 80%)`,
      }}
    />
  );
};
