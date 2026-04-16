import { useEffect, useRef, useState } from "react";

type UseCarouselOptions = {
  threshold?: number;

  autoScrollSpeed?: number;

  dragSpeed?: number;

  loopResetTo?: number;
};

export function useCarousel<T extends HTMLElement = HTMLDivElement>(
  options: UseCarouselOptions = {},
) {
  const {
    threshold = 0.4,
    autoScrollSpeed = 0.5,
    dragSpeed = 2,
    loopResetTo = 1,
  } = options;

  const containerRef = useRef<T | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const isMouseDownRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => setIsVisible(entries[0]?.isIntersecting ?? false),
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animationId = 0;

    const tick = () => {
      if (isVisible && !isHovered && !isDragging) {
        el.scrollLeft += autoScrollSpeed;

        const halfWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft = loopResetTo;
        }
      }

      animationId = requestAnimationFrame(tick);
    };

    animationId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationId);
  }, [isVisible, isHovered, isDragging, autoScrollSpeed, loopResetTo]);

  const setCursor = (cursor: "grab" | "grabbing") => {
    const el = containerRef.current;
    if (!el) return;
    el.style.cursor = cursor;
  };

  const onMouseDown = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;

    isMouseDownRef.current = true;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  };

  const onMouseUp = () => {
    isMouseDownRef.current = false;
    setIsDragging(false);
    setCursor("grab");
  };

  const onMouseLeave = () => {
    isMouseDownRef.current = false;
    setIsDragging(false);
    setIsHovered(false);
    setCursor("grab");
  };

  const onMouseMove = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el || !isMouseDownRef.current) return;

    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * dragSpeed;

    if (!isDragging && Math.abs(walk) > 5) {
      setIsDragging(true);
      setCursor("grabbing");
    }

    if (isDragging) {
      e.preventDefault();
      el.scrollLeft = scrollLeftRef.current - walk;
    }
  };

  const onMouseEnter = () => {
    setIsHovered(true);
  };

  const shouldAllowClick = !isDragging;

  return {
    containerRef,
    isVisible,
    isHovered,
    isDragging,
    shouldAllowClick,

    // handlers
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    onMouseMove,
    onMouseEnter,
  };
}
