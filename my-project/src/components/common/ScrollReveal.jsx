import useScrollReveal from "../../hooks/useScrollReveal";

export default function ScrollReveal({ children, className = "", delay = 0 }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`
        transform-gpu
        transition-all
        duration-700
        ease-out
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
        ${className}
      `}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
