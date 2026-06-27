import { useEffect, useState } from "react";

export function useScrollReveal(ref) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.18 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);

  return visible;
}
