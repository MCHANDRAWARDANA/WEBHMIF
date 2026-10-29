export default function ScrollReveal({ children, className = "", delay = 0, variant = "up" }) {
  return (
    <div
      className={`scroll-reveal ${className}`}
      data-reveal={variant}
      style={{ "--reveal-delay": `${Math.min(Math.max(delay, 0), 450)}ms` }}
    >
      {children}
    </div>
  );
}
