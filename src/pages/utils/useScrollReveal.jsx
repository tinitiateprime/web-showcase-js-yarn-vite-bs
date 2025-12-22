import { useEffect } from "react";

const useScrollReveal = (ref) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.1 }
    );

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref]);
};

export default useScrollReveal;
