import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (itemCount: number, threshold = 0.2) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    Array(itemCount).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate items one by one
            const animateItems = () => {
              setVisibleItems((prev) => {
                const newState = [...prev];
                const firstHiddenIndex = newState.findIndex((item) => !item);
                if (firstHiddenIndex !== -1) {
                  newState[firstHiddenIndex] = true;
                }
                return newState;
              });
            };

            // Initial animation
            animateItems();
            
            // Animate remaining items with delay
            for (let i = 1; i < itemCount; i++) {
              setTimeout(animateItems, i * 150);
            }
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [itemCount, threshold]);

  return { ref, visibleItems };
};
