import { IconArrowUp } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

const MoveToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 rounded-full bg-blue-500 p-3 text-white shadow-lg transition-all duration-300 z-50 ease-in-out hover:bg-blue-600"
          aria-label="Move to top"
        >
          <IconArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default MoveToTop;
