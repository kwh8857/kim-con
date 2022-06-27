import React, { useCallback, useEffect, useRef } from "react";

function Infinite({ setPage }) {
  const dom = useRef(null);
  const handleScroll = useCallback(
    ([entry]) => {
      if (entry.isIntersecting) {
        setPage((prev) => prev + 1);
      }
    },
    [setPage]
  );

  useEffect(() => {
    if (dom) {
      let observer;
      const { current } = dom;
      if (current) {
        observer = new IntersectionObserver(handleScroll, {
          threshold: 0.1,
        });
        observer.observe(current);

        return () => observer && observer.disconnect();
      }
    }
  }, [handleScroll, dom]);

  return <div ref={dom}></div>;
}

export default Infinite;
